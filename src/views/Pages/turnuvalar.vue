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
							<h1>TURNUVALAR</h1>
						</div>
						<ol class="tg-breadcrumb">
							<li><a href="/">ANA SAYFA</a></li>
							<li class="active">TURNUVALAR</li>
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
		<main class="tg-main tg-haslayout">
			<!--************************************
					Fixtures Start
			*************************************-->
			<section class="tg-main-section tg-haslayout">
				<div class="container">
					<div class="tg-section-name">
						<h2>TURNUVALAR</h2>
					</div>
					<div v-if="turnuvalarLoading==true" class="px-5 mx-5">
						<div class="load w-100"><span class="loader-73"> </span></div>
					</div>
					<div v-else class="px-5 mx-5">
						<div v-for="t in turnuvalar" :key="t" class="tg-ticket">
							<div class="d-flex flex-column">
								<div class="p-2">
									<span class=" h2 m-0 p-0" > {{t.name_basic}} </span>
								</div>
								<div class="tg-matchdetail">
									<span class="h4"> {{t.turnuva_kategorileri_id}} </span><br>
									
									
									<ul class="tg-matchmetadata">
										<li><time datetime="2016-05-03"> {{t.department_id_turnuva}} </time></li>
										<li>
											<address> {{t.iller_id}} </address>
										</li>
									</ul>
								</div>
							</div>
							<div class="tg-btnsbox">
								<router-link :to="'/turnuva-detaylari/'+t.id" class="tg-btn">Detaylar</router-link>
							</div>
						</div>
					</div>
				</div>
			</section>
			<!--************************************
					Fixtures End
			*************************************-->
		</main>
		<!--************************************
				Main End
		*************************************-->
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		data() {
			return {
				baseUrl: process.env.BASE_URL,
				maclar: [],
				turnuvalar: [],
				turnuvalarLoading: true,
			}
		},
		mounted() {
			this.getTurnuvalar()
		},
		methods: {
			getTurnuvalar() {
				this.turnuvalarLoading = true;
				axios.post('public/tables/turnuvalar', {
					"params": JSON.stringify({
						"page": 1,
						"limit": "10",
						"column_array_id": "0",
						"column_array_id_query": "0",
						"sorts": {},
						"filters": {
							"turnuva_kategorileri_id":{
								"type":1,
								"guiType":"multiselect",
								"filter":[this.$route.params.id]
							}
						}
					})
				}).then(res => {
					this.turnuvalarLoading = false;
					this.turnuvalar = res.data.data.records;
				})
			},
		},
		watch:{
			$route(){
this.getTurnuvalar()
			}
		}
	}
	
</script>

<style>
	table,
	thead,
	tbody,
	tr,
	td,
	th {
		border: none !important;
		border-bottom: 1px solid rgb(238, 238, 238) !important;
	}

	.tg-upcomingmatch {
		height: auto !important;
	}

	.tg-latestresult {
		min-height: 300px;
	}
	.tg-ticket:hover h2{
		color: white;
	}
</style>