<template>
  <h1>TODOリスト</h1>

  <section v-if="isEmpty">
    <h2>まだタスクがありません💡</h2>
    <p>下のボタンをクリックして新しいタスクをつくりましょう🎉</p>
  </section>
  <table v-else>
    <thead>
      <tr>
        <th>完了にする</th>
        <th></th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(task, id) in tasks" v-bind:key="id">
        <td>
          <PrimeInputSwitch
            type="radio"
            v-bind:id="id"
            v-on:input="emits('actionDestroy', { id })"
          />
        </td>
        <td>
          <strong>{{ task.title }}</strong>
        </td>
        <td>
          <p>{{ task.description }}</p>
        </td>
        <td>
          <PrimeButton
            v-on:click="emits('actionEdit', { id })"
            label="編集する"
            icon="pi pi-pencil"
            class="p-button-info p-button-sm p-button-rounded p-button-outlined"
          />
        </td>
      </tr>
    </tbody>
  </table>

  <footer>
    <PrimeDivider align="center">
      <PrimeButton
        v-on:click="emits('actionNew')"
        label="登録する"
        icon="pi pi-plus"
        class="p-button-success"
      />
    </PrimeDivider>
  </footer>
</template>

<script>
import PrimeInputSwitch from "primevue/inputswitch";
import PrimeDivider from "primevue/divider";
</script>

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

<style>
table tr td {
  padding: 0.5rem;
}
</style>
