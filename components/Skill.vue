<template>
  <div id="skill" class="h-auto">
    <template-body :header="'KEMAMPUAN'">
      <template #body>
        <div
          class="grid grid-cols-3 gap-4 justify-items-center"
          :class="
            skillPr.length >= 3 ? 'grid-cols-3' : 'grid-cols-' + skillPr.length
          "
        >
          <div
            class="font-head col-start-1 items-center"
            :class="
              skillPr.length >= 3 ? 'col-span-3' : 'col-span-' + skillPr.length
            "
          >
            Programming
          </div>
          <div
            v-for="item in skillPr"
            :key="item.name"
            class="flex justify-center items-center"
          >
            <img :src="item.image" class="w-20 h-20" />
            <p class="text-lg text-gray-200 ml-4">{{ item.name }}</p>
          </div>
        </div>
        <div
          class="grid gap-4 justify-items-center"
          :class="
            skillMisc.length >= 3
              ? 'grid-cols-3'
              : 'grid-cols-' + skillMisc.length
          "
        >
          <div
            class="font-head col-start-1 col-span-3 items-center"
            :class="
              skillMisc.length >= 3
                ? 'col-span-3'
                : 'col-span-' + skillMisc.length
            "
          >
            Networking & Lainnya
          </div>
          <div
            v-for="item in skillMisc"
            :key="item.name"
            class="flex justify-center items-center"
          >
            <img :src="item.image" class="w-20 h-20" />
            <p class="text-lg text-gray-200 ml-4">{{ item.name }}</p>
          </div>
        </div>
      </template>
    </template-body>
  </div>
</template>

<script>
import TemplateBody from './TemplateBody.vue'
export default {
  components: {
    TemplateBody,
  },
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
