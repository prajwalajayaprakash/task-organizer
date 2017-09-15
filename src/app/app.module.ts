import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { StrikeoutDirective } from "./strikeout.directive";
import {AlphaDirective} from "./alpha.directive";

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    StrikeoutDirective,
    AlphaDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
