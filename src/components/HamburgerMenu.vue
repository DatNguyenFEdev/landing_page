<template>
  <div id="hamburgerMenu">
      <a href=""><b-icon-justify scale="2.0"></b-icon-justify></a>
  </div>
</template>

<script>
export default {
  data() {
    return {
        toggleMenu: false
    }
  },
  mounted() {
    this.$emit('openMenu',this.toggleMenu)
  }
}
</script>

<style scoped>
    #hamburgerMenu {
        position:fixed;
        right: 30px;
        top: 30px;
        z-index: 99;
        display:none;
        color: #2C3E50;
    }
    @media screen and (max-width: 768px) {
    #hamburgerMenu {
      display: block;
    }
}
</style>