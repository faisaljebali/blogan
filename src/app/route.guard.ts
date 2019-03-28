import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
//import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class RouteGuard implements CanActivate {
  tokenUser = localStorage.getItem('usertoken');
  //userId = jwt_decode(this.tokenUser).data.role;
  constructor(private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.tokenUser) {
      //this.router.navigateByUrl('/singin');
      this.router.navigate(['/dashbord']);
      return false;
    } else {
      return true;
    }
  }

}
