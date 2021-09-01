import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularEmojisModule } from 'angular-emojis';
import { HttpClientModule } from '@angular/common/http';
import { WaterFallComponent } from './water-fall/water-fall.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';



const commonModules = [
  CommonModule,
  AngularEmojisModule,
  HttpClientModule
];

const bootstrapModules = [
  NgbModule
];

@NgModule({
  declarations: [
    WaterFallComponent
  ],
  imports: [
    ...commonModules,
    ...bootstrapModules
  ],
  exports: [
    ...commonModules,
    ...bootstrapModules,
    WaterFallComponent
  ]
})
export class SharedModule { }
