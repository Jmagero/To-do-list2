const tasks = [];
class Task {
  constructor(index, description, completed) {
    this.index = index;
    this.description = description;
    this.completed = completed;
  }
}
const task1 = new Task(1, 'first task', false);
const task2 = new Task(2, 'second task', false);
const task3 = new Task(3, 'third task', true);
const task4 = new Task(4, 'forth task', true);
tasks.push(task1, task2, task3, task4);
