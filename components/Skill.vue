<template>
  <div class="grid gap-2 divide-y mt-2">
    <div class="mx-auto"><p class="font-head">KEMAMPUAN</p></div>
    <div class="grid justify-items-center place-items-stretch mx-2 lg:grid-cols-2">
      <article class="grid gap-2 justify-items-center place-items-stretch">
        <div>
          <p class="font-head">Programming</p>
        </div>
        <div
          class="grid gap-4 font-body"
          :class="
            skillPr.length >= 3
              ? 'lg:grid-cols-3'
              : 'lg:grid-cols-' + skillPr.length
          "
        >
          <div v-for="item in skillPr" :key="item.name" class="px-2 py-2">
            <img :src="item.image" class="w-20 h-20 mx-auto" :alt="'Icon ' + item.name" />
            <p class="text-lg text-center">{{ item.name }}</p>
          </div>
        </div>
      </article>
      <article class="grid gap-2 justify-items-center place-items-stretch">
        <div>
          <p class="font-head">Networking & Lainnya</p>
        </div>
        <div
          class="grid gap-4 font-body"
          :class="
            skillMisc.length >= 3
              ? 'lg:grid-cols-3'
              : 'lg:grid-cols-' + skillMisc.length
          "
        >
          <div v-for="item in skillMisc" :key="item.name" class="px-2 py-2">
            <img :src="item.image" class="w-20 h-20 mx-auto" :alt="'Icon ' + item.name" />
            <p class="text-lg text-center">{{ item.name }}</p>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    skillPr: {
      type: Array,
      default() {
        return []
      },
    },
    skillMisc: {
      type: Array,
      default() {
        return []
      },
    },
  },
}
</script>
