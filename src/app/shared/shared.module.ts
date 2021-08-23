import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularEmojisModule } from 'angular-emojis';
import { HttpClientModule } from '@angular/common/http';
import { WaterFallComponent } from './water-fall/water-fall.component';


const commonModules = [
  CommonModule,
  AngularEmojisModule,
  HttpClientModule
];

@NgModule({
  declarations: [
    WaterFallComponent
  ],
  imports: [
    ...commonModules
  ],
  exports: [
    ...commonModules,
    WaterFallComponent
  ]
})
export class SharedModule { }
