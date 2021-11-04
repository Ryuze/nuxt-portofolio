<template>
  <div class="grid gap-2 divide-y mt-2">
    <div class="mx-auto"><p class="font-head">KONTAK</p></div>
    <div class="grid justify-items-center place-items-stretch mx-2 gap-5"
      :class="
        contact.length >= 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-' + contact.length
      "
    >
      <article
        v-for="item in contact"
        :key="item.name"
        class="grid lg:grid-cols-2 gap-0 justify-items-center place-items-center font-body"
      >
        <div class="lg:justify-self-end lg:mr-2">
          <img
            class="h-10 w-10"
            :src="item.icon"
            :alt="'Icon ' + item.name"
          />
        </div>
        <p v-if="item.link">
          <a :href="item.link" class="transition hover:text-blue-600" target="_blank">
            {{ item.id }}
          </a>
        </p>
        <p v-else>
          {{ item.id }}
        </p>
      </article>
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
