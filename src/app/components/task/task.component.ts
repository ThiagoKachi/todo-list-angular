import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoProps } from 'src/app/models/todo';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  @Input() todoDetail!: TodoProps;
  @Output() removeTodo: EventEmitter<number> = new EventEmitter<number>();;

  handleRemoveTask(id: number) {
    this.removeTodo.emit(id);
  }
}
