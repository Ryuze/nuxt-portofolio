<template>
  <div id="body" class="grid gap-2">
    <nav id="navigation">
      <NavBar />
    </nav>
    <section
      id="profile"
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
      data-aos-duration="500"
    >
      <Profile :profile="profile" />
    </section>
    <section
      id="education"
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
      data-aos-duration="500"
    >
      <Education :education="education" />
    </section>
    <section
      id="experience"
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
      data-aos-duration="500"
    >
      <Experience :experience="experience" />
    </section>
    <section
      id="skill"
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
      data-aos-duration="500"
    >
      <Skill :skill-pr="skillPr" :skill-misc="skillMisc" />
    </section>
    <section
      id="portofolio"
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
      data-aos-duration="500"
    >
      <Portofolio :content="portofolio" />
    </section>
    <section
      id="certificate"
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
      data-aos-duration="500"
    >
      <Certificate :certificate="certificate" />
    </section>
    <section
      id="contact"
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
      data-aos-duration="500"
    >
      <Contact :contact="contact" />
    </section>
    <footer id="footer">
      <NavFooter :contributors="contributor" />
    </footer>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      profile: {
        name: 'Alfian Yunianto Suseno',
        photo: require('~/assets/profile.jpg'),
      },
    }
  },
  computed: {
    ...mapState([
      'education',
      'experience',
      'skillPr',
      'skillMisc',
      'portofolio',
      'certificate',
      'contact',
      'contributor',
    ]),
  },
}
</script>

<style lang="postcss">
section:nth-child(odd) {
  @apply bg-gray-100;
}

.font-head {
  font-family: 'Arso', sans-serif;
  @apply font-bold text-3xl text-gray-700;
}

.font-body {
  font-family: 'Open Sans', sans-serif;
  @apply text-justify text-gray-700;
}
</style>
