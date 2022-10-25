import { reactive } from "vue";

export function useToggleGroup(choices) {
  const toggle = reactive({});
  choices.forEach((choice) => {
    const classify = choice.replace(/^(?<initial>[a-z])/, (result) => {
      return result.toUpperCase();
    });

    const method = `is${classify}`;
    Object.defineProperty(toggle, method, {
      get() {
        return toggle[choice];
      },
      set(value) {
        if (value === true) {
          choices.forEach((property) => {
            const v = choice === property;
            toggle[property] = v;
          });
        }
      },
    });
  });

  return toggle;
}
