import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
constructor(public router:Router){}
  users: Array<any> = [];
  public currentUser: any = null;
  
  ngOnInit() {
    const userData = localStorage.getItem('userData');
    this.users = userData ? JSON.parse(userData) : [];

    const storedUser = localStorage.getItem('currentUser');
  if (storedUser) {
    this.currentUser = JSON.parse(storedUser);
    
  } else {
   
    this.router.navigate(['signin']); 
  }
  }

  logout(){
    localStorage.removeItem(this.currentUser)
    this.router.navigate(['']);
  }
  
  profile(){
    this.router.navigate(['dashboard/profile'])
  
  }
  
  editprofile(){
    this.router.navigate(['dashboard/editprofile'])
  
  }
}
