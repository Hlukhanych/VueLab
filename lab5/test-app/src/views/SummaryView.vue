<template>
  <div>
    <h2>Навчальний план</h2>
    <ul>
      <li v-for="lessonTeacherPair in lessonTeacherPairsArray" :key="lessonTeacherPair">
        {{ getLessonWithTeacher(lessonTeacherPair.replace('_', '-')) }}
      </li>
    </ul>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: 'SummaryView',

  computed: {
    ...mapGetters(['getLessons', 'getTeachers', 'getSelectedTeachers']),

    lessonTeacherPairsArray() {
      return this.$route.params.lessonTeacherPairs.split('/');
    },
  },

  methods: {
    getLessonWithTeacher(lessonTeacherPair) {
      const [lessonId, teacherId] = lessonTeacherPair.split('-');
      const lesson = this.getLessons.find((lesson) => lesson.id.toString() === lessonId);
      const teacher = this.getTeachers.find((teacher) => teacher.id.toString() === teacherId);

      if (lesson && teacher) {
        return `${lesson.name} - ${teacher.name}`;
      }
      else {
        return `Урок з ID ${lessonId}`;
      }
    },
  },

}
</script>

<style lang="scss" scoped>

</style>