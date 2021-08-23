import { LeftNavItem } from './../models/dashboard.interface';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.scss']
})
export class LeftNavComponent implements OnInit {

  @Input() leftNavList: LeftNavItem[];
  @Output() onNavSelect = new EventEmitter<LeftNavItem>();
  constructor() { }

  ngOnInit(): void {
  }

}
