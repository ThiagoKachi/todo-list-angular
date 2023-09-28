import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoBoxComponent } from './todo-box.component';

describe('TodoBoxComponent', () => {
  let component: TodoBoxComponent;
  let fixture: ComponentFixture<TodoBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoBoxComponent]
    });
    fixture = TestBed.createComponent(TodoBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
