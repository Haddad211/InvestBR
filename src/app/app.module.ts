import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { LoginComponent } from './login/login.component';
import { GetstartedComponent } from './getstarted/getstarted.component';
import { InvestComponent } from './invest/invest.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { InnovaterComponent } from './innovater/innovater.component';
import { HttpClientModule } from '@angular/common/http';
import { HellpComponent } from './hellp/hellp.component';
import { ShowacceptedComponent } from './Admin/showaccepted/showaccepted.component';
import { ShowallComponent } from './Admin/showall/showall.component';
import { SearchadminComponent } from './Admin/searchadmin/searchadmin.component';
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




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    ServiceComponent,
    LoginComponent,
    GetstartedComponent,
    InvestComponent,
    InnovaterComponent,
    HellpComponent,
    SearchadminComponent ,
    ShowacceptedComponent,
    ShowallComponent,
    DashbordComponent,
    AddadminComponent,
    DashboardInnovatorComponent,
    AddpostComponent,
    DashboardInvestorComponent,
    ShowpostsComponent,
    ProfileInvestorComponent,
    ProfileInnovatorComponent,
    ContactInnovatorComponent,
    ContactInvestorComponent,
    ChatInvestorComponent,
    ChatInnovatorComponent,
    NotificationInnovatorComponent,
    NotificationInvestorComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
