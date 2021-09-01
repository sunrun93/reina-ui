import { CustomFormService } from './../custom-form.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.scss']
})
export class FormListComponent implements OnInit {
  formList: any[] = [];
  selectedForm: any;
  form: FormGroup = new FormGroup({});
  model = {};
  constructor(private service: CustomFormService) { }

  ngOnInit(): void {
    this.getFormList();
  }

  getFormList() {
    this.formList = this.service.getFormList();
    if (this.formList?.length > 0) {
      this.selectedForm = this.formList[0];

    }
  }

}
