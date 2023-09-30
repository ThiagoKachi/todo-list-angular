import { Component, EventEmitter, Output } from '@angular/core';
import { TodoProps } from 'src/app/models/todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent {
  @Output() addTodo: EventEmitter<TodoProps> = new EventEmitter<TodoProps>();

  todoValue: string = '';

  inputValue(event: Event) {
    const { value } = event.target as HTMLInputElement;

    this.todoValue = value;
  }

  handleAddTask() {
    this.addTodo.emit({
      id: Math.random(),
      title: this.todoValue
    });

    this.todoValue = '';
  }
}
