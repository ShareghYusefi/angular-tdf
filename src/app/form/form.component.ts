import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  standalone: false,
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  person = {
    email: '',
    password: '',
  };
  onSubmit() {
    console.log('Person:', this.person);
  }
}
