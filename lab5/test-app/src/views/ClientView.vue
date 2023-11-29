<template>
  <div>
    <button @click="back">Home</button>
    <h1>Client Page</h1>

    <form class="information">
      <input v-model="name" type="text" placeholder="Name">
      <input v-model="email" type="email" placeholder="Email">
      <input v-model="tel" type="tel" placeholder="Phone number">
      <input v-model="pass" type="password" placeholder="Password"> <br> <br>
    </form>
    <button @click="step">Log Out</button>
  </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex";

export default {
  name: "ClientPage",

  data() {
    return {
      name: null,
      email: null,
      tel: null,
      pass: null,
    }
  },

  computed: {
    ...mapGetters(['getClient']),
    ...mapActions(['onDeleteClient'])
  },

  mounted() {
    const client = this.getClient
    this.name = client.name;
    this.email = client.email;
    this.tel = client.tel;
    this.pass = client.pass;
    return this.name && this.email && this.tel && this.pass;
  },

  methods: {
    back()  {
      this.$router.push('/');
    },
    step() {
      return this.onDeleteClient && this.$router.push('/')
    }
  },
}
</script>

<style lang="css" scoped>

</style>