<template>
  <div class="grid grid-cols-2 bg-white shadow-md py-4">
    <div class="flex ml-4">
      <nuxt-link to="/">
        <img
          :src="require('~/assets/icon/nuxt.svg')"
          alt="Nuxt Icon"
          class="w-10 h-10 float-left"
        />
        <p class="inline-block mt-2 ml-2">Portofolio</p>
      </nuxt-link>
    </div>
    <div class="flex flex-row-reverse mr-4">
      <a href="https://github.com/Ryuze" target="_blank">
        <p class="mt-2 ml-2 hidden lg:inline-block">Alfian Yunianto Suseno</p>
        <img :src="require('~/assets/icon/github.svg')" class="w-10 h-10 float-left" />
      </a>
    </div>
  </div>
</template>

<script>
export default {}
</script>
