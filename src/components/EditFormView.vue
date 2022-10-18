<template>
  <useFormView
    dispatch-event="actionUpdate"
    button-name="更新する"
    v-bind:pageName="task.title"
    v-bind:task="task"
  />
</template>

<script setup>
import useFormView from "../composables/useFormView.vue";

defineProps({
  task: {
    type: Object,
    required: true,
  },
});
</script>
