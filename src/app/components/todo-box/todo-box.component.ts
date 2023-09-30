import { Component } from '@angular/core';
import { TodoProps } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-box',
  templateUrl: './todo-box.component.html',
  styleUrls: ['./todo-box.component.scss']
})

export class TodoBoxComponent {
  todos: TodoProps[] = [];

  addTodo(todo: TodoProps) {
    this.todos.push(todo);
  }

  removeTodo(id: number) {
    this.todos = this.todos.filter((todo) => (
      todo.id !== id
    ))
  }

  removeAllTodos() {
    this.todos = [];
  }
}
