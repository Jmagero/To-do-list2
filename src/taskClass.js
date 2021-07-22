export const tasks = [];
export class Task {
  constructor(description, id = tasks.length,completed = false) {
    this.description = description;
    this.completed = completed;
    this.id = id;
  }
}