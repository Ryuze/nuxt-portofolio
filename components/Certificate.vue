<template>
  <div class="grid gap-2 divide-y mt-2">
    <div class="mx-auto"><p class="font-head">SERTIFIKAT</p></div>
    <div
      class="grid justify-items-center place-items-center mx-2 gap-5"
      :class="
        certificate.length >= 3
          ? 'lg:grid-cols-3'
          : 'lg:grid-cols-' + certificate.length
      "
    >
      <article
        v-for="item in certificate"
        :key="item.name"
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-delay="200"
        data-aos-anchor-placement="bottom-bottom"
      >
        <img
          class="h-1/4 w-1/4 object-scale-down rounded mx-auto mb-2"
          :src="item.image"
          :alt="'Sertifikat' + item.name"
        />
        <p class="text-center font-bold">{{ item.name }} - {{ item.id }}</p>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    certificate: {
      type: Array,
      default() {
        return []
      },
    },
  },
}
</script>
