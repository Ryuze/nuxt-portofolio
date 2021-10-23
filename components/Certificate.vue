<template>
  <div id="certificate" class="h-auto">
    <div class="mb-6">
      <p class="font-head text-center">SERTIFIKAT</p>
    </div>
    <div
      class="grid gap-10 font-body m-4 justify-items-center"
      :class="cert.length >= 3 ? 'grid-cols-3' : 'grid-cols-' + cert.length"
    >
      <template v-for="item in cert">
        <div
          :key="item.name"
          class="flex justify-center items-center"
          data-aos="zoom-in"
          data-aos-duration="2000"
          data-aos-delay="500"
        >
          <div class="flex flex-col">
            <img
              class="h-60 w-60 object-scale-down float-none rounded"
              :src="item.image"
              alt="sertifikat"
            />
            <p class="text-center">
              {{ item.name }} - {{ item.id }}
            </p>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cert: {
      type: Array,
      default() {
        return []
      },
    },
  },
}
</script>

<style lang="postcss" scoped>
.font-head {
  font-family: 'Arso', sans-serif;
  @apply font-bold text-3xl text-gray-200;
}

.font-body {
  font-family: 'Open Sans', sans-serif;
  @apply text-justify text-gray-200;
}
</style>
