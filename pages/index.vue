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

export default {
  data() {
    return {
      profile: {
        name: 'Alfian Yunianto Suseno',
        photo: require('~/assets/profile.jpg'),
      },
      education: [
        {
          school: 'Universitas Singaperbangsa Karawang',
          degree: 'Sarjana 1',
          major: 'Teknik Informatika',
          gpa: '3,46',
        },
        {
          school: 'SMK Negeri 1 Cikarang Selatan',
          degree: 'SMK',
          major: 'Teknik Komputer Jaringan',
          gpa: '78,56',
        },
      ],
      experience: [
        {
          company: 'KPP Pratama Karawang',
          job: 'Internship IT Support',
          time: '1 Bulan',
        },
        {
          company: 'Freelance',
          job: 'Fullstack Web Developer',
          time: '3 Bulan',
        },
      ],
      skillPr: [
        {
          name: 'PHP',
          image: require('~/assets/icon/php.svg'),
        },
        {
          name: 'Javascript',
          image: require('~/assets/icon/javascript.svg'),
        },
        {
          name: 'Python',
          image: require('~/assets/icon/python.svg'),
        },
        {
          name: 'HTML',
          image: require('~/assets/icon/html.svg'),
        },
      ],
      skillMisc: [
        {
          name: 'Mikrotik',
          image: require('~/assets/icon/mikrotik.svg'),
        },
        {
          name: 'Perbaikan Komputer',
          image: require('~/assets/icon/repair.svg'),
        },
      ],
      portofolio: [
        {
          name: 'Simple Short Link',
          link: 'https://alfian.live',
          image: require('~/assets/portofolio/sslink.png'),
          desc: 'Aplikasi ini berfungsi sebagai pemendek link yang cukup panjang, cara kerjanya adalah menyimpan link pada database yang kemudian akan menghasilkan random string sebagai kunci dari link tersebut. Ketika kunci digunakan maka akan redirect menuju link yang telah disimpan.',
        },
      ],
      cert: [
        {
          name: 'MTCNA',
          id: '2110NA5887',
          image: require('~/assets/certificate/mtcna.png')
        },
      ],
      contact: [
        {
          name: 'phone',
          id: '+6282213515619',
          icon: require('~/assets/icon/phone-white.svg')
        },
        {
          name: 'github',
          link: 'https://github.com/ryuze',
          id: 'Ryuze',
          icon: require('~/assets/icon/github-white.svg')
        },
        {
          name: 'gmail',
          id: 'Alfianyunianto74@gmail.com',
          icon: require('~/assets/icon/gmail.svg')
        },
        {
          name: 'linkedin',
          link: 'https://www.linkedin.com/in/alfian-yunianto',
          id: 'Alfian Yunianto Suseno',
          icon: require('~/assets/icon/linkedin.svg')
        },
      ]
    }
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
