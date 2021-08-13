import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularEmojisModule } from 'angular-emojis';
import { HttpClientModule } from '@angular/common/http';


const commonModules = [
  CommonModule,
  AngularEmojisModule,
  HttpClientModule
];

@NgModule({
  declarations: [],
  imports: [
    ...commonModules
  ],
  exports: [
    ...commonModules
  ]
})
export class SharedModule { }
