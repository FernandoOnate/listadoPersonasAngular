import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { LoginService } from "../services/LoginService.service";
import { Injectable } from "@angular/core";
@Injectable()
export class LoginGuardian implements CanActivate {
  constructor(
    private loginService: LoginService,
    private router: Router
  ){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.loginService.isAuth()) {
      return true;
    }else{
      this.router.navigate(['login']);
      return false;
    }
  }
}
