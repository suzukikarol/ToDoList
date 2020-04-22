import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  inputValue:any;

  constructor() { }

  card: CardComponent [];

  ngOnInit(): void {
    this.card = [];
    
  }

  getTask(event){
    this.inputValue = String(event.target.value);
    console.log(this.inputValue)
  }

  addCard() {
  
  }

}
