<template>
  <section id="facts" class="py-5">
    <b-container data-aos="fade-up"
     data-aos-duration="2400">
      <h2 class="text-center">facts</h2>
      <p class="text-center mb-5">
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem.
        Sit sint consectetur velit. Quisquam quos quisquam cupiditate.
        Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
      </p>
      <b-row>
        <b-col md="3" sm="6" align="center">
          <div>
            <div class="icon mb-2">
              <b-icon-emoji-smile scale="1.4"></b-icon-emoji-smile>
            </div>
            <span>321</span>
            <p>Happy Clients</p>
          </div>
        </b-col>
        <b-col md="3" sm="6" align="center">
          <div>
            <div class="icon mb-2">
              <b-icon-journal-bookmark scale="1.4"></b-icon-journal-bookmark>
            </div>
            <span>521</span>
            <p>Projects</p>
          </div>
        </b-col>
        <b-col md="3" sm="6" align="center">
          <div>
            <div class="icon mb-2">
              <b-icon-emoji-smile scale="1.4"></b-icon-emoji-smile>
            </div>
            <span>1.456</span>
            <p>Hours Of Support</p>
          </div>
        </b-col>
        <b-col md="3" sm="6" align="center">
          <div>
            <div class="icon mb-2">
              <b-icon-emoji-smile scale="1.4"></b-icon-emoji-smile>
            </div>
            <span>25</span>
            <p>Awards</p>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped>
.icon {
  width: 54px;
  height: 54px;
  background: #0563BB;
  color: #fff;
  border-radius:50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
span {
  font-size:34px;
  font-weight: 600;
}
</style>