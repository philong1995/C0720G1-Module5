import { Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-countdown-timer-onchanges',
  templateUrl: './countdown-timer-onchanges.component.html',
  styleUrls: ['./countdown-timer-onchanges.component.scss']
})
export class CountdownTimerOnchangesComponent implements OnChanges, OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
  }

}
