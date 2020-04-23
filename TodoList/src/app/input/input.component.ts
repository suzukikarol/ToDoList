import { Component } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {

  inputValue:string = ''

  lastId: number = 0;

  tasks: Task[] = []

  addTask(task: Task){
    if (!task.id) {
      task.id = ++this.lastId;
    }
    this.tasks.push(task);
    return this;
  }

  constructor() { }



}


