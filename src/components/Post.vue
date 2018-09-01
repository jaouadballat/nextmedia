<template>
 <div>
     <swiper ref="awesomeSwiperA" :options="swiperOptionA"  @set-translate="onSetTranslate">
         <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
      <!-- slides -->
      <swiper-slide v-for="(post, index) in posts" :key="index">
        <header>
           <div id="back">
                <router-link to='/'>
                    <img src="../assets/back.png" alt="back">
                </router-link>
           </div>
           <div id="logo">
                <img src="../assets/logo2.png" alt="logo">
            </div>
            <div id="menu_logo">
                <a href="#">
                    <img src="../assets/menu2.png" alt="menu">
                </a>
            </div>
        </header>
        <div class="card">
            <div class="image-card">
                <button class="category">{{ post.categories[0].title }}</button>
                <router-link :to="{name: 'post', params: {id: post.id}}" tag="a">
                <img :src="post.thumbnail_images.thumbnail.url" alt="">
                </router-link>
            </div>
            <div class="body-card">
                <h1><router-link :to="{name: 'post', params: {id: post.id}}" tag="a" style="color:#000">{{ post.title }}</router-link></h1>
                <p>{{ post.date  }}</p>
            </div>
        </div>
        <div id="social-link">
                <img src="../assets/facebook.png" alt="">    
                <img src="../assets/twitter.png" alt="">
        </div>
        <div id="content" v-html="post.content"></div>
        <div id="social-link">
                <img src="../assets/facebook.png" alt="">    
                <img src="../assets/twitter.png" alt="">
        </div>
      </swiper-slide>
    </swiper>
 </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import Api from '../config/Api';


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
    computed: {
      swiper() {
        return this.$refs.awesomeSwiperA.swiper
      }
    },
    methods: {
    	onSetTranslate() {
      	//console.log('onSetTranslate')
      }
    },
    created() {
      //console.log(this.$route.params.id)
        Api().get('get_recent_posts/')
            .then(response => {

            let { posts } = response.data;
            let post = response.data.posts.filter(p => p.id === parseInt(this.$route.params.id));

            //index of the current post
            let index = posts.indexOf(...post);
            
            this.posts = [...posts];
            // Slide to the current post   
            this.swiper.slideTo(index, 1000, false);

            }).catch(error => {
                console.log(error.response);
            })
    }
  }
</script>

<style>
#logo {
    border-bottom: 1px solid #dfdfdf;
  }

  #logo img{
    height: 50px;
    width: 20%;
    margin: 0 auto;
    display: block;
  }

  #menu_logo {
    position: absolute;
    top: 20px;
    right: 10px;
  }

  #back {
      position: absolute;
      top: 15px;
      left: 10px;
      height: 20px;
      width: 20px;
      cursor: pointer;
  }

  #back img {
      width: 100%;
      height: 100%;
  }
  div#social-link {
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

div#social-link img {
    width: 45%;
    height: 100%;
    cursor: pointer;
    
} 
#content {
    padding: 20px;
    text-align: end;
}
</style>
