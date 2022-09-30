import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { GlobalService } from '../services/global.service';

@Injectable({
  providedIn: 'root'
})
export class CanActivateGuard implements CanActivate {
  constructor(private router:Router , private global : GlobalService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
    const token = localStorage.getItem('token')
    if (token) {
      this.global.loginFlag = true;
      this.global.authMe().subscribe(res => {
        this.global.user = res.data
      }, e => {console.log(e)})
      return true
    }
    return false;
  }
}
