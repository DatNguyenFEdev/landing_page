<template>
  <section id="hero">
    <b-container>
      <b-row>
        <b-col class="content" md="5" xs="12">
          <b-row class="mb-3">
            <h1 class="d-flex justify-content-start"><strong>Nguyễn Duy Đạt</strong></h1>
          </b-row>
          <b-row class="mb-3" >
            <p class="d-flex justify-content-start intro">I'm <span>Developer</span></p>
          </b-row>
          <b-row class=" vertical-align-middle">
            <ul class="d-flex list-social">
              <li>
                <a href="https://twitter.com/DATNGUY58445420" target="blank">
                  <b-icon-twitter scale="1.4"></b-icon-twitter>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/DAT2001DAT2001/" target="blank">
                  <b-icon-facebook scale="1.4"></b-icon-facebook>
                </a>
              </li>
              <li>
                <a href="https://mail.google.com/mail/u/0/#inbox" target="blank">
                  <b-icon-google scale="1.4"></b-icon-google>
                </a>
              </li>
              <li>
                <a href="https://github.com/DatNguyenFEdev" target="blank">
                  <b-icon-github scale="1.4"></b-icon-github>
                </a>
              </li>
            </ul>
          </b-row>
        </b-col>
        <b-col></b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
};
</script>

<style scoped>
#hero {
  background-image: url(https://bootstrapmade.com/demo/templates/MyResume/assets/img/hero-bg.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: right;
  width: 100%;
  display: block;
  height: 100vh;
  position: relative;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
#hero::before {
  content: "";
  background: rgba(255, 255, 255, 0.8);
  position: absolute;
  inset: 0px;
}
.content {
  top: 50%;
  /* transform: translateY(-50%); */
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.intro {
  font-size:30px;
}
.intro span {
  color: #00A6EB;
}
.list-social li {
  margin-right: 30px;
  color: #45505B;
}
.list-social li a {
  color: #45505B;
  transition:all 0.2s ease-in-out;
}
.list-social li a:hover {
  color: #00A6EB;
}
@media screen and (min-width: 768px) {
    #hero h1 {
      font-size:4rem !important;
    }
    .intro {
      font-size:2rem;
    }
}
@media screen and (max-width: 768px) {
    #hero h1 {
      font-size:3rem !important;
    }
    .intro {
      font-size:1.4rem;
    }
}
</style>