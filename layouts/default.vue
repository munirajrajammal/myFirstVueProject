<template>
  <div>
    <div class="backgroundColor"></div>
    <div class="backgroundImage">
      <nuxt/>      
    </div>
  </div>
</template>

<script>

export default {
  components: {
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
  background-image: linear-gradient(to right bottom, #e1010b, #dc4d00, #d47000, #c98d00, #bea603);
  opacity: 0.8;    
}  
body{
  position: relative;
}
</style>
