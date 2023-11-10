<template>
  <div class="home">
    <un-filter />
    <un-list />
    <button @click="onCreate">Create</button>
  </div>
</template>

<script>
import UnList from "@/components/UnList.vue";
import UnFilter from "@/components/UnFilter.vue";
export default {
  name: 'HomeView',
  components: {
    UnList,
    UnFilter,
  },

  methods: {
    onCreate() {
      this.$router.push({
        name: 'config'
      })
    }
  },
}
</script>
