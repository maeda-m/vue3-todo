<template>
  <h1>{{ props.pageName }}</h1>

  <input v-model="title" placeholder="タイトルを追加" />
  <textarea v-model="description" placeholder="詳細な説明を追加"></textarea>

  <button
    v-on:click="
      $emit(props.dispatchEvent, {
        id,
        attrs: {
          title,
          description,
        },
      })
    "
  >
    {{ props.buttonName }}
  </button>
</template>

<script setup>
import { unref } from "vue";

const props = defineProps({
  dispatchEvent: {
    type: String,
    required: true,
  },
  pageName: {
    type: String,
    required: true,
  },
  buttonName: {
    type: String,
    required: true,
  },
  task: {
    type: Object,
    default() {
      return {
        id: "",
        title: "",
        description: "",
      };
    },
  },
});

const task = unref(props.task);
const { id, title, description } = task;
</script>
