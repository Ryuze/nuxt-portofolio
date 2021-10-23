<template>
  <div id="education" class="h-auto">
    <template-body :header="'PENDIDIKAN'">
      <template #body>
        <div class="flex justify-center items-center">
          <table
            v-if="education.length !== 0"
            class="table-auto divide-y w-full mx-10"
          >
            <thead>
              <tr>
                <th class="px-2 py-2 font-bold">Sekolah</th>
                <th class="px-2 py-2 font-bold">Tingkat</th>
                <th class="px-2 py-2 font-bold">Jurusan</th>
                <th class="px-2 py-2 font-bold">GPA</th>
              </tr>
            </thead>
            <tbody class="divide-y">
              <tr v-for="item in education" :key="item.school">
                <td class="px-2 py-2 text-left">{{ item.school }}</td>
                <td class="px-2 py-2 text-left">{{ item.degree }}</td>
                <td class="px-2 py-2 text-left">{{ item.major }}</td>
                <td class="px-2 py-2 text-left">{{ item.gpa }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <img
            :src="require('~/assets/unsika.png')"
            class="sm:w-40 md:w-60 lg:w-72 xl:w-80 rounded mx-auto my-auto"
            alt="unsika"
          />
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
    education: {
      type: Array,
      default() {
        return []
      },
    },
  },
}
</script>
