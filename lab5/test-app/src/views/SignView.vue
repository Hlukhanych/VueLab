<template>
  <div class="auth-container">

    <div class="button-group">
      <button @click="IsVisibleSignUp">Зареєструватися</button>
      <button @click="IsVisibleSignIn">Увійти</button>
    </div>

    <form v-if="isVisible1">
      <h2>Sign Up</h2>
      <input v-model="newName" type="text" placeholder="Name">
      <input v-model="newEmail" type="email" placeholder="Email">
      <input v-model="newTel" type="tel" placeholder="Phone number">
      <input v-model="newPass" type="password" placeholder="Password"> <br> <br>
      <button @click="Registration" type="submit" :disabled="isRegistrationDisabled">Зареєструватися</button>
    </form>

    <form v-if="isVisible2">
      <h2>Sign In</h2>
      <input v-model="email" type="email" placeholder="Email">
      <input v-model="pass" type="password" placeholder="Password"> <br> <br>
      <button @click="Authorization" type="submit" :disabled="isAuthorizationDisabled">Авторизуватися</button>
    </form>
  </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex";

export default {
  data() {
    return {
      isVisible1: true,
      isVisible2: false,
      newName: null,
      newEmail: null,
      newTel: null,
      newPass: null,
      email: null,
      pass: null,
    };
  },

  computed: {
    isRegistrationDisabled() {
      return !(this.newName && this.newEmail && this.newTel && this.newPass);
    },

    isAuthorizationDisabled() {
      return !(this.email && this.pass)
    }
  },

  methods: {
    ...mapGetters(['getClients', 'getClient']),
    ...mapActions(['onAddClient', 'onAddSignClient']),

    IsVisibleSignUp() {
      this.isVisible2 = false;
      this.isVisible1 = true;
    },

    IsVisibleSignIn() {
      this.isVisible2 = true;
      this.isVisible1 = false;
    },

    Registration() {
      if (this.newName && this.newEmail && this.newTel && this.newPass) {
        const client = {
          name: this.newName,
          email: this.newEmail,
          tel: this.newTel,
          pass: this.newPass
        };

        this.onAddClient(client)
        this.onAddSignClient(client)

        this.newName = null;
        this.newEmail = null;
        this.newTel = null;
        this.newPass = null;

        this.$router.push('/client')
      }
      else {
        alert("Будь ласка, заповніть всі поля!");
      }
    },

    Authorization() {
      this.getClients.forEach((localClient) => {
        let client = {
          name: localClient.name,
          email: this.email,
          tel: localClient.tel,
          pass: this.pass
        };

        if (localClient.email === client.email && localClient.pass === client.pass) {
          this.onAddSignClient(client)
          this.$router.push('/client');
        }
        else {
          alert("Невірний пароль");
        }
      })
    }
  }
};
</script>

<style scoped>
.auth-container {
  width: 300px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

.button-group {
  display: flex;
  justify-content: space-between;
}

button {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
}

button:hover {
  background-color: #007BFF;
  color: #fff;
}
</style>