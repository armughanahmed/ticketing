import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  currentUser: any;
  constructor(private _activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.getCurrentUser();
  }

  getCurrentUser() {
    this._activatedRoute.data.subscribe((res) => {
      this.currentUser = res['currentUser'].currentUser;
      console.log(this.currentUser);
    });
  }
}
