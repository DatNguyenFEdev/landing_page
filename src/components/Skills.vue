<template>
  <section id="skills" class="py-5">
      <b-container data-aos="fade-up"
     data-aos-duration="2400">
          <h2 class="text-center">skills</h2>
          <p class="text-center mb-5">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. 
              Sit sint consectetur velit. Quisquam quos quisquam cupiditate. 
              Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
              <b-row>
                  <b-col md="6" class="px-4" xs="12">
                      <div class="mb-3">
                          <b-row class="mb-2">
                              <b-col class="text-start">HTML</b-col>
                              <b-col class="text-end">90%</b-col>
                          </b-row>
                          <b-row>
                               <b-progress :value="progress.html" class="" height="10px"></b-progress>
                          </b-row>
                      </div>
                      <div class="mb-3">
                          <b-row class="mb-2">
                              <b-col class="text-start">CSS</b-col>
                              <b-col class="text-end">80%</b-col>
                          </b-row>
                          <b-row>
                               <b-progress :value="progress.css" class="" height="10px"></b-progress>
                          </b-row>
                      </div>
                      <div class="mb-3">
                          <b-row class="mb-2">
                              <b-col class="text-start">JS</b-col>
                              <b-col class="text-end">70%</b-col>
                          </b-row>
                          <b-row>
                               <b-progress :value="progress.js" class="" height="10px"></b-progress>
                          </b-row>
                      </div>
                  </b-col>
                  <b-col md="6" class="px-4" xs="12">
                      <div class="mb-3">
                          <b-row class="mb-2">
                              <b-col class="text-start">WORDPRESS/CMS</b-col>
                              <b-col class="text-end">60%</b-col>
                          </b-row>
                          <b-row>
                               <b-progress :value="progress.wordpress" class="" height="10px"></b-progress>
                          </b-row>
                      </div>
                      <div class="mb-3">
                          <b-row class="mb-2">
                              <b-col class="text-start">PHOTOSHOP</b-col>
                              <b-col class="text-end">90%</b-col>
                          </b-row>
                          <b-row>
                               <b-progress :value="progress.photoshop" class="" height="10px"></b-progress>
                          </b-row>
                      </div>
                      <div class="mb-3">
                          <b-row class="mb-2">
                              <b-col class="text-start">FIGMA</b-col>
                              <b-col class="text-end">90%</b-col>
                          </b-row>
                          <b-row>
                               <b-progress :value="progress.figma" class="" height="10px"></b-progress>
                          </b-row>
                      </div>
                  </b-col>
              </b-row>
      </b-container>
  </section>
</template>

<script>
export default {
    data() {
        return {
            progress: {
                html: 90,
                css: 80,
                js:70,
                wordpress:60,
                photoshop: 90,
                figma:90
            }
        }
    }
}
</script>

<style scoped>
.progress {
    background: rgb(236, 231, 231);
    padding:0;
    border-radius: 0;
}
.progress-bar {
    background: #0563BB !important;
}
.col {
    padding: 0;
    font-weight: 600;
}
</style>