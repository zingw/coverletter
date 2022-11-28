import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SampleProjectRoutingModule } from './sample-project-routing.module';
import { CalculatorComponent } from './calculator/calculator.component';
import { TodoListComponent } from './todo-list/todo-list.component';


@NgModule({
  declarations: [
    CalculatorComponent,
    TodoListComponent
  ],
  imports: [
    CommonModule,
    SampleProjectRoutingModule
  ]
})
export class SampleProjectModule { }
