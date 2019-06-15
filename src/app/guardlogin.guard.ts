import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuardloginGuard implements CanActivate {
  tokenUser = localStorage.getItem('usertoken');
  constructor(private router: Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.tokenUser) {
        //this.router.navigateByUrl('/singin');
        return true;
      } else {
        this.router.navigate(['/']);
        return false;
      }

      return true;
  }

}
