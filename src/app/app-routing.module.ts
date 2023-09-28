import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoBoxComponent } from './components/todo-box/todo-box.component';

const routes: Routes = [
  {
    path: '',
    component : TodoBoxComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
