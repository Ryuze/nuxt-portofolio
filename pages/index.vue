<template>
  <div>
    <div id="background" class="fixed w-screen h-screen">
      <div class="bg-black bg-opacity-50 w-full h-full absolute"></div>
    </div>
    <div class="relative">
      <NavBar />
    </div>
    <div>
      <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
        <Profile :profile="profile" />
      </div>
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        class="pb-40"
      >
        <Education :education="education" />
      </div>
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        class="pb-40"
      >
        <Experience :experience="experience" />
      </div>
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        class="pb-40"
      >
        <Skill :skill-pr="skillPr" :skill-misc="skillMisc" />
      </div>
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        class="pb-40"
      >
        <Portofolio :content="portofolio" />
      </div>
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        class="pb-40"
      >
        <Certificate :cert="cert" />
      </div>
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        class="pb-40"
      >
        <Contact :contact="contact" />
      </div>
    </div>
  </div>
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'
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
      'cert',
      'contact'
    ])
  },
  mounted() {
    window.VANTA.WAVES({
      el: '#background',
      mouseControls: false,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0x165c82,
      shininess: 36.0,
      waveHeight: 25.0,
      waveSpeed: 0.5,
      zoom: 1.42,
    })

    AOS.init()
  },
}
</script>
