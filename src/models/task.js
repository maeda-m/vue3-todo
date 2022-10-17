class Task {
  static all() {
    const records = [];
    for (var i = 0; i < localStorage.length; i++) {
      const id = localStorage.key(i);
      if (/^vue3-task-\d+$/.test(id)) {
        const attrs = { id };
        Object.assign(attrs, JSON.parse(localStorage.getItem(id)));

        records.push(new Task(attrs));
      }
    }

    return records;
  }

  constructor(attrs) {
    this.id = attrs.id || this.generateId;
    this.title = attrs.title;
    this.description = attrs.description;
  }

  get generateId() {
    return `vue3-task-${Date.now().toString()}`;
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
