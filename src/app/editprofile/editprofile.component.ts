import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-editprofile',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './editprofile.component.html',
  styleUrl: './editprofile.component.css'
})
export class EditprofileComponent {


  users: Array<any> = [];
  user: any = {};
  userIndex: number = -1;
  public currentUser: any = null; 


  constructor( public router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    const userData = localStorage.getItem('userData');
    this.users = userData ? JSON.parse(userData) : [];

    
    this.userIndex = +this.route.snapshot.paramMap.get('index')!;
    this.user = { ...this.users[this.userIndex] }; 


    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      this.currentUser = JSON.parse(storedUser);
      
    }
  }





  onSave() {
    if (this.userIndex !== -1) {
      // Update the user in the `users` array
      this.users[this.userIndex] = { ...this.user };

      // Update the `currentUser`
      if (this.currentUser && this.currentUser.email === this.user.email) {
        this.currentUser = { ...this.user };
        localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
      }

      // Save the updated `users` array to localStorage
      localStorage.setItem('userData', JSON.stringify(this.users));

      // Navigate back to the dashboard
      this.router.navigate(['/dashboard']);
    }
  }

  // onSave() {
  //   if (this.userIndex !== -1) {
  //     this.users[this.userIndex] = { ...this.user }; 
  //     localStorage.setItem('userData', JSON.stringify(this.users)); 
  //     this.router.navigate(['/dashboard']); 
  //   }
  // }

  onCancel() {
    this.router.navigate(['/dashboard']); 
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

