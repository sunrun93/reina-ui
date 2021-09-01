import { GroupLabelTypeComponent } from './custom-type/group-label.type';
import { MultiSchemaTypeComponent } from './custom-type/multi-schema.type';
import { NullTypeComponent } from './custom-type/null.type';
import { ArrayTypeComponent } from './custom-type/array.type';
import { CustomFormService } from './custom-form.service';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FormlyModule } from '@ngx-formly/core';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomFormComponent } from './custom-form.component';
import { NgJsonEditorModule } from 'ang-jsoneditor'
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ObjectTypeComponent } from './custom-type/object.type';
import { FormListComponent } from './form-list/form-list.component';
import { FormGeneratorComponent } from './form-generator/form-generator.component';

const routes: Routes = [
  {
    path: '',
    component: CustomFormComponent
  },
  {
    path: 'form-list',
    component: FormListComponent
  }
]

@NgModule({
  declarations: [
    CustomFormComponent,
    ArrayTypeComponent,
    ObjectTypeComponent,
    MultiSchemaTypeComponent,
    NullTypeComponent,
    FormListComponent,
    FormGeneratorComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    NgJsonEditorModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormlyModule.forRoot({
      types: [
        { name: 'string', extends: 'input' },
        {
          name: 'number',
          extends: 'input',
          defaultOptions: {
            templateOptions: {
              type: 'number',
            },
          },
        },
        {
          name: 'integer',
          extends: 'input',
          defaultOptions: {
            templateOptions: {
              type: 'number',
            },
          },
        },
        { name: 'boolean', extends: 'checkbox' },
        { name: 'enum', extends: 'select' },
        { name: 'null', component: NullTypeComponent, wrappers: ['form-field'] },
        { name: 'array', component: ArrayTypeComponent },
        { name: 'object', component: ObjectTypeComponent },
        { name: 'multischema', component: MultiSchemaTypeComponent },
        { name: 'label', component: GroupLabelTypeComponent}
      ]
    }),
    FormsModule,
    FormlyBootstrapModule
  ],
  providers: [
    CustomFormService
  ]
})
export class CustomFormModule { }
