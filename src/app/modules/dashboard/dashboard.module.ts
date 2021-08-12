import { Router, Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { LeftNavComponent } from './left-nav/left-nav.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  }
]

@NgModule({
  declarations: [DashboardComponent, LeftNavComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})

export class DashboardModule { }
