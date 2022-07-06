<template>
  <div id="tg-wrapper" class="tg-wrapper tg-haslayout">
		<!--************************************
				Mobile Menu Start
		*************************************-->
		<mobile></mobile>
		<!--************************************
				Mobile Menu End
		*************************************-->
		<!--************************************
				Header Start
		*************************************-->
		<header-page></header-page>
		<!--************************************
				Header End
		*************************************-->
		<!--************************************
				Home Slider Start
		*************************************-->
		<!--slider-box></!--slider-box-->
		<!--************************************
				Home Slider End
		*************************************-->
		<!--************************************
				Main Start
		*************************************-->
		<!--main-page></!--main-page-->
		<div class="main">
			<router-view></router-view>
		</div>
		<!--************************************
				Main End
		*************************************-->
		<!--************************************
				Footer Start
		*************************************-->
		<footer-page></footer-page>
		<!--************************************
				Footer End
		*************************************-->
	</div>
</template>

<script>
import mobile from '@/views/Wrapper/mobile.vue'
import headerPage from '@/views/Wrapper/header-page.vue'
//import sliderBox from '@/views/Wrapper/slider-box.vue'
//import mainPage from '@/views/Wrapper/main-page.vue'
import footerPage from '@/views/Wrapper/footer-page.vue'
export default {
	data(){
		return{
			baseUrl:process.env.BASE_URL
		}
	},
	components:{
		mobile,
		headerPage,
		//sliderBox,mainPage,
		footerPage
	}
}
</script>

<style>
</style>