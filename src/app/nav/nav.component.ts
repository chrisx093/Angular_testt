import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
constructor(public router:Router){}

public currentUser: any = null;

ngOnInit() {
  
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
