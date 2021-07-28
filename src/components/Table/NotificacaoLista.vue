<template>
  <v-card elevation="4" class="mx-auto mb-7">
    <CrudTableList
      :itemList="notificationList"
      :headers="headers"
      itemKey="IdNotificacao"
      :validadeActionsFunction="(x) => x.isBeforeToday"
      validadeActionsText="Não é possivel editar notificações que já foram liberadas"
      @fillList="fillNotificationList"
      createButtonText="Criar"
      expendedListProp="NotificacaoRegrasIDs"
      :expandedHeaders="expandedHeaders"
      expandedKey="Id"
      showExpand
      dialogDeleteTitle="Deseja confirmar a exclusão"
      :keyValueList="confirmDialogList"
      @deleteEvent="excludeNotification"
    />

    <FormNotificacao :confirmDialogList="confirmDialogList" />
  </v-card>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import FormNotificacao from "./FormNotificacao";
import CrudTableList from "../shared/Crud/CrudTableList";
import {
  getLocaleStringFromIso,
  isDateTimeStringBeforeToday,
} from "../../utils/dateTime";

export default {
  name: "NotificationLista",
  components: {
    FormNotificacao,
    CrudTableList,
  },
  data: () => ({
    search: "",
    dialogExclude: false,
    isDense: false,
  }),
  methods: {
    ...mapActions([
      "fillNotificationList",
      "closeAllDialogs",
      "deleteNotification",
      "showSnackBar",
    ]),
    async excludeNotification() {
      if (isDateTimeStringBeforeToday(this.element.DataLiberacao)) {
        this.showSnackBar([
          "Essa notificação já foi liberada e não pode ser Excluida!",
          "error",
        ]);
        this.fillNotificationList();
        this.closeAllDialogs();
        return;
      }
      const data = {
        IdNotificacao: this.element.IdNotificacao,
      };

      try {
        await this.deleteNotification(data);
        this.showSnackBar(["Notificação excluída com Sucesso!", "success"]);
      } catch (e) {
        this.showSnackBar([
          "Ocorreu um Erro ao tentar Excluir Notificação!",
          "error",
        ]);

        console.error(e);
      }

      this.closeAllDialogs();
    },
  },
  computed: {
    ...mapGetters({
      notificationList: "getNotificationListFormatedDate",
      element: "getCurrentElement",
    }),
    headers() {
      return [
        { text: "Alvo", value: "data-table-expand", sortable: false },
        {
          text: "Data de Liberação",
          value: "DataLiberacaoFormatada",
          sortable: false,
        },
        { text: "Título", value: "Titulo", sortable: false },
        { text: "Texto", value: "Texto", sortable: false },
        { text: "Tipo", value: "TipoNotificacaoNome", sortable: false },
        {
          text: "Aplicação",
          value: "AplicacaoNome",
          sortable: false,
          align: "center",
        },
        { text: "Envio", value: "Envio", sortable: false },
        { text: "Ações", value: "actions", sortable: false },
      ];
    },
    expandedHeaders() {
      return [{ text: "Título", value: "Nome" }];
    },
    confirmDialogList() {
      if (!this.element) return [];
      return [
        {
          key: "Público Alvo",
          value: this.element.NotificacaoRegrasIDs.map((x) => x.Nome).join(
            " | "
          ),
        },
        { key: "Título", value: this.element.Titulo },
        { key: "Texto", value: this.element.Texto },
        { key: "Tipo", value: this.element.TipoNotificacaoNome },
        {
          key: "Data de Liberação",
          value: getLocaleStringFromIso(this.element.DataLiberacao),
        },
      ];
    },
  },
};
</script>
