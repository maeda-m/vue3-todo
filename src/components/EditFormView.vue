<template>
  <FormView
    dispatch-event="actionUpdate"
    button-name="更新する"
    v-bind:pageName="taskTitle || 'タスクの編集'"
    v-bind:task="task"
  />
</template>

<script setup>
import { unref } from "vue";

const props = defineProps({
  task: {
    type: Object,
    required: true,
  },
});

const taskTitle = unref(props.task.title);
</script>
