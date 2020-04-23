import { Component, Output } from '@angular/core';
import { Task } from '../task';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {

  inputValue:string = ''

  // lastId: number = 0;

  id:number = 0;

  task:any;

  public result:any = {}

  @Output() send = new EventEmitter()

  public addTask(){
    if (!this.task.id) {
      this.task.id = this.id++
    } this.send.emit(this.result)
  
  }

  constructor() { }

  // @Output() send = new EventEmitter<any>();

  // public result:any = {};


  // public receiveValue(event) {
  //   this.send.emit(this.result)
  // }

  // showDayTwo() {
  //   this.week.fDayTwo(this.cityName).subscribe((resposta) => {
  //     this.weekApi = resposta;
  //     let resp = this.todayApi.data[2];
  //     this.weeksData2 = new Model(resp.temp, resp.city_name, resp.weather.description, resp.wind_spd, resp.rh, resp.sunrise, resp.sunset)
  //   })
  // }

  // addTask(task: Task){
  //   if (!task.id) {
  //     task.id = ++this.lastId;
  //   }
  //   this.tasks.push(task);
  //   return this.send.emit(Task[this.task]);
  // }


}


