import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {

  constructor (public router:Router){}

  public email = '';
  public password = '';
  public errorMessage = '';
  public savedData:any = []


  ngOnInit() {
    
    const userData = localStorage.getItem('userData');
    if (userData) {
      this.savedData = JSON.parse(userData);
    } else {
      this.savedData = []; 
    }
  }

  
  onSubmit(form: any) {
    if (form.valid) {
     
      const user = this.savedData.find((userData: any) => 
        userData.email === this.email && userData.password === this.password
      );

      if (!user) {
      
        this.errorMessage = 'Email or password is incorrect. Please try again.';
        return;
      }
      localStorage.setItem('currentUser', JSON.stringify(user));
      
      this.router.navigate(['dashboard']);
    } else {
      console.log('Form is not valid');
    }
  }


    

  

  
}
