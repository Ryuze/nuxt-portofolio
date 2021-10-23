<template>
  <div class="flex justify-between w-full bg-white py-2 shadow-md">
    <nuxt-link to="/">
      <div class="mx-4 my-2 flex">
        <img :src="require('~/assets/icon/nuxt.svg')" class="w-10 h-10" />
        <p class="align-middle mt-2 ml-2">Portofolio</p>
      </div>
    </nuxt-link>
    <a href="https://github.com/Ryuze" target="_blank">
      <div class="mx-4 my-2 flex">
        <img :src="require('~/assets/icon/github.svg')" class="w-10 h-10" />
        <p class="align-middle mt-2 ml-2">Alfian Yunianto Suseno</p>
      </div>
    </a>
  </div>
</template>

<script>
export default {}
</script>

<style lang="postcss" scoped></style>
