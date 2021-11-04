<template>
  <div class="grid gap-2 divide-y mt-2 mb-2">
    <div class="mx-auto"><p class="font-head">PORTOFOLIO</p></div>
    <div
      class="
        grid
        justify-items-center
        place-items-center
        mx-2
        gap-4
      "
      :class="content.length >= 2 ? 'lg:grid-cols-2' : 'lg:grid-cols-' + content.length"
    >
      <article
        v-for="item in content"
        :key="item.name"
        class="mt-2"
        data-aos-duration="2000"
        data-aos-delay="500"
        data-aos-offset="200"
        data-aos-anchor-placement="bottom-bottom"
      >
        <div class="w-2/3 mx-auto">
          <a :href="item.image" target="_blank">
            <img
              :src="item.image"
              :alt="'Foto ' + item.name"
              class="
                transform
                transition
                duration-500
                ease-in-out
                mx-auto
                border-2 border-gray-200
                shadow
                hover:scale-110
              "
            />
          </a>
        </div>
        <div class="text-center">
          <p class="text-xl font-bold text-gray-700 m-2">{{ item.name }}</p>
          <p class="font-body mb-2">{{ item.desc }}</p>
          <a
            class="
              transform
              transition
              duration-500
              ease-in-out
              bg-green-400
              px-4
              py-2
              rounded
              font-bold
              text-white
              hover:bg-green-600
            "
            :href="[item.link ? item.link : '#']"
            target="_blank"
          >
            Live Demo
          </a>
        </div>
      </article>
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
