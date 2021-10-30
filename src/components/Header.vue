<template>
  <div id="header">
    <ul class="menu-list">
      <li>
        <router-link :to="link">
          <!-- <a href="#"> -->
            <b-icon-house-door scale="1.2"></b-icon-house-door>
            <span>Home</span>
          <!-- </a> -->
        </router-link>
      </li>
      <li>
        <a href="#">
          <b-icon-person-square scale="1.2"></b-icon-person-square>
          <span>About</span>
        </a>
      </li>
      <li>
        <a href="#">
          <b-icon-file-earmark scale="1.2"></b-icon-file-earmark>
          <span>Resume</span>
        </a>
      </li>
      <li>
        <a href="#">
          <b-icon-hdd-stack scale="1.2"></b-icon-hdd-stack>
          <span>Services</span>
        </a>
      </li>
      <li>
        <a href="#">
          <b-icon-telephone scale="1.2"></b-icon-telephone>
          <span>Contact</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      link: {
        name:"About",
        params: {
          id: this.$route.params.id
        },
        query: {
          locate:'vi',
          browser: 'chrome'
        },
        hash: '#about'
      },
      toggle:false
    };
  },
  components: {},
  methods: {
    
  }, 
};
</script>

<style scoped>
#header {
  width: auto;
  position: fixed;
  top: 190px;
  left: 0px;
  bottom: 0px;
  z-index: 99;
  transition: all 0.5s ease 0s;
  padding: 15px;
  overflow-y: auto;
  background: transparent;
}
.menu-list {
  padding: 0;
}
.menu-list li {
  margin: 20px 0;
  width: auto;
}
.menu-list li a {
  display: flex;
  align-items: center;
  color: #45505b;
  padding: 0 20px;
  transition: 0.3s;
  font-size: 15px;
  border-radius: 50px;
  background: #F2F3F5;
  height: 56px;
  width: 56px;
  overflow: hidden;
  transition: 0.3s;
  text-decoration: none;
}
.menu-list li a span {
  margin-left: 20px;
}
.menu-list li a:hover {
  background: #0563bb;
}
.menu-list li:hover > a {
  width: 132px;
  color: #fff;
}
.menu-list li a:active {
  background: #0563bb;
}
@media screen and (max-width: 768px) {
    #header {
      display: none;
    }
}
</style>