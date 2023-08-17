<template>
<div class="home-container">
  <div class="home">
    
    <img class="home-img" src="https://i.postimg.cc/ZRR9FvsB/IMG-2006.jpg" alt="">
  </div>
  <div class="brand">
    <img class="brand-img" src="https://i.postimg.cc/65RzPXh9/swoosh-logo-black-removebg-preview-1.png" alt="">
    <img class="brand-img" src="https://i.postimg.cc/90zXfbJp/Adidas-Logo-1971-removebg-preview-1.png" alt="">
    <img class="brand-img" src="https://i.postimg.cc/65qP3gwR/png-transparent-puma-logo-iron-on-adidas-brand-adidas-mammal-cat-like-mammal-carnivoran-removebg-pre.png" alt="">
    <img class="brand-img" src="https://i.postimg.cc/WbmddWnN/site-logo-select2-black.webp" alt="">
  </div>
</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>

<style>

/* .home-container { */
  /* background-color: rgba(135, 206, 235, 1); */
  /* width: 100%; */
/* } */

/* .home {
  
} */

.home-img {
  width: 1200px;
  height: 300px;
  object-fit: cover;
  border-radius: 50px;
  align-items: center;
  margin-left: 150px;
}

.brand-img {
  width: 120px;
}
.brand {
  align-items: center;
}

</style>
