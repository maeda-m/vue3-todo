<template>
  <article>
    <IndexView
      v-if="actions.isIndex"
      v-bind:tasks="tasks"
      v-on:action-new="showNewForm()"
      v-on:action-edit="showEditForm($event.id)"
      v-on:action-destroy="destroyTask($event.id)"
    />
    <NewFormView
      v-if="actions.isNew"
      v-on:action-create="createTask($event.attrs)"
    />
    <EditFormView
      v-if="actions.isEdit"
      v-bind:task="editTask"
      v-on:action-update="updateTask($event.id, $event.attrs)"
    />
  </article>
  <Toast />
</template>

<script>
import Toast from "primevue/toast";
import IndexView from "@/components/IndexView.vue";
import EditFormView from "@/components/EditFormView.vue";
import NewFormView from "@/components/NewFormView.vue";
</script>

<script setup>
import { reactive, onMounted } from "vue";
import { useToast } from "primevue/usetoast";
import Task from "@/models/task.js";

const toast = useToast();
const actions = reactive({
  isIndex: true,
  isNew: false,
  isEdit: false,
});
const toggleGroup = (onKey, obj) => {
  Object.entries(obj).forEach(([key]) => {
    obj[key] = false;
  });
  obj[onKey] = true;
};
const showNewForm = () => {
  toggleGroup("isNew", actions);
};
const editTask = reactive({});
const showEditForm = (taskId) => {
  const task = tasks[taskId];
  Object.entries(task.attrs).forEach(([key, value]) => {
    editTask[key] = value;
  });

  toggleGroup("isEdit", actions);
};
const showIndex = () => {
  toggleGroup("isIndex", actions);
};
const createTask = (attrs) => {
  const task = Task.create(attrs);
  tasks[task.id] = task;

  showIndex();
};
const updateTask = (taskId, attrs) => {
  const task = tasks[taskId];
  task.update(attrs);

  showIndex();
};
const destroyTask = (taskId) => {
  const task = tasks[taskId];
  task.destroy();
  delete tasks[taskId];
  toast.add({
    summary: `${task.title || "タスク"} を完了にしました`,
    life: 3000,
  });
};

const tasks = reactive({});
const loadTask = () => {
  Task.all().forEach((task) => {
    tasks[task.id] = task;
  });
};
onMounted(loadTask);
</script>
