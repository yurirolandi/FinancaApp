<template>
  <v-container>
    <v-card elevation="2" class="mt-5">
      <v-img src="../assets/img/register.svg" />
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
            color="success"
            class="mr-4 mt-2"
            data-cy="login-button"
          >
            Cadastrar
          </v-btn>
        </v-form>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
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
      passwordRules: [(p) => !!p ?? "Senha é obrigatória!!!"],
      rules: {
        required: (value) => !!value || "Senha é obrigatório!!!",
      },
      registerNameRules: [(v) => !!v || "Nome é obrigatorio"],
    };
  },
};
</script>
