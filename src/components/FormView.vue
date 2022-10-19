<template>
  <h1>{{ props.pageName }}</h1>

  <div class="p-fluid">
    <div class="field">
      <label for="title">タイトルを追加</label>
      <PrimeInputText id="title" v-model="title" />
    </div>
    <div class="field">
      <label for="description">詳細な説明を追加</label>
      <PrimeTextarea
        id="description"
        v-model="description"
        v-bind:autoResize="true"
      />
    </div>
    <div class="field">
      <PrimeButton
        v-bind:label="props.buttonName"
        v-on:click="
          emits(props.dispatchEvent, {
            id,
            attrs: {
              title,
              description,
            },
          })
        "
      />
    </div>
  </div>
</template>

<script>
import PrimeInputText from "primevue/inputtext";
import PrimeTextarea from "primevue/textarea";

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

<style>
.field {
  padding: 0.5rem;
}
</style>
