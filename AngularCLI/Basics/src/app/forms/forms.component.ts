import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'forms',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {
  authForm = new FormGroup({
    userLogin: new FormControl(""),
    userPassword: new FormControl(""),
    userEmail: new FormControl(""),
    userGender: new FormControl("")
  });

  constructor(private http: HttpClient) { }

  onAuthSubmit() {
    console.log(this.authForm.value);
    this.http.post("https://localhost:7097/Home/Auth", this.authForm.value).subscribe(console.log);
  }
}
