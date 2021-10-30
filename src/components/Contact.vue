<template>
  <div id="contact" class="py-5">
      <b-container data-aos="fade-up"
     data-aos-duration="2600">
          <h2 class="text-center mb-5">contact</h2>
          <b-row>
              <b-col md="4" sm="12">
                  <b-row>
                      <b-col cols="2">
                          <div class="icon">
                              <b-icon-geo-alt scale="1.2"></b-icon-geo-alt>
                          </div>
                      </b-col>
                      <b-col>
                          <div class="location">
                              <h3>Location</h3>
                              <p>A108 Adam Street, New York, NY 535022</p>
                          </div>
                      </b-col>
                  </b-row>
                  <b-row>
                      <b-col cols="2">
                          <div class="icon">
                              <b-icon-envelope scale="1.2"></b-icon-envelope>
                          </div>
                      </b-col>
                      <b-col>
                          <div class="email">
                              <h3>Email</h3>
                              <p>duydat10122001@gmail.com</p>
                          </div>
                      </b-col>
                  </b-row>
                  <b-row>
                      <b-col cols="2">
                          <div class="icon">
                              <b-icon-phone scale="1.2"></b-icon-phone>
                          </div>
                      </b-col>
                      <b-col>
                          <div class="call">
                              <h3>Call</h3>
                              <p>+84 0386401192</p>
                          </div>
                      </b-col>
                  </b-row>
              </b-col>
              <b-col md="8" sm="12">
                  <form action="#" method="post" @click.prevent>
                      <b-row>
                          <b-col md="6" class="mb-4" sm="12"><input type="text" placeholder="Your Name"></b-col>
                          <b-col md="6" class="mb-4" sm="12"><input type="text" placeholder="Your Email"></b-col>
                      </b-row>
                      <b-row class="mb-4">
                          <b-col><input type="text" placeholder="Subject"></b-col>
                      </b-row>
                      <b-row class="mb-4">
                          <b-col><textarea name="" id="" cols="30" rows="6" placeholder="Messeger" ></textarea></b-col>
                      </b-row>
                      <b-row class="justify-content-center">
                          <b-col md="3" sm="3" class="text-center">
                              <input type="submit" value="Send Messager">
                          </b-col>
                      </b-row>
                  </form>
              </b-col>
          </b-row>
      </b-container>
  </div>
</template>

<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<style scoped>
h3 {
    font-size:24px;
}
p {
    color: #999;
}
.icon {
    background: #EEF7FF;
    color:#00628b;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius:50px;
    transition: all 0.2s ease-in-out;
}
.icon:hover {
    background: #0563BB;
    color: #fff;
}

input, textarea {
    width:100%;
    height: 100%;
    padding: 12px 16px;
    outline: none;
    border: 1px solid #ccc;
    border-radius: 4px;
}
input[type="submit"] {
    background: #0563BB;
    border-radius: 28px;
    color: #fff;
    transition:all 0.2s ease-in-out;
}
input[type="submit"]:hover {
    background: #1270c9;
}
textarea:focus {
    border-color: #00A6EB;
}
input:focus {
    border-color: #00A6EB;

}
</style>