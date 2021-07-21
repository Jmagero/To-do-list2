export const tasks = [];
export class Task {
  constructor(description, completed = false, index = tasks.length) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}