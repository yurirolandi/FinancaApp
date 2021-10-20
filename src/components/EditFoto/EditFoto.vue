<template>
  <div class="edit-foto">
    <div class="edit-foto__box">
      <v-avatar size="100" rounded>
        <v-img v-if="foto" :src="url" alt="teste" />
        <v-icon v-else size="100"> $accountCircle </v-icon>
      </v-avatar>
      <v-icon class="edit" @click="editFoto" size="26"> mdi-image-edit </v-icon>
    </div>
    <div class="edit-foto__container" v-if="edit">
      <v-form ref="form" class="edit-form" v-model="valid" lazy-validation>
        <v-file-input
          :rules="rules"
          accept="image/png, image/jpeg, image/bmp"
          placeholder="Pick an avatar"
          prepend-icon="mdi-camera"
          @change="onChangeFotoUpload"
          label="Avatar"
        ></v-file-input>
        <v-btn :disabled="!valid" @click.stop="changeFoto" text color="primary">
          Alterar
        </v-btn>
      </v-form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
import { FotosService } from "../../services/Foto";
export default {
  name: "EditFoto",
  data() {
    return {
      valid: false,
      foto: null,
      edit: false,
      url: "",
      rules: [
        (value) =>
          !value ||
          value.size < 2000000 ||
          "O tamanho da foto precisa ser menor que 2 MB!",
      ],
    };
  },
  computed: {
    ...mapGetters({
      usuario: "getUser",
    }),
  },
  methods: {
    ...mapMutations(["setLoadingFullScreen"]),
    ...mapActions(["showSnackBar"]),
    onChangeFotoUpload(FileFoto) {
      const fotoUrl = URL.createObjectURL(FileFoto);
      this.url = fotoUrl;
      this.foto = FileFoto;
    },
    editFoto() {
      this.edit = !this.edit;
    },
    async changeFoto() {
      const formData = new FormData();
      formData.append("usuario_id", this.usuario.id);
      formData.append("foto", this.foto);

      try {
        this.setLoadingFullScreen(true);
        await FotosService.create(formData);
        this.setLoadingFullScreen(false);
        this.showSnackBar(["Foto enviada com sucesso!", "success"]);
      } catch (error) {
        this.setLoadingFullScreen(false);
        this.showSnackBar(["Houve um erro ao enviar a foto.", "error"]);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.edit-foto {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  &__box {
    display: flex;
    align-items: baseline;
    .edit {
      position: relative;
      top: 10px;
      right: 15px;
    }
  }
  &__container {
    display: flex;
    width: 100%;
    justify-content: center;
    > .edit-form {
      width: 80%;
      display: flex;
      align-items: baseline;
    }
  }
}
</style>
