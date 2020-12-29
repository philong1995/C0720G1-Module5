import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontSizeComponent } from './03_Angular_Overview/practice/font-size/font-size.component';
import { PetInfoComponent } from './03_Angular_Overview/practice/pet-info/pet-info.component';
import { StudentManagementComponent } from './03_Angular_Overview/exercise/student-management/student-management.component';
import { ColorPickerComponent } from './03_Angular_Overview/exercise/color-picker/color-picker.component';
import { CalculateComponent } from './03_Angular_Overview/exercise/calculate/calculate.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HackerNewsComponent } from './03_Angular_Overview/exercise/hacker-news/hacker-news.component';
import { LikesComponent } from './03_Angular_Overview/exercise/likes/likes.component';
import { StudentDetailComponent } from './03_Angular_Overview/exercise/student-management/student-detail/student-detail.component';
import { NameCardComponent } from './03_Angular_Overview/practice/name-card/name-card.component';
import { ProgressBarComponent } from './03_Angular_Overview/practice/progress-bar/progress-bar.component';
import { RatingBarComponent } from './03_Angular_Overview/exercise/rating-bar/rating-bar.component';
import { CountdownTimerComponent } from './03_Angular_Overview/exercise/countdown-timer/countdown-timer.component';
import { CountdownTimerOnchangesComponent } from './03_Angular_Overview/exercise/countdown-timer-onchanges/countdown-timer-onchanges.component';
import { PipesComponent } from './03_Angular_Overview/exercise/pipes/pipes.component';
import { TodoComponent } from './03_Angular_Overview/practice/todo/todo.component';
import { LoginComponent } from './03_Angular_Overview/exercise/login/login.component';
import { RegisterComponent } from './03_Angular_Overview/exercise/register/register.component';
import { RegisterFinalComponent } from './03_Angular_Overview/exercise/register-final/register-final.component';

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
    StudentDetailComponent,
    NameCardComponent,
    ProgressBarComponent,
    RatingBarComponent,
    CountdownTimerComponent,
    CountdownTimerOnchangesComponent,
    PipesComponent,
    TodoComponent,
    LoginComponent,
    RegisterComponent,
    RegisterFinalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
