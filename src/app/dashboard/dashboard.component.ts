import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,RouterModule ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {


  public currentUser: any = null; 
  randomNumbers: string = '';

  constructor(public router: Router) {}

  ngOnInit() {
    
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      this.currentUser = JSON.parse(storedUser);
      
    } else {
     
      this.router.navigate(['signin']); 
    }

    this.generateRandomNumbers();
}



  
  generateRandomNumbers(): void {
    let numbers: string[] = [];
    for (let i = 0; i < 3; i++) {
      numbers.push(Math.floor(Math.random() * 1000).toString()); 
    }
    this.randomNumbers = numbers.join(' ');
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
