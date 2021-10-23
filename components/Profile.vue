<template>
  <div id="profile">
    <div class="grid grid-cols-2 gap-0 h-screen divide-x">
      <div class="m-auto">
        <profile-photo :photo="profile.photo" />
      </div>
      <div class="m-auto">
        <profile-content :name="profile.name" />
      </div>
    </div>
  </div>
</template>

<script>
import ProfileContent from './ProfileContent.vue'
import ProfilePhoto from './ProfilePhoto.vue'
export default {
  components: { ProfilePhoto, ProfileContent },
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
