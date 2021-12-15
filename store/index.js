export const state = () => ({
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
      link: '',
      image: require('~/assets/portofolio/sslink.png'),
      desc: 'Aplikasi ini berfungsi sebagai pemendek link yang cukup panjang, cara kerjanya adalah menyimpan link pada database yang kemudian akan menghasilkan random string sebagai kunci dari link tersebut. Ketika kunci digunakan maka akan redirect menuju link yang telah disimpan.',
    },
    {
      name: 'Document Controller',
      link: '',
      image: require('~/assets/portofolio/docController.png'),
      desc: 'Aplikasi ini saya buat saat melakukan freelance, memiliki fungsi untuk melakukan pendataan dokumen yang dimiliki tiap partner perusahaan dan mensortingnya berdasarkan tipe dokumen tersebut. Aplikasi ini juga dapat melakukan eksport data dokumen yang terlihat disini sebagai file dengan format excel.'
    }
  ],
  certificate: [
    {
      name: 'MTCNA',
      id: '2110NA5887',
      image: require('~/assets/certificate/mtcna.png'),
    },
  ],
  contact: [
    {
      name: 'phone',
      id: '+6282213515619',
      icon: require('~/assets/icon/phone-black.svg'),
    },
    {
      name: 'github',
      link: 'https://github.com/ryuze',
      id: 'Alfian Yunianto Suseno',
      icon: require('~/assets/icon/github-black.svg'),
    },
    {
      name: 'gmail',
      id: 'Alfianyunianto74@gmail.com',
      icon: require('~/assets/icon/gmail.svg'),
    },
    {
      name: 'linkedin',
      link: 'https://www.linkedin.com/in/alfian-yunianto',
      id: 'Alfian Yunianto Suseno',
      icon: require('~/assets/icon/linkedin.svg'),
    },
  ],
  contributor: [
    {
      link: 'https://iconscout.com/icons/github',
      name: 'Github Icon',
      contributor: 'https://iconscout.com/contributors/unicons',
      contributor_name: 'Unicons Font'
    },
    {
      link: 'https://iconscout.com/icon/php-99',
      name: 'Php Icon',
      contributor: 'https://iconscout.com/contributors/icon-mafia',
      contributor_name: 'Icon Mafia'
    },
    {
      link: 'https://iconscout.com/icon/python-2',
      name: 'Python Icon',
      contributor: 'https://iconscout.com/contributors/icon-mafia',
      contributor_name: 'Icon Mafia'
    },
    {
      link: 'https://iconscout.com/icon/javascript-2038874',
      name: 'Javascript Icon',
      contributor: 'https://iconscout.com/contributors/maninderkaur',
      contributor_name: 'Maninder Kaur'
    },
    {
      link: 'https://iconscout.com/icon/html-2752158',
      name: 'Html Logo',
      contributor: 'https://iconscout.com/contributors/jagathish',
      contributor_name: 'Jagathish Saravanan'
    },
    {
      link: 'https://iconscout.com/icon/repair-tools-50',
      name: 'Repair tools Icon',
      contributor: 'https://iconscout.com/contributors/oviyan',
      contributor_name: 'Amoghdesign'
    },
    {
      link: 'https://iconscout.com/icon/nuxt-dot-js-3521615',
      name: 'Nuxt Dot Js Icon',
      contributor: 'https://iconscout.com/contributors/icon-54',
      contributor_name: 'Icon 54'
    },
    {
      link: 'https://iconscout.com/icons/linkedin',
      name: 'Linkedin Logo Icon',
      contributor: 'https://iconscout.com/contributors/stonehub',
      contributor_name: 'Stone Hub'
    },
    {
      link: 'https://iconscout.com/illustration/developer-team-2043022',
      name: 'Developer Team Illustration',
      contributor: 'https://iconscout.com/contributors/delesign',
      contributor_name: 'Delesign Graphics'
    },
    {
      link: 'https://iconscout.com/icons/gmail',
      name: 'Gmail Logo Icon',
      contributor: 'https://iconscout.com/contributors/oviyan',
      contributor_name: 'Amoghdesign'
    },
  ]
})

export const getters = {}

export const mutations = {}

export const actions = {}
