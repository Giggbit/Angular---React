import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Basics';
  _titleClicked: number = 0;
  trafficData = {initState: 2};

  traffic() {
    this.trafficData = {initState: this.trafficData.initState + 1};
  }

  titleClick() {
    this._titleClicked
  }

}

