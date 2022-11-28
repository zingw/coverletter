import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TodoListComponent} from "./todo-list/todo-list.component";
import {CalculatorComponent} from "./calculator/calculator.component";


const routes: Routes = [
  {
    path : 'calculator',
    component : CalculatorComponent
  },
  {
    path : 'todo-list',
    component : TodoListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SampleProjectRoutingModule { }
