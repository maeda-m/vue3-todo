import EditFormView from "../components/EditFormView.vue";

export default {
  title: "Form",
  component: EditFormView,
};

const Template = (args) => ({
  components: { EditFormView },
  setup() {
    return { ...args };
  },
  template: `<EditFormView v-bind:task="task" />`,
});

export const EditForm = Template.bind({});
EditForm.args = {
  task: {
    id: "ID",
    title: "ここにタスク名が入ります",
    description: "ここにタスクの詳細な説明が入ります",
  },
};
