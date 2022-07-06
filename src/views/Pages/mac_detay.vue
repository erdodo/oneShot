<template>
    <div>
        <!--************************************
				Banner Start
		*************************************-->
        <div class="tg-banner tg-haslayout">
            <div class="tg-imglayer">
                <img :src="baseUrl + '_assets/images/bg-pattran.png'" alt="image desctription" />
            </div>
            <div class="container">
                <div class="row">
                    <div class="tg-banner-content tg-haslayout">
                        <div class="tg-pagetitle">
                            <h1>MAÇ DETAYLARI</h1>
                        </div>
                        <ol class="tg-breadcrumb">
                            <li><a href="/">ANA SAYFA</a></li>
                            <li class="active">MAÇ DETAYLARI</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
        <!--************************************
				Banner End
		*************************************-->
        <!--************************************
				Main Start
		*************************************-->
        <main id="tg-main" class="tg-main tg-haslayout">
            <div class="tg-main-section tg-haslayout">
                <div class="container">
                    <div class="row">
                        <div id="tg-twocolumns" class="tg-twocolumns tg-haslayout">
                            <div class="col-12 pull-left">
                                <div class="tg-resultdetail">
                                    <div class="tg-matchresult">
                                        <div class="tg-box">
                                            <div class="tg-score">
                                                <h3>{{ detay?.mac_sonucu }}</h3>
                                            </div>
                                            <div class="tg-teamscore">
                                                <strong class="tg-team-logo">
                                                    <a href="#">
                                                        <img :src="
                                                                baseUrl + '_assets/images/team-logo/logo-01.png'
                                                            " alt="image description" />
                                                    </a>
                                                </strong>
                                                <div class="tg-team-nameplusstatus">
                                                    <h4>
                                                        <a href="#">
                                                            {{ detay?.takimlar_ev_sahibi?.[0]?.display }}
                                                        </a>
                                                    </h4>
                                                </div>
                                                <ul class="tg-playernameplusgoadtime">
                                                    <li v-for="(dk,key) in dakikaVeri" :key="key">
                                                        
                                                        <label class="text-white" v-if="dk.veri=='kartlar'">
                                                            <a class="text-primary">{{key}} </a>
                                                            {{dk.kart_goren_futbolcu}}
                                                            {{dk.kart_turu_id}}
                                                        </label>
                                                        <label for="" class="text-white" v-if="dk.veri=='goller'">
                                                        <a class="text-primary">{{key}} </a>
                                                            {{dk.gol_futbolcular_id}}
                                                        </label>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="tg-teamscore">
                                                <strong class="tg-team-logo">
                                                    <a href="#">
                                                        <img :src="
                                                    baseUrl + '_assets/images/team-logo/logo-02.png'
                                                " alt="image description" />
                                                    </a>
                                                </strong>
                                                <div class="tg-team-nameplusstatus">
                                                    <h4>
                                                        <a href="#">
                                                            {{ detay.takimlar_deplasman?.[0]?.display }}
                                                        </a>
                                                    </h4>
                                                </div>
                                                <ul class="tg-playernameplusgoadtime">
                                                    <li v-for="o in detay.futbolcular_maclar_deplasman" :key="o">
                                                        {{ o.display }}
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <!--************************************
				Main End
		*************************************-->
    </div>
</template>

<script>
    //eslint-disable
    import axios from "axios";
    export default {
        data() {
            return {
                baseUrl: process.env.BASE_URL,
                detay: {},
                dakikaVeri:{}
            };
        },
        mounted() {
            this.getMacDetay();
            this.getGoller();
            this.getKartlar();
            this.getDegisiklikler();
        },
        methods: {
            getMacDetay() {
                axios
                    .post("public/tables/maclar/" + this.$route.params.id + "/edit", {
                        params: JSON.stringify({
                            column_set_id: "0"
                        }),
                    })
                    .then((res) => {
                        this.detay = res.data.data.record;
                    });
            },
            getGoller() {
                axios.post('public/tables/goller',{
                    "params": JSON.stringify({
                        "page": 1,
                        "limit": "100",
                        "column_array_id": "0",
                        "column_array_id_query": "0",
                        "sorts": {},
                        "filters": {
                            "maclar_id":{"type":1,"guiType":"multiselect","filter":[this.$route.params.id],"description":""}
                        }
                    })
                }).then(res => {
                    for (const data of Object.values(res.data.data.records)) {
                        data['veri']='goller'
                        this.dakikaVeri[data.gol_dakikasi] = data;
                    }
                })
            },
            getKartlar() {
                axios.post('public/tables/kartlar',{
                    "params": JSON.stringify({
                        "page": 1,
                        "limit": "100",
                        "column_array_id": "0",
                        "column_array_id_query": "0",
                        "sorts": {},
                        "filters": {
                            "maclar_id":{"type":1,"guiType":"multiselect","filter":[this.$route.params.id],"description":""}
                        }
                    })
                }).then(res => {
                    for (const data of Object.values(res.data.data.records)) {
                        data['veri']='kartlar'
                        this.dakikaVeri[data.kart_gorme_dakikasiint] = data;
                    }
                })
            },
             getDegisiklikler() {
                axios.post('public/tables/degisiklikler',{
                    "params": JSON.stringify({
                        "page": 1,
                        "limit": "100",
                        "column_array_id": "0",
                        "column_array_id_query": "0",
                        "sorts": {},
                        "filters": {
                            "maclar_id":{"type":1,"guiType":"multiselect","filter":[this.$route.params.id],"description":""}
                        }
                    })
                }).then(res => {
                    for (const data of Object.values(res.data.data.records)) {
                        data['veri']='degisiklikler'
                        this.dakikaVeri[data.degisklik_dakikasi] = data;
                    }
                })
            }
    },
    watch: {
        dakikaVeri() {
                console.log(this.dakikaVeri);
            }
        }
    };
</script>

<style>
</style>