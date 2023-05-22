import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

interface User {
  username: string|null;
  email: string|null;
  password: string|null;
  address: {
    street: string|null;
    postalCode: string|null;
    city: string|null;
  };
}


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  username = new FormControl('');
  email = new FormControl('');
  password = new FormControl('');
  street = new FormControl('');
  postalCode = new FormControl('');
  city = new FormControl('');
  user!:User;
  

  onSubmit() {
    this.user = {
      username: this.username.value,
      email: this.email.value,
      password: this.password.value,
      address: {
        street: this.street.value,
        postalCode: this.postalCode.value,
        city: this.city.value
      }
    };
console.log(this.user)
  

    this.username.reset();
    this.email.reset();
    this.password.reset();
    this.street.reset();
    this.postalCode.reset();
    this.city.reset();
  }
}


