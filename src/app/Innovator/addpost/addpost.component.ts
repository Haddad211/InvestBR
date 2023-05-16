import { Component } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css']
})
export class AddpostComponent {

  registerForm: FormGroup;
  submitted = false;
branch: string="";
type:string="";
budget: string="";
title:string="";
description:string="";
notif:string=""
nbnotif:number=0
  constructor(private http: HttpClient, private router: Router,private formBuilder: FormBuilder) {
    this.registerForm = new FormGroup({
    });


  }
  ngOnInit() {
    this.notification()
    this.toggle();
    this.registerForm = this.formBuilder.group({
      branch: ['', [Validators.required]],
      type: ['', [Validators.required]],
      budget: ['', [Validators.required]],
      title: ['', [Validators.required, Validators.maxLength(50)]],
      description: ['', [Validators.required, Validators.maxLength(1000)]],
    })

}
restnotification(){
  localStorage.setItem('notif',"0");
  this.ngOnInit()
  this.toggle()

}

notification(){
  const notif = localStorage.getItem('notif');
  if (notif !== null) {
    this.notif = notif;
    this.nbnotif=parseInt(this.notif,10)
  }

}
get f() { return this.registerForm.controls; }
onSubmit() {
  this.submitted = true;

  if (this.registerForm.invalid) {
    alert("error")
  }
  else {
    let postData = {
      "title": this.title,
      "description": this.description,
      "budget": this.budget,
      "type": this.type,
      "branch": this.branch
    };

    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      })
    };
    const userId = localStorage.getItem('userId');
    this.http.post<any>(`http://localhost:8086/innovator/post/${userId}`, postData, httpOptions).subscribe(data => {
      console.log("post Added ");
      this.title= '';
      this.description= '';
      this.type= '';
      this.branch= '';
      this.budget= '';

    }, error => {
      console.log(error);
    });
  }
}


  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
  toggle(){
    const toggle = document.querySelector('.toggle') as HTMLElement;
    const navigation = document.querySelector('.navigation') as HTMLElement;
    const main = document.querySelector('.main') as HTMLElement;
    toggle.addEventListener('click', () => {
      navigation.classList.toggle('active');
      main.classList.toggle('active');

    });
  }
}

