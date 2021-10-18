<template>
  <div class="login">
    <v-card min-height="568" min-width="320" max-width="450">
      <v-img max-width="240" class="img-login" src="../assets/img/login.svg" />
      <h4 class="Subtitle-1 text-center font-weight-medium">Login</h4>
      <v-container>
        <v-form
          ref="form"
          class="d-flex flex-column"
          v-model="valid"
          lazy-validation
        >
          <v-text-field
            v-model="email"
            label="E-mail"
            :rules="emailRules"
            required
          >
          </v-text-field>

          <v-text-field
            v-model="password"
            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required]"
            :type="show ? 'text' : 'password'"
            name="input-10-1"
            label="Senha"
            @click:append="show = !show"
          ></v-text-field>

          <v-btn
            @click.stop="logar"
            :disabled="!valid"
            color="success"
            class="mr-4 mt-2"
          >
            Logar
          </v-btn>
        </v-form>
      </v-container>
      <v-divider></v-divider>
      <v-container class="d-flex flex-column justify-center align-center">
        <h4 class="Subtitle-1 text-center font-weight-medium">
          Ainda não possui uma conta ?
        </h4>
        <v-btn router to="/register" text color="primary">Criar Agora</v-btn>
      </v-container>
    </v-card>
  </div>
</template>

<script>
import { mapMutations, mapActions } from "vuex";

export default {
  name: "Login",
  components: {},
  data() {
    return {
      valid: false,
      show: false,
      password: "",
      email: "",
      emailRules: [
        (v) => !!v || "E-mail é obrigatorio",
        (v) => /.+@.+/.test(v) || "Insira um email valido",
      ],
      passwordRules: [(p) => !!p ?? "Senha é obrigatória!!!"],
      rules: {
        required: (value) => !!value || "Senha é obrigatório!!!",
      },
    };
  },
  methods: {
    ...mapActions(["showSnackBar", "Token"]),
    ...mapMutations(["setUser", "setLoadingFullScreen"]),
    async logar() {
      if (this.$refs.form.validate() === true) {
        try {
          this.setLoadingFullScreen(true);
          await this.Token({
            email: this.email.trim(),
            password: this.password.trim(),
          });

          this.password = "";
          this.email = "";
          this.$router.push({ path: "/" });
          this.setLoadingFullScreen(false);
        } catch (error) {
          console.error("Houve um error ao fazer Login", error);
          this.setLoadingFullScreen(false);
          this.showSnackBar([
            "Ops, ocorreu um erro ao tentar efetuar o login!",
            "error",
          ]);
        }
      }
    },
  },
};
</script>

<style lang="scss">
.login {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .img-login {
    margin: 0 auto;
  }
  > .v-sheet.v-card:not(.v-sheet--outlined) {
    box-shadow: none;
  }
}
</style>
