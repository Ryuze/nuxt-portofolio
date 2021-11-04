<template>
  <article class="text-center">
    <p class="font-head mb-6">ABOUT ME</p>
    <div class="mx-10 lg:w-2/3 lg:mx-auto">
      <p class="font-body">
        Nama saya {{ name }}, saya berasal dari Universitas Singaperbangsa
        Karawang dan telah lulus pada bulan Agustus 2021 dengan IPK 3,46. Lahir
        di Pati, Jawa Tengah dan tinggal di Kab. Bekasi, Jawa barat. Umur 22
        tahun, memiliki pengalaman kerja sebagai Internship IT Support di KPP
        Pratama Karawang selama 1 bulan dan Freelance Fullstack Developer selama
        3 bulan.
      </p>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="postcss" scoped>
.font-head {
  font-family: 'Arso', sans-serif;
  @apply font-bold text-3xl text-gray-700;
}

.font-body {
  font-family: 'Open Sans', sans-serif;
  @apply text-justify text-gray-700;
}
</style>
