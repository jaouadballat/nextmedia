<template>
 <div>
     <swiper ref="awesomeSwiperA" :options="swiperOptionA" @set-translate="onSetTranslate">
      <!-- slides -->
      <swiper-slide v-for="(post, index) in posts" :key="index">
          {{ post.title }}
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
 </div>
</template>

<script>
import Api from '../config/Api';
import { swiper, swiperSlide } from 'vue-awesome-swiper';


  export default {
      components: {
        LocalSwiper: swiper,
    	LocalSlide: swiperSlide,
     },
     data() {
         return {
            swiperOptionA: {
            pagination: {
                el: '.swiper-pagination'
                }
            },
            posts: []
        }
     },
    methods: {
    	onSetTranslate() {
      	console.log('onSetTranslate')
      }
    },
    created() {
      console.log(this.$route.params.id)
        Api().get('get_recent_posts/')
            .then(response => {
                console.log(response.data);
                this.posts = [...response.data.posts]
            }).catch(error => {
                console.log(error.response);
            })
    }
  }
</script>