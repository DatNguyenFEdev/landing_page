<template>
  <div id="footer" class="py-4">
    <b-container>
      <b-row class="mb-4">
        <h3 class="text-center">Nguyễn Duy Đạt</h3>
        <p
          class="text-center"
        >Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe commodi placeat.</p>
      </b-row>
      <b-row class="socials mb-4">
        <ul class="text-center">
          <li>
            <a href="#">
              <b-icon-github></b-icon-github>
            </a>
          </li>
          <li>
            <a href="#">
              <b-icon-facebook></b-icon-facebook>
            </a>
          </li>
          <li>
            <a href="#">
              <b-icon-instagram></b-icon-instagram>
            </a>
          </li>
          <li>
            <a href="#">
              <b-icon-twitter></b-icon-twitter>
            </a>
          </li>
        </ul>
      </b-row>
      <b-row>
          <p class="text-center">© Copyright MyResume. All Rights Reserved</p>
          <p class="text-center">
            Designed by
            <span>BootstrapMade</span>
          </p>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#footer {
    background: #F7F8F9;
}
h3 {
    font-weight: bold;
    font-size: 40px;
}
.socials ul {
  display: flex;
  justify-content: center;
}
.socials ul li {
    background: #0563BB;
    margin: 0 8px;
    border-radius: 50px;
    transition: all 0.2s ease-in-out
}
.socials ul li:hover {
    background: #1270c9;
}
.socials ul li a {
    justify-content: center;
    align-items: center;
    display: flex;
    width: 38px;
    height: 38px;
    color: #fff;
}
</style>