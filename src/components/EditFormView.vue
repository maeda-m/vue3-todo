<template>
  <FormView
    dispatch-event="actionUpdate"
    button-name="更新する"
    v-bind:pageName="task.title || 'タスクの編集'"
    v-bind:task="task"
  />
</template>

<script setup>
defineProps({
  task: {
    type: Object,
    required: true,
  },
});
</script>
