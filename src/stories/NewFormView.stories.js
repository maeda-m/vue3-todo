import NewFormView from "../components/NewFormView.vue";

export default {
  title: "Form",
  component: NewFormView,
};

const Template = () => ({
  components: { NewFormView },
  template: `<NewFormView />`,
});

export const NewForm = Template.bind({});
