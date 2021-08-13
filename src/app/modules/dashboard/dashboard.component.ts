import { Observable } from 'rxjs';
import { LeftNavItem } from './models/dashboard.interface';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  leftNavList$: Observable<LeftNavItem[]>;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchLeftNavList();
  }

  fetchLeftNavList(){
    this.leftNavList$ = this.http.get('../../../../assets/datas/dashboard/left-nav.json') as Observable<LeftNavItem[]>;
  }

}
