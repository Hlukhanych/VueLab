<template>
  <div>
    <label>Виберіть Уроки:</label>
    <div v-for="lesson in getLessons" :key="lesson.id">
      <input type="checkbox" :id="lesson.id" :value="lesson.id" v-model="selectedLessons"/>
      <label :for="lesson.id">{{ lesson.name }}</label>
    </div>
    <button @click="next">Вибрати вчителів</button>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: 'LessonsView',

  data() {
    return {
      selectedLessons: [],
    };
  },
  computed: {
    ...mapGetters(['getLessons', 'getClient']),
  },
  methods: {
    next() {
      const client = this.getClient;
      if (client.name !== null) {
        if (this.selectedLessons.length > 0) {
          this.$router.push({
            name: 'teachers',
            query: { lessonIds: this.selectedLessons.join('/') }
          })
        }
      }
      else {
        alert('Ви не авторизовані');
        this.$router.push('/')
      }
    }
  },
}
</script>

<style lang="css" scoped>

</style>