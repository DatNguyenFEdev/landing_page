<template>
  <div id="main">
    <HamburgerMenu/>
    <Hero />
    <Header v-if="toggleMenu"/>
    <About />
    <Facts />
    <Skills />
    <Resume />
    <Portfolio />
    <Services />
    <Contact />
    <Footer/>
    <ScrollOnTop/>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Facts from "@/components/Facts";
import Skills from "@/components/Skills";
import Resume from "@/components/Resume";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollOnTop from "@/components/ScrollOnTop";
import HamburgerMenu from "@/components/HamburgerMenu";

export default {
  data() {
    return {
      toggleMenu: true
    };
  },
  methods: {
    change() {
      this.toggleMenu = true;
    }
  },
  components: {
    Header,
    Hero,
    About,
    Facts,
    Skills,
    Resume,
    Portfolio,
    Services,
    Contact,
    Footer,
    ScrollOnTop,
    HamburgerMenu
  }
};
</script>

<style scoped>
  
</style>