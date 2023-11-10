<template>
  <div>
    <div>
      <label>Name</label>
      <input v-model="currentUn.name" type="text">
    </div>
    <div>
      <label>Address</label>
      <input v-model="currentUn.address" type="text">
    </div>
    <div>
      <label>Faculties</label>
      <input v-model="currentUn.facultiesCount" type="number">
    </div>
    <div>
      <label>Accreditation</label>
      <input v-model="currentUn.accreditationLevel" type="text">
    </div>
    <div>
      <label>Rating</label>
      <input v-model="currentUn.rating" type="number">
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: 'UnFilter',

  data() {
    return {
      currentUn: {},
    }
  },

  watch: {
    currentUn: {
      handler(newFilter){
        this.onUpdateFilter(newFilter)
      },
      deep: true,
    }
  },

  methods: {
    ...mapActions(["onUpdateFilter"])
  },
}
</script>

<style lang="scss" scoped>

</style>