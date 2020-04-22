import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  inputValue:any;

  constructor() { }

  ngOnInit(): void {
  }

  getTask(event){
    this.inputValue = String(event.target.value);
    console.log(this.inputValue)
  }

}
