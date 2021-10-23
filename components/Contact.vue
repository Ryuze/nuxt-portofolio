<template>
  <div id="contact" class="h-auto">
    <div class="mb-6">
      <p class="font-head text-center">KONTAK</p>
    </div>
    <div
      class="grid gap-10 font-body m-4 justify-items-center"
      :class="
        contact.length >= 3 ? 'grid-cols-3' : 'grid-cols-' + contact.length
      "
    >
      <template v-for="item in contact">
        <div
          :key="item.name"
          class="flex justify-center items-center"
          data-aos="zoom-in"
          data-aos-duration="2000"
          data-aos-delay="500"
        >
          <div class="flex">
            <img class="h-10 w-10" :src="item.icon" alt="icon" />
            <p v-if="item.link" class="ml-2 mt-2">
              <a :href="item.link" target="_blank">
                {{ item.id }}
              </a>
            </p>
            <p v-else class="ml-2 mt-2">
                {{ item.id }}
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
    contact: {
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
