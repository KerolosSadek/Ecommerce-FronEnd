import { AuthService } from './../../services/auth.service';
import { User } from './../../interfaces/user';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userData: User = {
    email:"",
    password:""
  }
  constructor(private auth : AuthService, private router : Router) { }

  ngOnInit(): void {
  }

  handelRegister(form:NgForm){
    console.log(form)
    console.log(this.userData)
    if(form.valid){
      this.auth.register(this.userData).subscribe(res=>{
        console.log(res)
        this.router.navigateByUrl("login")
      },(err)=>{
        console.log(err)
      })
    }
  }
}
