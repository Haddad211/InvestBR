
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServiceComponent } from './service/service.component';
import { LoginComponent } from './login/login.component';
import { InvestComponent } from './invest/invest.component';
import { InnovaterComponent } from './innovater/innovater.component';
import { HellpComponent } from './hellp/hellp.component';
import { ShowacceptedComponent } from './Admin/showaccepted/showaccepted.component';
import { ShowallComponent } from './Admin/showall/showall.component';
import { GetstartedComponent } from './getstarted/getstarted.component';
import { DashbordComponent } from './Admin/dashbord/dashbord.component';
import { AddadminComponent } from './Admin/addadmin/addadmin.component';
import { DashboardInnovatorComponent } from './Innovator/dashboard-innovator/dashboard-innovator.component';
import { AddpostComponent } from './Innovator/addpost/addpost.component';
import { DashboardInvestorComponent } from './Investor/dashboard-investor/dashboard-investor.component';
import { ShowpostsComponent } from './Investor/showposts/showposts.component';
import { AuthGuard } from './auth.guard';
import { ProfileInvestorComponent } from './Investor/profile-investor/profile-investor.component';
import { ProfileInnovatorComponent } from './Innovator/profile-innovator/profile-innovator.component';
import { ContactInnovatorComponent } from './Innovator/contact-innovator/contact-innovator.component';
import { ContactInvestorComponent } from './Investor/contact-investor/contact-investor.component';
import { ChatInvestorComponent } from './Investor/chat-investor/chat-investor.component';
import { ChatInnovatorComponent } from './Innovator/chat-innovator/chat-innovator.component';
import { NotificationInnovatorComponent } from './Innovator/notification-innovator/notification-innovator.component';
import { NotificationInvestorComponent } from './Investor/notification-investor/notification-investor.component';

const routes: Routes = [
  {path: "about" ,component:AboutComponent},
  {path: "service",component:ServiceComponent},
  {path: "contact",component:ContactComponent},
  {path:"home",component:HomeComponent },
  {path:"login",component:LoginComponent},
  {path:"getstart",component:GetstartedComponent},
  {path:"loginpor",component:InvestComponent},
  {path:"loginino",component:InnovaterComponent},
  {path:"help",component:HellpComponent},
  {path:"showaccepted",component:ShowacceptedComponent, canActivate: [AuthGuard]},
  {path:"showall",component:ShowallComponent, canActivate: [AuthGuard]  },
  {path:"admin",component:DashbordComponent, canActivate: [AuthGuard] },
  {path:"addadmin",component:AddadminComponent, canActivate: [AuthGuard]},
  {path:"innovator",component:DashboardInnovatorComponent, canActivate: [AuthGuard]},
  {path:"addpost",component:AddpostComponent, canActivate: [AuthGuard]},
  {path:"investor",component:DashboardInvestorComponent, canActivate: [AuthGuard]},
  {path:"showposts",component:ShowpostsComponent, canActivate: [AuthGuard]},
  {path:"investor-profile",component:ProfileInvestorComponent, canActivate: [AuthGuard]},
  {path:"innovator-profile",component:ProfileInnovatorComponent, canActivate: [AuthGuard]},
  {path:"innovator-contact",component:ContactInnovatorComponent,canActivate:[AuthGuard]},
  {path:"investor-contact",component:ContactInvestorComponent,canActivate:[AuthGuard]},
  {path:"sendmessageinvestor",component:ChatInvestorComponent,canActivate:[AuthGuard]},
  {path:"sendmessageinnovator",component:ChatInnovatorComponent,canActivate:[AuthGuard]},
  {path:"notification-innovator",component:NotificationInnovatorComponent,canActivate:[AuthGuard]},
  {path:"notification-investor",component:NotificationInvestorComponent,canActivate:[AuthGuard]},
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
