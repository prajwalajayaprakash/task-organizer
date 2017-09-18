import { Component, OnInit } from '@angular/core';
import {isNullOrUndefined, isUndefined} from "util";
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  taskList: string[] = [
    "Practice Angular",
    "Cook lunch",
    "Complete github project"
  ];
  newTask: string;
  save(): void {
    if (isNullOrUndefined(this.newTask)) {
        alert('Please enter a task');
      } else {
        this.taskList.push(this.newTask);
        this.newTask = null;
      }
    }
 constructor() { }

  ngOnInit() {
  }

}
