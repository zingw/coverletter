import {ErrorHandler, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SampleProjectRoutingModule} from './sample-project-routing.module';
import {CalculatorComponent} from './calculator/calculator.component';
import {TodoListComponent} from './todo-list/todo-list.component';
import {FormsModule} from "@angular/forms";
import {MyErrorHandler} from "./calculator/error-handler";


@NgModule({
  declarations: [
    CalculatorComponent,
    TodoListComponent
  ],
  imports: [
    CommonModule,
    SampleProjectRoutingModule,
    FormsModule,
  ],
  providers: [{provide: ErrorHandler, useClass: MyErrorHandler}]
})
export class SampleProjectModule {
}
