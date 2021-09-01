import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-group-label-type',
  template: `<div class='group-label'>{{to.label}}</div>`,
  styles: [
    `.group-label {
      font-size: 20px;
      padding-bottom: 10px;
    }`
  ]
})
export class GroupLabelTypeComponent extends FieldType {}
