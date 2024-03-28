import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'traffic-light',
  standalone: true,
  imports: [],
  templateUrl: './traffic-light.component.html',
  styleUrl: './traffic-light.component.css'
})
export class TrafficLightComponent implements OnChanges{
  @Input() baseState = { initState: 0};
  state: number = this.baseState.initState;
  
  nextState() {
    this.state = (this.state + 1) % 4;
  }

  ngOnChanges(changes: SimpleChanges): void {
    //console.log(changes);
    if(changes["baseState"].firstChange) {
      this.state = changes["baseState"].currentValue.initState;
    }
    else {
      this.nextState();
    }
  }

  StopState() {
    this.state = 0;
  }

  NearStopState() {
    this.state = 1;
  }

  WaitState() {
    this.state = 3;
  }

  GoState() {
    this.state = 2;
  }

}
