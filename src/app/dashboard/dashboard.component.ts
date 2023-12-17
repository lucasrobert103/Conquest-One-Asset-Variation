import { Component, OnInit } from '@angular/core';
import { FinanceService } from "../core/services/finance.service";
import { IVariance } from "../core/models/variance.model";
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  TIMER: number = 30 * 1000;
  variances: IVariance[] = [];
  ativo: string = 'PETR4.SA';
  LIMIT_TO_SHOW = 30;
  updateAutomatically: boolean = true;
  private updateSubscription: Subscription;

  constructor(private financeService: FinanceService) {
    this.updateSubscription = interval(this.TIMER).subscribe(
      (val) => {
        this.getVariances()
      });
  }

  ngOnInit(): void {
    this.getVariances();
  }

  onChange = () => {
    if (!this.updateAutomatically) {
      this.updateSubscription.unsubscribe();
    } else {
      this.getVariances();
      this.updateSubscription = interval(this.TIMER).subscribe(
        (val) => {
          this.getVariances()
        });
    }
  }

  getVariances(): void {
    this.financeService
      .getAll(this.ativo, this.LIMIT_TO_SHOW)
      .subscribe((items) => {
        this.variances = items;
      });
  }

  ngOnDestroy(): void {
    this.updateSubscription.unsubscribe(); 
  }
}
