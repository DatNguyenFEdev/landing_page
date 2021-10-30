<template>
  <section id="services" class="py-5">
    <b-container>
      <h2 class="text-center" data-aos="fade-up" data-aos-duration="2000">services</h2>
      <p class="text-center mb-3" data-aos="fade-up" data-aos-duration="2000">
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem.
        Sit sint consectetur velit. Quisquam quos quisquam cupiditate.
        Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
      </p>
      <b-row>
        <b-col md="4" sm="6" xs="12">
          <div class="card p-5 text-center mb-3 mr-3" data-aos="zoom-in" data-aos-duration="2600">
            <div class="mark-card mb-3">
              <b-icon-music-note-beamed scale="1.4"></b-icon-music-note-beamed>
            </div>
            <a href="#" class="mb-2">Lorem Ipsum</a>
            <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
          </div>
        </b-col>
        <b-col md="4" sm="6" xs="12">
          <div class="card p-5 text-center" data-aos="zoom-in" data-aos-duration="2000">
            <div class="mark-card mb-3">
              <b-icon-music-note-beamed scale="1.4"></b-icon-music-note-beamed>
            </div>
            <a href="#" class="mb-2">Perspiciatis</a>
            <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
          </div>
        </b-col>
        <!-- ============================col2============================ -->
        <b-col md="4" sm="6" xs="12">
          <div class="card p-5 text-center mb-3 mr-3" data-aos="zoom-in" data-aos-duration="2400">
            <div class="mark-card mb-3">
              <b-icon-music-note-beamed scale="1.4"></b-icon-music-note-beamed>
            </div>
            <a href="#" class="mb-2">Dolores</a>
            <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
          </div>
        </b-col>
        <b-col md="4" sm="6" xs="12">
          <div class="card p-5 text-center" data-aos="zoom-in" data-aos-duration="1800">
            <div class="mark-card mb-3">
              <b-icon-music-note-beamed scale="1.4"></b-icon-music-note-beamed>
            </div>
            <a href="#" class="mb-2">Nemo Enim</a>
            <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
          </div>
        </b-col>
        <!-- ============================col3============================ -->
        <b-col md="4" sm="6" xs="12">
          <div class="card p-5 text-center mb-3 mr-3" data-aos="zoom-in" data-aos-duration="2200">
            <div class="mark-card mb-3">
              <b-icon-music-note-beamed scale="1.4"></b-icon-music-note-beamed>
            </div>
            <a href="#" class="mb-2">Dele Cardo</a>
            <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
          </div>
        </b-col>
        <b-col md="4" sm="6" xs="12">
          <div class="card p-5 text-center" data-aos="zoom-in" data-aos-duration="1600">
            <div class="mark-card mb-3">
              <b-icon-music-note-beamed scale="1.4"></b-icon-music-note-beamed>
            </div>
            <a href="#" class="mb-2">Divera Don</a>
            <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
#services {
  background: #fdfdfd;
}
.mark-card {
  width: 60px;
  height: 60px;
  background: #f5f5f5;
  color: #000000;
  border-radius: 50px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.card {
  box-shadow: 0px 5px 90px 0px rgb(110 123 131 / 5%);
  border: 1px solid transparent;
  transition: all 0.3s ease-in-out;
}
.card a {
  text-decoration: none;
  font-size: 24px;
  max-width: 100%;
  display: block;
  overflow: hidden;
}
.card:hover {
  box-shadow: 0px 0 35px 0 rgb(0 0 0 / 8%);
  border: 1px solid #fff;
}
</style>