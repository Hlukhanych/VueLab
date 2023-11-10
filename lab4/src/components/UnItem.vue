<template>
  <div>
    <div>{{unObj.name}} | {{unObj.address}} | {{unObj.facultiesCount}} | {{unObj.accreditationLevel}} | {{unObj.rating}}
    <button @click="deleteUn(unObj.id)">Delete</button>
    <button @click="onEdit(unObj.id)">Edit</button>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: 'UnItem',

  props: {
    unObj: {
      type: Object,
      default: () => ({}),
    },
  },

  methods: {
    ...mapActions(['deleteUn']),

    onEdit(editUnId){
      this.$router.push({
        name: 'config',
        params: {
          unId: editUnId
        }
      })
    },
  },
}
</script>

<style lang="scss" scoped>

</style>