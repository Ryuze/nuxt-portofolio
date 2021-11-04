<template>
  <div class="grid gap-2 mt-2 bg-gray-800 justify-items-center place-items-center">
    <p class="footer-head">All icon used here by</p>
    <button class="animate-bounce" @click="show = !show">
      <img
        :src="require('~/assets/icon/arrow-bottom-white.svg')"
        alt="Arrow Bottom"
        class="w-10 h-10 mx-auto"
      />
    </button>
    <div
      v-show="show"
      class="
        grid
        lg:grid-rows-4 lg:grid-flow-col
        gap-4
        justify-items-start
        footer-body
      "
    >
      <div v-for="item in contributors" :key="item.link">
        &#9679;
        <a
          :href="item.link"
          class="transition hover:text-blue-600"
          target="_blank"
          >{{ item.name }}</a
        >
        by
        <a
          :href="item.contributor"
          class="transition hover:text-blue-600"
          target="_blank"
          >{{ item.contributor_name }}</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    contributors: {
      type: Array,
      default() {
        return []
      },
    },
  },
  data() {
    return {
      show: false,
    }
  },
}
</script>

<style lang="postcss" scoped>
.footer-head {
  font-family: 'Arso', sans-serif;
  @apply text-white font-bold text-xl;
}

.footer-body {
  font-family: 'Open Sans', sans-serif;
  @apply text-white font-bold;
}
</style>
