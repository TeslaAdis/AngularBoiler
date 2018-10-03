import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../authentication/user.service';


@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private userService: UserService, private router: Router) {
    }
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this.userService.isLogged) { return true; }
        this.router.navigate(['/']);
        return false;
    }
}
