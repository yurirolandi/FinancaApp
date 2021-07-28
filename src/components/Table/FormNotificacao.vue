<template>
  <div>
    <Dialog :show="showForm" :maxWidth="1000">
      <template v-slot:dialog-titulo>
        {{ notification ? "Atualizar" : "Criar" }} Notificação
        <v-spacer></v-spacer>
        <v-icon color="red" class="mr-1" @click="closeDialog">mdi-close</v-icon>
      </template>

      <template v-slot:dialog-conteudo>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-autocomplete
            v-model="target"
            :items="targetTypes"
            item-text="Nome"
            item-value="Id"
            :rules="targetRules"
            label="Público Alvo"
            multiple
            chips
            deletable-chips
            clearable
            required
            hint="Experimente digitar para encontrar o público alvo"
            persistent-hint
            data-cy="form-target"
          ></v-autocomplete>
          <v-row>
            <v-col cols="6">
              <v-text-field
                v-model="title"
                :rules="titleRules"
                label="Título"
                required
                counter="50"
                data-cy="form-title"
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-autocomplete
                v-model="notificationType"
                :items="notificationTypes"
                item-text="Nome"
                item-value="Id"
                :rules="notificationTypeRules"
                label="Tipo de Notificação"
                clearable
                required
                data-cy="form-notificacao-type"
              ></v-autocomplete>
            </v-col>
          </v-row>

          <v-text-field
            v-model="text"
            :rules="textRules"
            label="Texto"
            required
            counter="150"
            data-cy="form-text"
          ></v-text-field>

          <DateTime
            :dateProp.sync="liberationDate"
            :timeProp.sync="liberationTime"
          />
        </v-form>
      </template>

      <template v-slot:dialog-btns>
        <v-btn
          color="red darken-1"
          text
          @click="closeDialog"
          data-cy="dialog-btn-cancelar"
        >
          Cancelar
          <v-icon right> mdi-cancel </v-icon>
        </v-btn>

        <v-btn
          v-if="notification"
          color="error"
          @click="openNotificationExclude"
          data-cy="dialog-btn-cancelar"
        >
          Excluir
          <v-icon right> mdi-trash-can </v-icon>
        </v-btn>

        <v-btn
          @click="openDialogSend"
          :disabled="!valid"
          color="success"
          @click.stop="validate"
          data-cy="form-send-button"
          :loading="isLoading"
        >
          {{ notification ? "Atualizar" : "Criar" }}
          <v-icon right> mdi-send </v-icon>
        </v-btn>
      </template>
    </Dialog>

    <CrudDialogConfirm
      :dialogTitle="
        'Deseja confimar a ' +
        (notification ? 'atualização' : 'criação') +
        ' da notificação?'
      "
      :keyValueList="notification ? confirmDialogList : confirmCreateList"
      @sendElement="enviarDados"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import Dialog from "../shared/Dialog";
import DateTime from "../shared/DateTime.vue";
import CrudDialogConfirm from "../shared/Crud/CrudDialogConfirm.vue";
import {
  getDateTimeIsoString,
  getDateTimeFromIsoString,
  isDateTimeBeforeToday,
  isDateTimeStringBeforeToday,
} from "../../utils/dateTime";
export default {
  name: "NotificationLista",
  components: {
    Dialog,
    DateTime,
    CrudDialogConfirm,
  },
  props: ["confirmDialogList"],
  data: () => ({
    title: "",
    text: "",
    target: [],
    liberationDate: "",
    liberationTime: "",
    notificationType: 0,
    applicationId: -1,
    dispatchType: 3,
    simuladoType: 0,
    additionalInfoText: null,

    valid: false,
    minDate: new Date().toISOString().substr(0, 10),
    showLiberationDate: false,
    showLiberationTime: false,

    titleRules: [
      (v) => !!v || "Título é requerido",
      (v) => (v && v.length <= 50) || "Título deve ser menor que 50 letras",
    ],
    textRules: [
      (v) => !!v || "Texto é requerido",
      (v) => (v && v.length <= 150) || "Texto deve ser menor que 150 letras",
    ],
    targetRules: [(v) => !!v || "Público Alvo é requerido"],
    liberationDateRules: [(v) => !!v || "Data de Liberação é Obrigatório"],
    liberationTimeRules: [(v) => !!v || "Hora de Liberação é Obrigatória"],
    notificationTypeRules: [(v) => !!v || "Tipo de Notificação é requerido"],
    simuladoTypeRules: [(v) => !!v || "Tipo de Simulado é requerido"],
    applicationIdRules: [(v) => !!v || "Tipo de Aplicação é requerido"],
    additionalInfoTexttRules: [
      (v) => !!v || "Informação Adicional é requerida",
      (v) =>
        (v && v.length <= 200) ||
        "Informação Adicional deve ser menor que 200 letras",
    ],
  }),
  methods: {
    ...mapActions([
      "createNotification",
      "updateNotification",
      "deleteNotification",
      "showSnackBar",
      "fillNotificationList",
    ]),
    ...mapMutations([
      "setSnackBarStatus",
      "setShowFormDialog",
      "setCurrentElement",
      "setShowDeleteDialog",
      "setShowConfirmDialog",
      "setSelectTypeFilter",
      "setSelectTypesTargetFilter",
    ]),
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
      this.applicationId = -1;
      this.dispatchType = 3;
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    closeDialog() {
      this.reset();
      this.resetValidation();
      this.setShowFormDialog(false);
      this.setCurrentElement(null);
    },
    openNotificationExclude() {
      if (isDateTimeStringBeforeToday(this.notification.DataLiberacao)) {
        this.showSnackBar([
          "Essa notificação já foi liberada e não pode ser excluida!",
          "error",
        ]);
        this.fillNotificationList();
        return;
      }
      this.setShowDeleteDialog(true);
    },
    openDialogSend() {
      if (this.applicationId == 25 && this.dispatchType != 1) {
        this.showSnackBar([
          "Notificação DESKTOP só tem tipo de envio INTERNA!",
          "error",
        ]);
        return;
      }
      if (this.notificationType == 2 && this.dispatchType != 1) {
        this.showSnackBar([
          "Notificação tipo INFORMATIVO COM LINK INTERNO só tem tipo de envio INTERNA!",
          "error",
        ]);
        return;
      }
      if (!this.target || this.target.length == 0) {
        this.showSnackBar(["Escolha Pelo menos 1 Público alvo!", "error"]);
        return;
      }
      if (isDateTimeBeforeToday(this.liberationDate, this.liberationTime)) {
        this.showSnackBar([
          "Data/Hora de liberação não pode ser antes de agora",
          "error",
        ]);
        return;
      }
      if (
        this.notification &&
        isDateTimeStringBeforeToday(this.notification.DataLiberacao)
      ) {
        this.showSnackBar([
          "Essa notificação já foi liberada e não pode ser editada!",
          "error",
        ]);
        this.fillNotificationList();
        this.closeDialog();
        return;
      }

      if (!this.$refs.form.validate()) return;
      this.setSelectTypeFilter(this.notificationType);
      this.setSelectTypesTargetFilter(this.target);
      this.setShowConfirmDialog(true);
    },
    async enviarDados() {
      const liberationDateIsoString = getDateTimeIsoString(
        this.liberationDate,
        this.liberationTime
      );

      const userJson = localStorage.getItem("User");
      const userId = JSON.parse(userJson).intContactID;

      let data = {
        TipoNotificacaoId: this.notificationType,
        EmployeeId: userId,
        Texto: this.text,
        Titulo: this.title,
        InfoAdicional: this.additionalInfoText,
        AplicacaoId: this.applicationId,
        DataLiberacao: liberationDateIsoString,
        EnvioID: this.dispatchType,
        IdsRegras: this.target,
      };

      if (this.notification) {
        data.IdNotificacao = this.notification.IdNotificacao;
      }

      if (data.TipoNotificacaoId == 4) {
        data.SimuladoID = this.simuladoType;
      }

      try {
        if (this.notification) await this.updateNotification(data);
        else await this.createNotification(data);
        this.showSnackBar(["Dados enviados com Sucesso!", "success"]);
        this.closeDialog();
        this.setShowConfirmDialog(false);
      } catch (e) {
        this.showSnackBar([
          `Ocorreu um Erro ao tentar ${
            this.notification ? "Atualizar" : "Criar"
          } Notificação!`,
          "error",
        ]);
        console.error(e);
      }
    },
  },
  computed: {
    ...mapGetters({
      notification: "getCurrentElement",
      showForm: "getShowFormDialog",
      isLoading: "getLoadingCrud",

      targetTypes: "getFilterTargetTypesFormated",
      targetTypesFilter: "getFilterTargetTypes",
      notificationTypes: "getNotificationTypes",
      applications: "getApplications",
      dispatchTypes: "getDispatchTypes",
      simuladoTypes: "getSimuladoTypes",
      typesFiltered: "getFilterNotificationTypes",
    }),
    confirmCreateList() {
      return [
        {
          key: "Público Alvo",
          value: this.targetTypesFilter,
        },
        { key: "Título", value: this.title },
        { key: "Tipo", value: this.typesFiltered },
        { key: "Texto", value: this.text },
        {
          key: "Data de Liberação",
          value: this.liberationDate + " " + this.liberationTime,
        },
      ];
    },
  },
  watch: {
    showForm: function (val) {
      if (!val) this.reset();
      if (val && this.notification) {
        this.notificationType = this.notification.TipoNotificacaoId;
        this.text = this.notification.Texto;
        this.title = this.notification.Titulo;
        this.applicationId = this.notification.AplicacaoId;
        this.dispatchType = this.dispatchTypes.find(
          (type) => type.Nome == this.notification.Envio
        ).Id;
        [this.liberationDate, this.liberationTime] = getDateTimeFromIsoString(
          this.notification.DataLiberacao
        );
        this.target = this.notification.NotificacaoRegrasIDs.map(
          (regra) => regra.Id
        );
        if (this.notificationType == 4) {
          this.simuladoType = this.notification.ParamsAdicional.SimuladoId;
        } else {
          this.additionalInfoText = this.notification.ParamsAdicional.Link;
        }
      }
    },
  },
};
</script>

<style></style>
