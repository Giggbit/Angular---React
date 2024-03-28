import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TrafficLightComponent } from './traffic-light/traffic-light.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TrafficLightComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Basics';
  _titleClicked: number = 0;
  num: number = 10;
  trafficData = {initState: 2};

  traffic() {
    this.trafficData = {initState: this.trafficData.initState + 1};
  }

  decClick() {
    this.num--;
  }

  addClick() {
    this.num++;
  }

  titleClick() {
    this._titleClicked
  }

}

