<template>
  <div>
    <img
      :src="photo"
      class="sm:w-40 md:w-60 lg:w-72 xl:w-80 rounded"
      alt="photo profile"
    />
  </div>
</template>

<script>
export default {
    props: {
        photo: {
            type: String,
            default: ''
        }
    }
}
</script>
