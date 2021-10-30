<template>
  <div id="scrollOnTop">
      <router-link @click.native="$scrollToTop"><a href="">On top</a></router-link>
  </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: { 
           scrollToTop() {
                window.scrollTo(0,0);
           }
        }
}

</script>

<style scoped>
#scrollToTop a {
    background: red;
    position: fixed;
    right: 0;
    bottom: 0;
    width: 40px;
    height: 40px;
}

</style>