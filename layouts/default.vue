<template>
  <div>
    <div class="backgroundColor"></div>
    <div class="backgroundImage">
      <!-- <menu-bar/> -->
      <nuxt/>
      <!-- <my-footer/> -->
      <!-- <my-form/> -->
      
    </div>
  </div>
</template>

<script>
// import MyFooter from '~/components/Footer.vue'
// import MyForm from '~/components/Form1.vue'
// import MenuBar from '~/components/Menu.vue'

export default {
  components: {
    // MyFooter,
    // MyForm
    // MenuBar
  }
}
</script>

<style>
.backgroundImage {
  background-repeat: repeat-x,repeat-y, no-repeat;
  background-image: url('../assets/img/william-iven-dAmHWsRYP9c-unsplash.jpg') ;
  background-size: cover;
  width: 100%;
  height: 100%;
}
.backgroundColor {
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #274292 33%  , #624094 660% , #624094 100% ); 
  opacity: 0.7;    
}  
body{
  position: relative;
}
/*
.container
{
  margin: 0;
  width: 100%;
  padding: 100px 0;
  text-align: center;
}

.button, .button:visited
{
  display: inline-block;
  color: black;
  letter-spacing: 1px;
  background-color: #fff;
  border: 2px solid #000;
  text-decoration: none;
  text-transform: uppercase;
  padding: 15px 45px;
}

.button:hover, .button:focus
{
  color: #fff;
  background-color: #000;
}

.title
{
  color: #000;
  font-weight: 300;
  font-size: 2.5em;
  margin: 0;
} */
</style>
