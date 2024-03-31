import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'rates',
  standalone: true,
  imports: [],
  templateUrl: './rates.component.html',
  styleUrl: './rates.component.css'
})
export class RatesComponent {
  rates: Array<NbuRate> = [];
  nbuUrl = "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json";

  constructor(private http: HttpClient) { 
    this.http.get<Array<NbuRate>>(this.nbuUrl)
      .subscribe(data => this.rates = data);
    
  }
}

interface NbuRate {
  r030: number,
  txt: string,
  rate: number,
  cc: string,
  data: string
}
