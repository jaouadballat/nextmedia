<template>
  <div class="home">
   <header>
     <div id="logo">
       <img src="../assets/logo.png" alt="logo">
     </div>
     <div id="menu_logo">
      <a href="#">
         <img src="../assets/menu.png" alt="menu">
      </a>
     </div>
     <nav>
       <ul>
         <li v-for="(menu, index) in menus" :key="index"><a href="#">{{ menu.label }}</a></li>
       </ul>
     </nav>
   </header>
   <section>
     <div class="card" v-for="(post, index) in posts" :key="index">
       <div class="image-card">
        <button class="category">{{ post.categories[0].title }}</button>
        <router-link :to="{name: 'post', params: {id: post.id}}" tag="a">
         <img :src="post.thumbnail_images.thumbnail.url" alt="">
        </router-link>
       </div>
       <div class="body-card">
         <h1><router-link :to="{name: 'post', params: {id: post.id}}" tag="a" style="color:#000">{{ post.title }}</router-link></h1>
         <p>{{ post.date | moment }}</p>
       </div>
     </div>
     <button id="load-more" v-if="page <= 3" @click="loadMore">+</button>
   </section>
  </div>
</template>

<script>
import moment from 'moment';
import Api from '../config/Api';

export default {

data () {
    return {
      menus : [],
      posts: [],
      page:1
    }
  },
  
created() {
  this.fetchMenu();
  this.loadPosts(this.page);

  
}, 
methods: {
  loadMore() {
    this.page++;
    this.page <= 3 ? this.loadPosts(this.page) : null;
  },
  fetchMenu() {
    Api().get('menus/get_menu/?menu_id=7')
    .then(response => {
      this.menus = response.data.menu.output
    }).catch(error => {
      console.log(error.response.data)
    });
  },

  loadPosts(page) {
    Api().get(`get_recent_posts/?page=${page}`)
    .then(response => {
      this.posts = [...this.posts, ...response.data.posts] // load more posts
    }).catch(error => {
      console.log(error.response.data)
    });
  }
},
filters: {
  moment (date) {
    moment.locale();
    return moment(date).locale('ar-ma').format('LL'); 
  }
} 


}
</script>

<style scoped>
  header {
    position: relative;
    color: #ba78b3;
    padding: 10px 0;
    background-image: linear-gradient(to right, #6d2f8f, #7b308f, #89328f, #96348f, #a2378e);
  }

  #logo {
    border-bottom: 1px solid;
  }

  #logo img{
    height: 50px;
    width: 20%;
    margin: 0 auto;
    display: block;
  }

  #menu_logo {
    position: absolute;
    top: 30%;
    right: 10px;
    transform: translateY(-10px);

  }

  nav ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    list-style: none;
    padding: 10px 0;
  }

  a {
    text-decoration: none;
    color: #ad72b1;
  }



  #load-more {
    padding: 50px;
    border-radius: 50%;
    border: 1px solid #777777;
    background-color: white;
    color: #777777;
    font-size: 20px;
    margin: 0 auto;
    display: block;
    margin-bottom: 50px;
    cursor: pointer;
  }

</style>
