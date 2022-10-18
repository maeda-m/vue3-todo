<template>
  <h1>{{ props.pageName }}</h1>

  <input v-model="title" placeholder="タイトルを追加" />
  <textarea v-model="description" placeholder="詳細な説明を追加"></textarea>

  <button
    v-on:click="
      emits(props.dispatchEvent, {
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

<script>
const AVAILABLE_EMITS = ["actionCreate", "actionUpdate"];
</script>

<script setup>
import { unref } from "vue";

const emits = defineEmits(AVAILABLE_EMITS);
const props = defineProps({
  dispatchEvent: {
    type: String,
    required: true,
    validator(value) {
      return AVAILABLE_EMITS.includes(value);
    },
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

const { id, title, description } = unref(props.task);
</script>
