<template>
  <div class="grid gap-2 divide-y mt-2">
    <div class="mx-auto"><p class="font-head">PENDIDIKAN</p></div>
    <div class="grid justify-items-center place-items-center mx-2 lg:grid-cols-2">
      <article>
        <table class="font-body">
          <thead>
            <tr class="border-b">
              <th v-for="item in title" :key="item" class="px-2 py-2 font-bold">
                {{ item }}
              </th>
            </tr>
          </thead>
          <tbody v-if="education.length !== 0" class="divide-y">
            <tr v-for="item in education" :key="item.school">
              <td
                v-for="(content, index) in item"
                :key="index"
                class="px-2 py-2 text-left"
              >
                {{ content }}
              </td>
            </tr>
          </tbody>
          <tbody v-else>
            <tr>
              <td :colspan="title.length">
                <p class="font-bold text-center">EMPTY</p>
              </td>
            </tr>
          </tbody>
        </table>
      </article>
      <article class="hidden lg:block">
        <img
          :src="require('~/assets/unsika.png')"
          class="w-1/2 mx-auto lg:w-full"
          alt="Icon Unsika"
        />
      </article>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    education: {
      type: Array,
      default() {
        return []
      },
    },
  },
  data() {
    return {
      title: ['Sekolah', 'Tingkat', 'Jurusan', 'GPA'],
    }
  },
}
</script>
