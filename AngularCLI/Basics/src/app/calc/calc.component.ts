import { Component } from '@angular/core';

@Component({
  selector: 'calc',
  standalone: true,
  imports: [],
  templateUrl: './calc.component.html',
  styleUrl: './calc.component.css'
})
export class CalcComponent {
  num: number = 10;

  decClick() {
    this.num--;
  }

  addClick() {
    this.num++;
  }
}

