<template>
  <div class="hello">
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
         <li>jaouad</li>
         <li>jaouad</li>
         <li>jaouad</li>
         <li>jaouad</li>
         <li>jaouad</li>
         <li>jaouad</li>
       </ul>
     </nav>
   </header>
  </div>
</template>

<script>
import axios from 'axios';

export default {



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
    top: 20%;
    right: 10px;
    transform: translateY(-10px);

  }

  nav ul {
    display: flex;
    justify-content: space-around;
    list-style: none;
    padding: 10px 0;

  }
</style>
