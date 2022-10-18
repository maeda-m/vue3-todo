<template>
  <article>
    <IndexView
      v-if="toggle.isIndex"
      v-bind:tasks="tasks"
      v-on:action-new="showNewForm()"
      v-on:action-edit="showEditForm($event.id)"
      v-on:action-destroy="destroyTask($event.id)"
    />
    <NewFormView
      v-if="toggle.isNew"
      v-on:action-create="createTask($event.attrs)"
    />
    <EditFormView
      v-if="toggle.isEdit"
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
import { useToggleGroup } from "@/composables/useToggleGroup.js";
import Task from "@/models/task.js";

const toggle = useToggleGroup(["index", "new", "edit"]);
const showNewForm = () => {
  toggle.isNew = true;
};

const editTask = reactive({});
const showEditForm = (taskId) => {
  const task = tasks[taskId];
  const attrs = Object.entries(task.attrs);
  attrs.forEach(([key, value]) => {
    editTask[key] = value;
  });

  toggle.isEdit = true;
};

const showIndex = () => {
  toggle.isIndex = true;
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

const toast = useToast();
const destroyTask = (taskId) => {
  const task = tasks[taskId];
  task.destroy();
  delete tasks[taskId];

  const message = `${task.title || "タスク"} を完了にしました`;
  toast.add({ summary: message, life: 3000 });
};

const tasks = reactive({});
onMounted(() => {
  Task.all().forEach((task) => {
    tasks[task.id] = task;
  });
  showIndex();
});
</script>
