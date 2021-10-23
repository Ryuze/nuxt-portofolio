<template>
  <div id="experience" class="h-auto">
    <template-body :header="'PENGALAMAN KERJA'">
      <template #body>
        <div class="flex justify-center items-center">
          <img
            :src="require('~/assets/developer-team.svg')"
            class="w-96 h-96 mx-auto my-auto"
            alt="programming"
          />
        </div>
        <div class="flex justify-center items-center">
          <table
            v-if="experience.length !== 0"
            class="table-auto divide-y w-2/3"
          >
            <thead>
              <tr>
                <th class="px-2 py-2 font-bold">Nama perusahaan</th>
                <th class="px-2 py-2 font-bold">Pekerjaan</th>
                <th class="px-2 py-2 font-bold">Lama bekerja</th>
              </tr>
            </thead>
            <tbody class="divide-y">
              <tr v-for="item in experience" :key="item.company">
                <td class="px-2 py-2">{{ item.company }}</td>
                <td class="px-2 py-2">{{ item.job }}</td>
                <td class="px-2 py-2">{{ item.time }}</td>
              </tr>
            </tbody>
          </table>
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
    experience: {
      type: Array,
      default() {
        return []
      },
    },
  },
}
</script>
