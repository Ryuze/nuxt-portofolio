<template>
  <div>
    <div class="mb-6">
      <p class="font-head text-center">{{ header }}</p>
    </div>
    <div class="grid grid-cols-2 gap-0 divide-x font-body">
      <slot name="body" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    header: {
      type: String,
      default: '',
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
