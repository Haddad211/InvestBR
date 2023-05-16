import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addadmin',
  templateUrl: './addadmin.component.html',
  styleUrls: ['./addadmin.component.css']
})
export class AddadminComponent {
  constructor(private http:HttpClient,private router:Router) {
  }
  email:string="";
  password:string="";
  lastname:string="";
  firstname:string="";


  Addadmin(){
    let AdminD ={
      "firstname": this.firstname,
      "lastname": this.lastname,
      "email": this.email,
      "password": this.password,
    }

    const httpOptions = {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    };

    this.http.post("http://localhost:8086/Admin/create/Admin",AdminD, httpOptions).subscribe(()=>
    {
        this.firstname = '';
        this.lastname = '';
        this.email = '';
        this.password = '';

       });
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
