import { CustomFormService } from './custom-form.service';
import { BehaviorSubject } from 'rxjs';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { JsonEditorOptions } from 'ang-jsoneditor';
import { FormGroup } from '@angular/forms';
import { FormlyJsonschema } from '@ngx-formly/core/json-schema';
import { tap, debounceTime } from 'rxjs/operators';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';


@Component({
  selector: 'custom-form',
  templateUrl: './custom-form.component.html',
  styleUrls: ['./custom-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class CustomFormComponent implements OnInit {

  public editorOptions: JsonEditorOptions;
  public data = '';
  jsonChange$ = new BehaviorSubject(null);
  form = new FormGroup({});
  fields = null;
  model = '';
  formName= '';

  constructor(private service: CustomFormService,
    private router: Router, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.editorOptions = new JsonEditorOptions()
    this.editorOptions.mode = 'code';
    this.onFormChanges();
  }

  onFormChanges(){
    this.jsonChange$.pipe(debounceTime(500)).subscribe(
      data => {
        if(data) {
          this.fields = this.generateFormData(data)
        }
      }
    );
  }

  getData(){
    this.service.getUserForm().subscribe(
      data => this.fields = this.generateFormData(data)
    );
  }

  private generateFormData(jsonData){
    const formFields = [];
    const keys = Object.keys(jsonData);
    keys.forEach(key => {
      const data = jsonData[key];
      if (data.fields){
          const subKeys = Object.keys(data.fields);
          const fieldGroup = [];
          if(data.title){
            fieldGroup.push({
              key: "label",
              type: "label",
              templateOptions: {
                label: data.title
              }
            });
          }
          subKeys.forEach(subKey => {
            const subData = data.fields[subKey];
            const field = this.buildFormField(subKey, subData);
            fieldGroup.push(field);
          })

        formFields.push({
          fieldGroupClassName: 'row sub-group',
          fieldGroup: fieldGroup

        });
      } else {
        const field = this.buildFormField(key, data);
        formFields.push(field);
      }
    })
    return formFields;
  }



  private buildFormField(key, fieldConfig){
    const field: FormlyFieldConfig = {
      key,
      type: fieldConfig.type ? fieldConfig.type: 'string',
      templateOptions: {
        label: fieldConfig.title
      },
      className: this.getClassName(fieldConfig.width)
    };
    if (fieldConfig.options){
      field.templateOptions.options = fieldConfig.options.map((opt: string) => { return { 'label': opt, 'value': opt } });
    }
    if (fieldConfig.required){
      field.templateOptions.required = true;
    }
    if(fieldConfig.readonly){
      field.templateOptions.readonly = true;
    }

    return field;
  }

  private getClassName(customWidth: string){
    switch (customWidth){
      case '25%':
        return 'col-3';
      case '50%':
        return 'col-6';
      case '75%':
        return 'col-9';
      case '100%':
          return 'col-12';
      default:
        return 'col-6';
    }
  }

  reset(){
    this.fields = null;
    this.data = null;
  }

  save (content){
    this.fields;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      const formField = {
        formName: this.formName,
        fields: this.fields
      };
      this.service.saveNewForm(formField);
      this.router.navigateByUrl('/custom-form/form-list');
    }, (reason) => {
      this.formName = '';
    });
  }

}
