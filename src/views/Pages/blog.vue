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
							<h1>Son Haberler / Bloglar</h1>
						</div>
						<ol class="tg-breadcrumb">
							<li><a href="#">Ana Sayfa</a></li>
							<li class="active">Son Haberler / Bloglar</li>
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
			<div class="tg-main-section tg-haslayout">
				<div class="container">
					<div class="row mx-5 px-5">
						<div class="tg-section-name">
							<h2>Son Haberler / Bloglar</h2>
						</div>
						<div class="col-sm-11 col-xs-11 pull-right">
							<div class="tg-blogpost tg-blogpostlist">
								<div class="row">
									<div v-for="b in blog.records" :key="b" class="col-sm-6 col-xs-12">
										<article class="tg-post">
											<figure class="tg-postimg">
												<a href="#">
													<img :src="baseUrl+'_assets/images/blog/img-14.jpg'" alt="image description">
												</a>
											</figure>
											<div class="tg-posttitle"><h3><a href="#"> {{b.title}} </a></h3></div>
											<div class="tg-description">
												<p>
													{{b.description}}
												</p>
											</div>
											<a class="tg-btn" href="#">Read more</a>
										</article>
									</div>
								</div>
							</div>
							<ul class="tg-pagination">
								<li class="tg-prevpage">
									<a class="cursor-pointer" @click="oncekiSayfa()">
										<i class="fa fa-angle-left"></i>
									</a>
								</li>
								<li class="active">
									<a > {{this.params.page}} </a>
								</li>
								<li><a href="#"> {{blog.pages}} </a></li>
								<li class="tg-nextpage">
									<a class="cursor-pointer" @click="sonrakiSayfa()">
										<i class="fa fa-angle-right"></i>
									</a>
								</li>
							</ul>
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
import axios from 'axios';
export default {
data(){
		return{
			baseUrl: process.env.BASE_URL,
			params:{
				"page": 1,
				"limit": "4",
				"column_array_id": "0",
				"column_array_id_query": "0",
				"sorts": {},
				"filters": {
				}
			},
			blog:[]
		}
	},
	mounted() {
		this.getBlog();
	},
	methods: {
		getBlog() {
                axios.post('public/tables/blog',{
                    "params": JSON.stringify(this.params)
                }).then(res => {
                    this.blog=res.data.data
                })
            
		},
		oncekiSayfa() {
			if (this.params.page > 1) {
				this.params.page--
				this.getBlog();
			}
		},
		sonrakiSayfa() {
			if (this.params.page < this.blog.pages) {
				this.params.page++
				this.getBlog();
			}
		}
	}

}
</script>

<style>

</style>