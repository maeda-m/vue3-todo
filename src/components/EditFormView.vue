<template>
  <useFormView
    dispatch-event="actionUpdate"
    button-name="更新する"
    v-bind:pageName="task.title || 'タスクの編集'"
    v-bind:task="task"
  />
</template>

<script>
import useFormView from "../composables/useFormView.vue";
</script>

<script setup>
defineProps({
  task: {
    type: Object,
    required: true,
  },
});
</script>
