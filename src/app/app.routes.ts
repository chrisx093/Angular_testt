import { Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { EditprofileComponent } from './editprofile/editprofile.component';

export const routes: Routes = [
    {path: '', component: LandingpageComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'signin', component: SigninComponent},
    

    {path: 'dashboard',children:[
        {path:'', component: DashboardComponent},
        {path:'profile', component: ProfileComponent},
        {path:'editprofile', component: EditprofileComponent},
]}
]
