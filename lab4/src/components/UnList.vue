<template>
  <div>
    <un-item v-for="un in getUn" :key="un.id" :un-obj="un" />
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import UnItem from "@/components/UnItem.vue";
export default {
  name: 'UnList',

  components: {
    UnItem,
  },

  computed: {
    ...mapGetters(['getUn'])
  },
}
</script>

<style lang="scss" scoped>

</style>