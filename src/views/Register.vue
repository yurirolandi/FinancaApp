<template>
  <div class="register">
    <v-card elevation="2" min-height="568" min-width="320" max-width="450">
      <v-img
        max-width="240"
        class="img-register"
        src="../assets/img/register.svg"
      />
      <h4 class="Subtitle-1 text-center font-weight-medium">Registre-se</h4>
      <v-container>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="registerName"
            label="Nome"
            :rules="registerNameRules"
            required
          >
          </v-text-field>

          <v-text-field
            v-model="registerEmail"
            label="E-mail"
            :rules="registerEmailRules"
            required
          >
          </v-text-field>

          <v-text-field
            v-model="registerPassword"
            append-icon="mdi-key-chain-variant"
            :rules="[rules.required]"
            type="password"
            name="input-10-1"
            label="Senha"
          ></v-text-field>

          <v-text-field
            v-model="registerPasswordConfirm"
            append-icon="mdi-key-chain-variant"
            :rules="[rules.required]"
            type="password"
            name="input-10-1"
            label="Confirme sua senha"
          ></v-text-field>

          <v-btn
            :disabled="!valid"
            @click.stop="register"
            color="success"
            class="mr-4 mt-2"
            block
          >
            Cadastrar
          </v-btn>
        </v-form>
      </v-container>
    </v-card>
  </div>
</template>

<script>
import { mapMutations, mapActions } from "vuex";
import { usersService } from "@/services/Users.js";
export default {
  name: "Register",
  components: {},
  data() {
    return {
      valid: false,
      registerName: "",
      registerPassword: "",
      registerEmail: "",
      registerPasswordConfirm: "",
      registerEmailRules: [
        (v) => !!v || "E-mail é obrigatorio",
        (v) => /.+@.+/.test(v) || "Insira um email valido",
      ],
      rules: {
        required: (value) => !!value || "Senha é obrigatório!!!",
      },
      registerNameRules: [(v) => !!v || "Nome é obrigatorio"],
    };
  },
  methods: {
    ...mapActions(["showSnackBar"]),
    ...mapMutations(["setLoadingFullScreen"]),
    async register() {
      if (
        this.$refs.form.validate() === true &&
        this.registerPassword === this.registerPasswordConfirm
      ) {
        try {
          this.setLoadingFullScreen(true);
          let user = {
            nome: this.registerName,
            email: this.registerEmail,
            password: this.registerPassword,
          };

          await usersService.create(user);
          this.showSnackBar(["Usuário criado com sucesso", "success"]);
          this.registerName = "";
          this.registerEmail = "";
          this.registerPassword = "";
          this.registerPasswordConfirm = "";
          this.$router.push({ path: "/login" });
          this.setLoadingFullScreen(false);
        } catch (e) {
          console.error("Houve um error ao fazer o registro", e);
          this.showSnackBar(["Houve um error ao  criar o usuário", "error"]);
          this.setLoadingFullScreen(false);
        }
      } else {
        this.showSnackBar([
          "Ops... houve um erro ao tentar se registrar, verifique as informações do formulario e tente novamente",
          "error",
        ]);
        this.setLoadingFullScreen(false);
      }
    },
  },
};
</script>

<style lang="scss">
.register {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .img-register {
    margin: 0 auto;
  }
}
</style>
