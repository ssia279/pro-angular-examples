import { Injectable } from '@angular/core';
import { StoreComponent } from './store-component/store-component';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';

@Injectable()
export class StoreFirstGuard {
  private firstNavigation = true;

  constructor(private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.firstNavigation) {
      this.firstNavigation = false;
      if (route.component != StoreComponent) {
        this.router.navigateByUrl("/").then();
        return false;
      }
    }
    return true;
  }

}
