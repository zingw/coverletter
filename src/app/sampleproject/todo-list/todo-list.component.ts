import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import * as dayjs from "dayjs";
import {MyTask} from "./model/my-task";
import Swal, {SweetAlertOptions} from 'sweetalert2'
import {Common} from "../../service/common";

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
  finishedTask: MyTask[] = [];

  taskName : string | null = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  createTask(): void {
    if(this.taskName == null || this.taskName.trim() === ''){
      this.emptyWarning();
      return;
    }
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
    this.taskName = '';
    console.log('task added successfully at ', dayjs().format('hh:mm DD/MM/YYYY'), task)
  }

  removeTask(task ?: MyTask): void {
    const options: SweetAlertOptions<any, any> = {
      title: 'Cho tôi biết lý do hủy...',
      icon: 'question',
      input: 'text',
      showCancelButton: true,
      confirmButtonText: 'Lưu',
      denyButtonText: `Hủy`,
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

  finishTask(task?: MyTask): void {
    task!.solvedTime = dayjs().diff(task?.createdDate, 'minutes');
    const options: SweetAlertOptions<any, any> = {
      title: 'Chúc mừng!',
      icon: 'success',
      text: `Chỉ mất ${task!.solvedTime} phút để hoàn thành!`,
      showCancelButton: false,
      showConfirmButton: false,
      timer: 1000
    };
    Swal.fire(options).then((result) => {

      this.finishedTask.push(task!);
      this.tasks = this.tasks.filter(obj => {
        return obj !== task
      });
      console.log(result);
    })
  }

  updateTask(task ?: MyTask): void {
    const options: SweetAlertOptions<any, any> = {
      title: 'Sửa tên việc',
      input: 'text',
      showCancelButton: true,
      confirmButtonText: 'Lưu',
      denyButtonText: `Hủy`,
    };
    Swal.fire(options,).then((result) => {
      if (result.isConfirmed && result.value.toString().trim() !== '') {
        const currIndex = this.getCurrentIndex(task);
        task!.name = Common.upperFirstLetter(result.value);
        this.tasks[currIndex] = task!;
        Swal.fire('Lưu thành công!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Hủy lưu thay đổi', '', 'info')
      }else{
        this.emptyWarning();
      }
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

  onKeydown(event ?: any): void {
    if (event.key === "Enter") {
      this.createTask();
    }
  }

  emptyWarning() : void {
    const options: SweetAlertOptions<any, any> = {
      title: 'Trống',
      text: 'Bạn phải viết gì vào chứ ? ',
      icon: 'question',
      timer: 3000
    };
    Swal.fire(options);
  }
}
