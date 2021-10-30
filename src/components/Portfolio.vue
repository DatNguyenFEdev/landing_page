<template>
  <section id="portfolio" class="py-5">
    <b-container data-aos="fade-up"
     data-aos-duration="2400">
      <h2 class="text-center">Portfolio</h2>
      <p class="text-center mb-5">
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem.
        Sit sint consectetur velit. Quisquam quos quisquam cupiditate.
        Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
      </p>
      <b-row>
        <ul class="d-flex justify-content-center">
          <li class="mx-2">
            <a href="#" class="px-3" style>All</a>
          </li>
          <li class="mx-2">
            <a href="#" class="px-3" style>App</a>
          </li>
          <li class="mx-2">
            <a href="#" class="px-3" style>Card</a>
          </li>
          <li class="mx-2">
            <a href="#" class="px-3" style>Web</a>
          </li>
        </ul>
      </b-row>
      <b-row>
        <b-col md="4" sm="6" sx="12">
          <b-row class="p-2">
            <img class="img-portfolio"
              src="https://bootstrapmade.com/demo/templates/MyResume/assets/img/portfolio/portfolio-1.jpg"
              alt
            />
          </b-row>
          <b-row class="p-2">
            <img class="img-portfolio"
              src="https://bootstrapmade.com/demo/templates/MyResume/assets/img/portfolio/portfolio-6.jpg"
              alt
            />
          </b-row>
        </b-col>
        <b-col md="4" sm="6" sx="12">
          <b-row class="p-2">
            <img class="img-portfolio"
              src="https://bootstrapmade.com/demo/templates/MyResume/assets/img/portfolio/portfolio-2.jpg"
              alt
            />
          </b-row>
          <b-row class="p-2">
            <img class="img-portfolio"
              src="https://bootstrapmade.com/demo/templates/MyResume/assets/img/portfolio/portfolio-5.jpg"
              alt
            />
          </b-row>
          <b-row class="p-2">
            <img class="img-portfolio"
              src="https://bootstrapmade.com/demo/templates/MyResume/assets/img/portfolio/portfolio-9.jpg"
              alt
            />
          </b-row>
        </b-col>
        <b-col md="4" sm="6" sx="12">
          <b-row class="p-2">
            <img class="img-portfolio"
              src="https://bootstrapmade.com/demo/templates/MyResume/assets/img/portfolio/portfolio-3.jpg"
              alt
            />
          </b-row>
          <b-row class="p-2">
            <img class="img-portfolio"
              src="https://bootstrapmade.com/demo/templates/MyResume/assets/img/portfolio/portfolio-4.jpg"
              alt
            />
          </b-row>
          <b-row class="p-2">
            <img class="img-portfolio"
              src="https://bootstrapmade.com/demo/templates/MyResume/assets/img/portfolio/portfolio-7.jpg"
              alt
            />
          </b-row>
          <b-row class="p-2">
            <img class="img-portfolio"
              src="https://bootstrapmade.com/demo/templates/MyResume/assets/img/portfolio/portfolio-8.jpg"
              alt
            />
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
#portfolio img {
  padding: 0;
}
a {
  text-decoration: none;
  font-weight: 600;
  text-transform: uppercase;
  color: #272829;
}
a:active {
  color: #0563BB;
}
.img-portfolio {
  position: relative;
}
.img-portfolio::before {
  position: absolute;
  width: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  content: "";
  background: red;
}
</style>