import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  @Input() todosQtd!: number;
  @Output() removeAllTodos: EventEmitter<void> = new EventEmitter<void>();

  handleRemoveAllTodos() {
    this.removeAllTodos.emit();
  }
}
