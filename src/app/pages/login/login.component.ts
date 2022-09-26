import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Login } from './../../interfaces/login';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:Login = {
    email:"",
    password:""
  }
  errorMsg : string = ""
  constructor(private auth : AuthService, private router : Router, private toastr:ToastrService) { }

  ngOnInit(): void {
  }
  handleLogin(form:NgForm){
    if(form.valid){
      this.auth.login(this.user).subscribe(res=>{
        console.log(res)
        localStorage.setItem('token' , res.data.token)
        if(res.apiStatus) {
          this.toastr.success('Welcome!', 'Logged In!');
          this.auth.loginFlag = false
          this.router.navigateByUrl('')
        }
      },(err)=>{
        console.log(err.error.message)
        this.errorMsg = err.error.message
      })
    }
  }
}
