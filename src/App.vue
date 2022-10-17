<template>
  <article>
    <IndexView
      v-bind:tasks="tasks"
      v-on:action-new="showNewForm()"
      v-on:action-edit="showEditForm($event.id)"
      v-on:action-destroy="destroyTask($event.id)"
    />
  </article>
</template>

<script setup>
import { reactive, onMounted } from "vue";
import Task from "@/models/task.js";
import IndexView from "@/views/tasks/IndexView.vue";

const showIndex = () => {};
const showNewForm = () => {};
const showEditForm = (taskId) => {
};
const createTask = (attrs) => {
};
const updateTask = (taskId, attrs) => {
};
const destroyTask = (taskId) => {
  const task = tasks[taskId];
  task.destroy();
  delete tasks[taskId];
};

const tasks = reactive({});
const loadTask = () => {
  Task.all().forEach((task) => {
    tasks[task.id] = task;
  });
};
onMounted(loadTask);
</script>
