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
    <button @click="onAction">{{actionBtnTitle}}</button>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: 'ConfigUn',

  data() {
    return {
      currentUn: {},
    }
  },

  computed: {
    ...mapGetters(['getUnById']),
    unId() {
      return this.$route.params.unId
    },
    actionBtnTitle(){
      return this.unId ? 'Save' : 'Create'
    },
  },

  created() {
    if(this.unId) this.currentUn = {...this.getUnById(this.unId)}
  },

  methods: {
    ...mapActions(['onAddUn', 'onUpdateUn']),
    onAction() {
      if(!this.unId) this.onAddUn(this.currentUn)
      else this.onUpdateUn(this.currentUn)
      this.$router.push('/')
    }
  },
}
</script>

<style lang="scss" scoped>

</style>