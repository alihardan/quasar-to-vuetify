import QInput from "./components/QInput.vue";
import QCard from "./components/QCard.vue";
import QCardSection from "./components/QCardSection.vue";
import QCheckbox from "./components/QCheckbox.vue";
import QSelect from "./components/QSelect.vue";
import QBtn from "./components/QBtn.vue";
import QDialog from "./components/QDialog.vue";
import QTable from "./components/QTable.vue";
import QForm from "./components/QForm.vue";
import QTr from "./components/QTr.vue";
import QTd from "./components/QTd.vue";
import QIcon from "./components/QIcon.vue";
import QSpace from "./components/QSpace.vue";
import QAvatar from "./components/QAvatar.vue";
import QLayout from "./components/QLayout.vue";
import QPageContainer from "./components/QPageContainer.vue";

const quasarToVuetify = {
  install(app) {
    app.component("q-input", QInput);
    app.component("q-card", QCard);
    app.component("q-card-section", QCardSection);
    app.component("q-checkbox", QCheckbox);
    app.component("q-select", QSelect);
    app.component("q-btn", QBtn);
    app.component("q-dialog", QDialog);
    app.component("q-table", QTable);
    app.component("q-form", QForm);
    app.component("q-tr", QTr);
    app.component("q-td", QTd);
    app.component("q-icon", QIcon);
    app.component("q-space", QSpace);
    app.component("q-avatar", QAvatar);
    app.component("q-layout", QLayout);
    app.component("q-page-container", QPageContainer);
  },
};

export { quasarToVuetify };
