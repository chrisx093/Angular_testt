import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  constructor( public router: Router){}
  userarray: Array<any> = [];

  user = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    accountType:'',
    password: '',
    kinName:'',
    kinPhone:''
  };

 
  onSubmit(form: any) {
    if (form.valid) {
      this.userarray.push({ ...this.user }); 
      console.log( this.userarray);

      localStorage.setItem('userData', JSON.stringify(this.userarray));


    
      this.router.navigate(['signin'])
    } else {
      console.log('Form is not valid');
    }
  }

  
}
