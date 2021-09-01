import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'form-generator',
  templateUrl: './form-generator.component.html',
  styleUrls: ['./form-generator.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FormGeneratorComponent implements OnInit {

  @Input() fields = [];
  @Input() form: FormGroup = new FormGroup({});
  @Input() model ={};
  constructor() { }

  ngOnInit(): void {
  }

}
