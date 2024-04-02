import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'moon',
  standalone: true,
  imports: [],
  templateUrl: './moon.component.html',
  styleUrl: './moon.component.css'
})
export class MoonComponent {
  url = "https://www.icalendar37.net/lunar/api/?year=[year]&month=[month]&shadeColor=gray&size=150&texturize=true";
  moonPhase: MoonPhase = {};
  toTrusted: Function;
  phases: Array<MoonPhase> = [];
  days: Array<number> = [];
  date;
  constructor (private http: HttpClient, private sanitizer: DomSanitizer){
    this.toTrusted = sanitizer.bypassSecurityTrustHtml; 
    this.date = new Date();
    this.updateWigets();
  }

  updateWigets(){
    let day = this.date.getDay()-1;
    this.days = [day-1, day, day+1];
    let url = this.url.replace("[year]", this.date.getFullYear().toString()).replace("[month]", (this.date.getMonth()+1).toString());
    this.http.get(url).subscribe( obj => { 
      var phase = (obj as any).phase;
      this.phases = Object.keys(phase).map(k => phase[k]);
      this.moonPhase = this.phases[day];
    });
  }

  dateChanged(event: any){
    let selectedDate = new Date(event.target.value);
    let day = selectedDate.getDate();
    let month = selectedDate.getMonth() + 1;
    let year = selectedDate.getFullYear();

    this.days = [day-1, day, day+1];
    let url = this.url.replace("[year]", year.toString()).replace("[month]", month.toString()).replace("[day]", day.toString());
    this.http.get(url).subscribe(obj => {
      var phase = (obj as any).phase;
      this.phases = Object.keys(phase).map(k => phase[k]);
      this.moonPhase = this.phases[day-1];
    });
  }
}

interface MoonPhase{
  phaseName?: string,
  isPhaseLimit?: boolean,
  lighting?: number,
  svg?: string,
  svgMini?: boolean,
  timeEvent?: boolean,
  dis?: number,
  dayWeek?: number,
  npWidget?: string
}