import IndexView from "../components/IndexView.vue";

export default {
  title: "Table",
  component: IndexView,
};

const Template = (args) => ({
  components: { IndexView },
  setup() {
    return { ...args };
  },
  template: `<IndexView v-bind:tasks="tasks" />`,
});

export const TaskList = Template.bind({});
TaskList.args = {
  tasks: {
    id1: {
      title: "空気清浄機のフィルターを掃除する",
      description: "",
    },
    id2: {
      title: "10/20 耳鼻科通院",
      description: `
      持っていくもの：
      １．保険証
      ２．診察券`,
    },
    id3: {
      title: "10/30 健康診断",
      description: "",
    },
  },
};

export const EmptyList = Template.bind({});
EmptyList.args = {
  tasks: {},
};
