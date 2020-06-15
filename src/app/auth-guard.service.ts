import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { tap, map } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) {
    }

    canActivate() {
        return true;
    }
}
