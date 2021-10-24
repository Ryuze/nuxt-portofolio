<template>
  <div id="portofolio" class="h-auto">
    <div class="mb-6">
      <p class="font-head text-center">PORTOFOLIO</p>
    </div>
    <div
      class="
        grid grid-cols-2
        gap-10
        font-body
        m-4
        place-content-center
        text-center
      "
    >
      <template v-for="(item, index) in content">
        <div
          :key="item.name"
          class="col-span-2 flex"
          :class="[index % 2 == 0 ? 'mr-60' : 'flex-row-reverse ml-60']"
          :data-aos="[index % 2 == 0 ? 'zoom-in-right' : 'zoom-in-left']"
          data-aos-duration="2000"
          data-aos-delay="500"
          data-aos-offset="200"
        >
          <img
            class="w-1/3 float-right rounded"
            :src="item.image"
            alt="project image"
          />
          <div class="flex flex-col m-4">
            <p class="text-xl font-bold pb-4">
              {{ item.name }}
            </p>
            <p>
              {{ item.desc }}
            </p>
            <div class="mt-2">
              <a
                class="
                  bg-green-500
                  px-4
                  py-2
                  rounded
                  font-bold
                  shadow
                  hover:bg-green-600
                "
                :href="[item.link ? item.link : '#']"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: {
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
