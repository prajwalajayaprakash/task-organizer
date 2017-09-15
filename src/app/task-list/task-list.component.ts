import { Component, OnInit } from '@angular/core';
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
  save(event): void {
    if (event.keyCode === 13) {
      this.taskList.push(this.newTask);
      this.newTask = "";
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
