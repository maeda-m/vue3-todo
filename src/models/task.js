class Task {
  static #ID_PREFIX = "vue3-task";

  static all() {
    const records = [];
    for (var i = 0; i < localStorage.length; i++) {
      const reg = new RegExp(`^${Task.#ID_PREFIX}-\\d+$`);
      const id = localStorage.key(i);
      if (reg.test(id)) {
        const attrs = { id };
        Object.assign(attrs, JSON.parse(localStorage.getItem(id)));

        records.push(new Task(attrs));
      }
    }

    return records.sort((a, b) => {
      return a.id > b.id ? 1 : -1;
    });
  }

  constructor(attrs) {
    this.id = attrs.id || this.generateId;
    this.title = attrs.title;
    this.description = attrs.description;
  }

  get generateId() {
    return `${Task.#ID_PREFIX}-${Date.now().toString()}`;
  }

  save() {
    localStorage.setItem(this.id, JSON.stringify(this.attrs));
  }

  get attrs() {
    return {
      id: this.id,
      title: this.title,
      description: this.description,
    };
  }

  static create(attrs) {
    const task = new Task(attrs);
    task.save();

    return task;
  }

  update(attrs) {
    this.title = attrs.title;
    this.description = attrs.description;
    this.save();
  }

  destroy() {
    localStorage.removeItem(this.id);
  }
}

export default Task;
