<template>

    <nav class="navbar">
        <img src="https://i.postimg.cc/8zpsss39/fg.jpg" class="img-nav" alt="">
        <div class="nav-container">
    <router-link class="nav-link" to="/">Home</router-link> 
    <router-link class="nav-link" to="/about">About</router-link>
    <router-link class="nav-link" to="/products">Product</router-link> 
    <router-link class="nav-link" to="/contact">Contact</router-link> 
    </div>
    </nav>
</template>

<script>
export default {

};
</script>

<style>

/* .nav-container {
    
    
} */

.navbar {
    text-align: center;
    justify-content: center;
    background-color: rgba(135, 206, 235, 1);
    font-size: 25px;
    font-family: Garamond, serif;

}

.img-nav{
    text-align: left;
    border: 2px solid black;
    width: 55px;
    height: 55px;
    border-radius: 50px;
}

.nav-link {
  float: left;
  color: black;
  text-align: center;
  padding: 20px 0px; 
  margin: 0px 20px;
  text-decoration: none;
  width: 140px;
  transition: 0,1s;
  display: inline-block;
  text-transform: uppercase;
  position: relative;
  opacity: 0.75;

}


.nav-link::before {
  position: absolute;
  left: 0;
  bottom: 0;
  height: 2px;
  width: 0;
  transition: .5s ease; 
} 

 .nav-link:hover{
opacity: 0,1s;
transition: 1s;
color: White; 
font-size: 30px;
 }
.nav-link::before{
    width: 100%;
    transition: 0,1s;
    height: 5px;
    content: "";
    position: absolute;
    background-color: white;
} 
.nav-link::before {
  width: 0%;
  bottom: 10px;
}

.nav-link:hover::before {
  width: 100%;
} 



</style>