export const tasks = [];
export class Task {
  constructor(id = tasks.length, description, completed = false, ) {
    this.description = description;
    this.completed = completed;
    this.id = id;
  }
}