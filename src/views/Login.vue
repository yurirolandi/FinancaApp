<template>
  <v-container>
    <v-card elevation="2" class="mt-5">
      <v-img src="../assets/img/login.svg" />
      <h4 class="Subtitle-1 text-center font-weight-medium">Login</h4>
      <v-container>
        <v-form ref="form" v-model="valid" lazy-validation>
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
        <v-btn router to="/register" text color="primary">Criar Conta</v-btn>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
import { mapMutations, mapActions } from "vuex";
import { usersService } from "@/services/Users.js";
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
    ...mapActions(["showSnackBar"]),
    ...mapMutations(["setUser", "setLoadingFullScreen"]),
    async logar() {
      if (this.$refs.form.validate() === true) {
        try {
          this.setLoadingFullScreen(true);
          const login = await usersService.get(
            this.email.trim(),
            this.password.trim()
          );
          if (!login) {
            this.setLoadingFullScreen(false);
            this.showSnackBar(["Error usuário ou senha inválido", "error"]);
          }
          if (login) {
            let token = {
              ...login,
              token: true,
            };
            this.setUser(token);
            this.showSnackBar(["Login efetuado com sucesso", "success"]);
            this.setLoadingFullScreen(false);
            this.$router.push({ path: "/" });
          }
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
