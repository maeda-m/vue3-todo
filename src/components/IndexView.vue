<template>
  <h1>TODOリスト</h1>
  <table>
    <tbody>
      <tr v-for="(task, id) in tasks" v-bind:key="id">
        <td>
          <input
            type="radio"
            v-bind:id="id"
            v-on:input="emits('actionDestroy', { id })"
          />
        </td>
        <td>
          <strong>{{ task.title }}</strong>
          <p>{{ task.description }}</p>
        </td>
        <td>
          <button v-on:click="emits('actionEdit', { id })">Edit📝</button>
        </td>
      </tr>
    </tbody>
  </table>

  <section v-show="isEmpty">
    <h2>まだタスクがありません💡</h2>
    <p>下のボタンをクリックして新しいタスクをつくりましょう🎉</p>
  </section>

  <footer>
    <button v-on:click="emits('actionNew')">New➕</button>
  </footer>
</template>

<script setup>
import { computed } from "vue";

const emits = defineEmits(["actionNew", "actionEdit", "actionDestroy"]);
const props = defineProps({
  tasks: {
    type: Object,
  },
});

const isEmpty = computed(() => {
  return Object.keys(props.tasks).length === 0;
});
</script>
