<template>
  <section id="resume" class="py-5">
    <b-container data-aos="fade-up"
     data-aos-duration="2400">
      <h2 class="text-center">resume</h2>
      <p class="mb-5 text-center">
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem.
        Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
        Quia fugiat sit in iste officiis commodi quidem hic quas.
      </p>
      <b-row>
        <b-col md="6" xs="12">
          <b-row class="sumary text-start mb-4">
            <h3 class="mb-3">Sumary</h3>
            <div class="resume-item">
              <h4>BRANDON JOHNSON</h4>
              <p>nnovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.</p>
              <ul>
                <li>Portland par 127,Orlando, FL</li>
                <li>(123) 456-7891</li>
                <li>alice.barkley@example.com</li>
              </ul>
            </div>
          </b-row>
          <b-row class="sumary text-start">
            <h3 class="mb-3">Education</h3>
            <div class="resume-item">
              <h4>MASTER OF FINE ARTS & GRAPHIC DESIGN</h4>
              <p>Rochester Institute of Technology, Rochester, NY</p>
              <p>Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend</p>
            </div>
            <div class="resume-item">
              <h4>BACHELOR OF FINE ARTS & GRAPHIC DESIGN</h4>
              <p>Rochester Institute of Technology, Rochester, NY.</p>
              <p>Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila.</p>
            </div>
          </b-row>
        </b-col>
        <!-- ===========================col-right================== -->
        <b-col md="6" xs="12">
          <b-row class="sumary text-start">
            <h3 class="mb-3">Education</h3>
            <div class="resume-item">
              <h4>SENIOR GRAPHIC DESIGN SPECIALIST</h4>
              <p>nnovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.</p>
              <ul>
                <li>Lead in the design, development, and implementation of the graphic, layout, and production communication materials</li>
                <li>Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project.</li>
                <li>Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design</li>
                <li>Oversee the efficient use of production project budgets ranging from $2,000 - $25,000</li>
              </ul>
            </div>
            <div class="resume-item">
              <h4>GRAPHIC DESIGN SPECIALIST</h4>
              <p>Stepping Stone Advertising, New York, NY.</p>
              <ul>
                <li>Developed numerous marketing programs (logos, brochures,infographics, presentations, and advertisements).</li>
                <li>Managed up to 5 projects or tasks at a given time while under pressure</li>
                <li>Recommended and consulted with clients on the most appropriate graphic design</li>
                <li>Created 4+ design presentations and proposals a month for clients and account managers</li>
              </ul>
            </div>
          </b-row>
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
li {
  list-style:initial !important;
  margin-bottom: 14px;
}
.resume-item {
  border-left: 2px solid #0563BB;
  position: relative;
  padding-left: 20px;
  /* margin-left: 10px; */
}
.resume-item::after {
  content: "";
  width: 16px;
  height: 16px;
  border-radius: 50px;
  background: #fff;
  border: 2px solid #0563BB;
  position: absolute;
  top: -8px;
  left: -9px;
}
h4 {
  color: #0563BB;
  font-size: 18px;
  font-weight: 600;
}
</style>