<template>
<div class="home-container">
  <div class="home">
    <img class="home-img" src="https://i.postimg.cc/ZRR9FvsB/IMG-2006.jpg" alt="">
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

.home-container {
  background-color: rgba(135, 206, 235, 1);
  width: 100%;
}

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

</style>
