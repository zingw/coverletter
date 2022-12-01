import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import * as dayjs from "dayjs";
import {MyTask} from "./model/my-task";
import Swal, {SweetAlertOptions} from 'sweetalert2'
import {Common} from "../../service/common";
import {diff} from "ngx-bootstrap/chronos/moment/diff";

const {v4: uuidv4} = require('uuid');

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @ViewChild('#test') test!: ElementRef<HTMLInputElement>;

  tasks: MyTask[] = [];
  taskBin: MyTask[] = [];
  taskName ?: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  createTask(): void {
    const task = {
      id: uuidv4(),
      name: this.taskName,
      createdDate: dayjs(),
      solved: false,
      reason: undefined,
      important: false
    }
    task.name = Common.upperFirstLetter(task.name!);
    this.tasks?.push(task);
    console.log('task added successfully at ', dayjs().format('hh:mm DD/MM/YYYY'), task)
  }

  removeTask(task ?: MyTask): void {
    const options: SweetAlertOptions<any, any> = {
      title: 'Tell me the reason...',
      icon : 'question',
      input: 'text',
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Cancel`,
    };
    Swal.fire(options,).then((result) => {
      if (result.isConfirmed) {

        task!.deleted = true;
        task!.reason = result.value;

        this.taskBin.push(task!);
        this.tasks = this.tasks.filter(obj => {
          return obj !== task
        });
      }
      console.log(result);
      console.log(this.taskBin);
    })
  }

  finishTask(task? : MyTask) : void{
    const time = dayjs().diff(task?.createdDate,'minutes');
    const options: SweetAlertOptions<any, any> = {
      title: 'Congratulations!',
      icon : 'success',
      text : `It takes only ${time} minutes to finish, what a man !`,
      showCancelButton: false,
      showConfirmButton: false,
      timer : 1000
    };
    Swal.fire(options).then((result) => {

      this.taskBin.push(task!);
      this.tasks = this.tasks.filter(obj => {
        return obj !== task
      });
      console.log(result);
    })
  }

  updateTask(task ?: MyTask): void {
    const options: SweetAlertOptions<any, any> = {
      title: 'Update Task',
      input: 'text',
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Cancel`,
    };
    Swal.fire(options,).then((result) => {
      if (result.isConfirmed) {
        // update list
        const currIndex = this.getCurrentIndex(task);
        task!.name = Common.upperFirstLetter(result.value);
        this.tasks[currIndex] = task!;
        Swal.fire('Saved!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
      console.log(result);
    })
  }

  swapUp(task?: MyTask): void {
    const currIndex = this.getCurrentIndex(task);
    //to swap up this arr.size must >= 2 and must not the TOP one
    if (this.tasks.length >= 2 && currIndex > 0) {
      this.tasks[currIndex] = this.tasks[currIndex - 1];
      this.tasks[currIndex - 1] = task!;
    }
  }

  reachedTop(task ?: MyTask): boolean {
    return this.getCurrentIndex(task) == 0;
  }

  reachedLast(task ?: MyTask): boolean {
    return this.getCurrentIndex(task) == this.tasks.length - 1;
  }

  swapDown(task?: MyTask): void {
    const currIndex = this.getCurrentIndex(task);
    //to swap up this arr.size must >= 2 and must not the TOP one
    if (this.tasks.length >= 2 && currIndex < this.tasks.length - 1) {
      this.tasks[currIndex] = this.tasks[currIndex + 1];
      this.tasks[currIndex + 1] = task!;
    }
  }

  getCurrentIndex(task ?: MyTask): number {
    let i = 0;
    for (let t of this.tasks) {
      if (t.id === task!.id) {
        break;
      } else {
        i++;
      }
    }
    return i;
  }


}
