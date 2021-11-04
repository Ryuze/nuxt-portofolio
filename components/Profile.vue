<template>
  <div class="grid gap-2">
    <article class="mx-auto mt-4">
      <img
        :src="profile.photo"
        alt="Foto Profile"
        class="rounded-md w-1/2 mx-auto lg:w-full"
      />
    </article>
    <profile-content :name="profile.name" />
  </div>
</template>

<script>
import ProfileContent from './ProfileContent.vue'
export default {
  components: { ProfileContent },
  props: {
    profile: {
      type: Object,
      default() {
        return {
          name: '',
          photo: '',
        }
      },
    },
  },
}
</script>
