import {Component, OnInit} from '@angular/core';
import {MyTask} from "./model/my-task";
import * as dayjs from "dayjs";


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  tasks ?: MyTask[];

  taskName ?: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  createTask(): void {
    const task: MyTask = {name: this.taskName, createdDate: dayjs(), solved: false, reason: undefined, important: false}
    this.tasks?.push(task);
    console.log('task added successfully at ', dayjs())
  }
}
