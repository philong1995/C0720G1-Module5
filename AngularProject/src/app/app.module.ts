import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontSizeComponent } from './03_Angular_Overview/practice/font-size/font-size.component';
import { PetInfoComponent } from './03_Angular_Overview/practice/pet-info/pet-info.component';
import { StudentManagementComponent } from './03_Angular_Overview/exercise/student-management/student-management.component';
import { ColorPickerComponent } from './03_Angular_Overview/exercise/color-picker/color-picker.component';
import { CalculateComponent } from './03_Angular_Overview/exercise/calculate/calculate.component';
import {FormsModule} from '@angular/forms';
import { HackerNewsComponent } from './03_Angular_Overview/exercise/hacker-news/hacker-news.component';
import { LikesComponent } from './03_Angular_Overview/exercise/likes/likes.component';

@NgModule({
  declarations: [
    AppComponent,
    FontSizeComponent,
    PetInfoComponent,
    StudentManagementComponent,
    ColorPickerComponent,
    CalculateComponent,
    HackerNewsComponent,
    LikesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
