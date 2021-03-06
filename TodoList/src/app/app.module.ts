import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//module
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material/material.module';

//component
import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';

//animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardComponent } from './card/card.component';
import { InputComponent } from './input/input.component';



@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    CardComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
