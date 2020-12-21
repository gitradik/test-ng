import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { MockDataService } from '../services/mock-data.service';

@Injectable({
  providedIn: 'root',
})
export class DashboardGuard implements CanActivate {
  constructor(private router: Router, private mockService: MockDataService) {}

  canActivate() {
    // temp solution
    const canActive: boolean = this.mockService.isMockLogin;
    if (canActive) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
}
