<template>
  <nav>
    <router-link to="/">Головна</router-link> |
    <router-link to="/lessons">Уроки</router-link> |
    <router-link to="/teachers">Вчителі</router-link>
    <router-link id="sign" to="/sign">Реєстрація</router-link> |
    <router-link to="/client">Клієнт</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

#sign{
  margin-left: 1000px;
}
</style>
<script setup>
</script>