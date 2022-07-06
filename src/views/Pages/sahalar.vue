<template>
  <div>
	<!--************************************
				Banner Start
		*************************************-->
		<div class="tg-banner tg-haslayout">
			<div class="tg-imglayer">
				<img :src="baseUrl+'_assets/images/bg-pattran.png'" alt="image desctription">
			</div>
			<div class="container">
				<div class="row">
					<div class="tg-banner-content tg-haslayout">
						<div class="tg-pagetitle">
							<h1>GALERİ</h1>
						</div>
						<ol class="tg-breadcrumb">
							<li><a href="#">Home</a></li>
							<li class="active">GALERİ</li>
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
		<main  class="tg-main tg-haslayout">
			<!--************************************
					Soccer Media Start
			*************************************-->
			<section class="tg-main-section tg-soccermedia tg-haslayout">
				<div class="container">
					<div class="col-sm-12 col-xs-12 pull-right">
						<div class="row">
							<div class="tg-tg-soccermedia-head tg-haslayout">
								<ul id="tg-filterbale-nav" class="tg-filterbale-nav option-set">
									<li><a class="active" data-filter="*" href="javascript:void(0);">All</a></li>
									<li><a data-filter=".laliga" href="javascript:void(0);">La Liga</a></li>
									<li><a data-filter=".championship" href="javascript:void(0);">Championship</a></li>
									<li><a data-filter=".scottishpremiership" href="javascript:void(0);">scottish Premiership</a></li>
									<li><a data-filter=".bundesliga" href="javascript:void(0);">Bundesliga</a></li>
								</ul>
							</div>
							<div id="filter-masonry" class="tg-soccermedia-content tg-soccermedia-content2 tg-haslayout">
								<div v-for="s in sahalar" :key="s" class="masonry-grid ">
									<div class="tg-project">
										<figure class="tg-postimg">
											<img :src="baseUrl+'_assets/images/gallery2/img-01.jpg'" alt="image description">
											<figcaption>
												<a class="tg-theme-tag" data-rel="prettyPhoto[iframe]" href="https://www.youtube.com/watch?v=iC9CpnSj-MU"><i class="fa fa-play"></i></a>
												<a class="tg-theme-tag">Detaylar</a>
                                                <label class="h4 text-white"> {{s.department_id_turnuva}} </label>
												<h3> {{s.saha_name_basic}} </h3>
                                                
											</figcaption>
										</figure>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<!--************************************
					Soccer Media End
			*************************************-->
		</main>
		<!--************************************
				Main End
		*************************************-->
  </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
		return{
            baseUrl: process.env.BASE_URL,
            sahalar:[]
		}
    },
    mounted() {
        this.getSahalar();
    },
    methods: {
        getSahalar() {
            axios.post('public/tables/sahalar', {
                "params": JSON.stringify({
                    "page": 1,
                    "limit": "10",
                    "column_array_id": "0",
                    "column_array_id_query": "0",
                    "sorts": {},
                    "filters": {
                    }
                })
            }).then(res => {
                this.sahalar=res.data.data.records
            })
        }
    }
}
</script>

<style>

</style>