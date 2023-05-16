import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import custom validator to validate that password and confirm password fields match
import { MustMatch } from '../invest/confirmation-pass';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-invest',
  templateUrl: './innovater.component.html',
  styleUrls: ['./innovater.component.css']
})
export class InnovaterComponent {
    title(title: any) {
      throw new Error('Method not implemented.');
    }
    registerForm: FormGroup;
    submitted = false;
    constructor(private formBuilder: FormBuilder,private http:HttpClient,private router: Router) {
      this.registerForm = new FormGroup({

      });
    }
    firstname:string="";
    lastname:string="";
    email:string="";
    password:string="";
    confirmpassword:string="";
    zip:string="";
    country:string="";
    code:string="";
    phone:string="";
    branch:string="";



    ngOnInit() {
      this.registerForm = this.formBuilder.group({
          firstName: ['', [Validators.required, Validators.pattern(/[a-zA-Z]/)]],
          lastName: ['', [Validators.required, Validators.pattern(/[a-zA-Z]/)]],
          email: ['', [Validators.required, Validators.email,this.emailValidator]],
          password: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/)]],
          confirmPassword: ['', Validators.required],
          zip:['',[Validators.minLength(3) ,Validators.pattern(/[0-9]/)]],
          code:['',[Validators.maxLength(4),Validators.pattern(/\+[0-9]/)]],
          phone:['',[Validators.maxLength(20),Validators.minLength(5),Validators.pattern(/[0-9]+(\.[0-9]+)?/)]],
          branch: ['', [Validators.required]],
          country: ['', [Validators.required]],
          acceptTerms: [true, Validators.requiredTrue]
      }, {
          validator: MustMatch('password', 'confirmPassword')
      });
  }
  emailValidator(control: any) {
    const email = control.value;
    const allowedDomains = /@gmail\.com$|@yahoo\.com$|@outlook\.com$|@zoho\.com$|@icloud\.com$|@hotmail\.com$|@.+\.fr$/i;

    if (email && !allowedDomains.test(email)) {
      return { 'invalidDomain': true };
    }
    else {
      return null;
    }

  }

    hidePassword = true;

    togglePasswordVisibility() {
      this.hidePassword = !this.hidePassword;
    }
    get f() { return this.registerForm.controls; }

    onSubmitinnovater() {
        this.submitted = true;

        if (this.registerForm.invalid) {
          alert("error");
      }
        else{

        let innovatorData = {
          "firstname": this.firstname,
          "lastname": this.lastname,
          "email": this.email,
          "password": this.password,
          "confirmpassword": this.confirmpassword,
          "zip": this.zip,
          "country": this.country,
          "code": this.code,
          "phone": this.phone,
          "branch": this.branch
        }
        this.http.post("http://localhost:8086/user/create/innovater",innovatorData).subscribe(()=>
    {

        this.firstname = '';
        this.lastname = '';
        this.email = '';
        this.password = '';
        this.confirmpassword = '';
        this.zip = '';
        this.country = '';
        this.code = '';
        this.phone = '';
        this.branch = '';
       });

       this.router.navigate(['/login']);
      }
    }

}

