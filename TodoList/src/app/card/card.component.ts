import { Component } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  inputValue:string = ''

  lastId: number = 0;

  tasks:any[] = []

  public send(result:any) : void {
    this.tasks.push(result.tasks)
  }
  
  
  
  // tasks: Task[] = []

  // deleteTaskById(id: number){
  //   this.tasks = this.tasks.filter(tasks =>
  //     tasks.id !==id);
  //   return this;
  // }

  // getAllTasks(): Task[]{
  //   return this.tasks;
  // }

  // getTaskById(id: number): Task{
  //   return this.tasks.filter(task =>
  //     task.id===id).pop();
  // }

  // updateTaskById(id: number, values: Object = {}): Task {
  //   let task =this.getTaskById(id);
  //   if (!task){
  //     return null
  //   }
  //   Object.assign(task, values);
  //   return task;
  // }

  // toggleTaskComplete(task: Task){
  //   let updatedTask = this.updateTaskById(task.id,{
  //     complete: !task.complete
  //   });
  //   return updatedTask
  // }

  constructor() { }

}
