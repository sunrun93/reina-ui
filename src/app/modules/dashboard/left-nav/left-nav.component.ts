import { LeftNavItem } from './../models/dashboard.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.scss']
})
export class LeftNavComponent implements OnInit {

  @Input() leftNavList: LeftNavItem[];
  constructor() { }

  ngOnInit(): void {
  }

}
