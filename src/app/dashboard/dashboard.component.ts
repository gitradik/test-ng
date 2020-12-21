import { AfterViewInit, Component } from '@angular/core';
import { AlertService, AlertType } from '@app/core/services/alert.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements AfterViewInit {
  alert: AlertType | null = null;

  constructor(public alertService: AlertService) {}

  ngAfterViewInit(): void {
    this.alertService.alert.subscribe(alert => (this.alert = alert));
  }

  alertClose(): void {
    this.alertService.deleteMessage();
  }
}
