import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth-service.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email:string="";
  password:string="";
  errorMessage : string = '';

  constructor(private authService: AuthService, private router:Router,private navbar:AppComponent) {}

  Singup() {
    this.router.navigate(['/getstart']);
  }

  logincheck() {
    this.authService.login(this.email, this.password).subscribe(
      success => {
        if (success) {
          this.email = '';
          this.password = '';
          this.errorMessage = '';
          this.navbar.showNavbar = false;
        } else {
          this.errorMessage = "Login failed";
        }
      },
      error => {
        this.errorMessage = error.error.message;
      }
    );
  }
}
