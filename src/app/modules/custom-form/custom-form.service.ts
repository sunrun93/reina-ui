import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CustomFormService {

  private _formList: any[] = [];

  constructor(private http: HttpClient) {
  }

   getDefaultJson(): Observable<any>{
    return this.http.get('../../../assets/data/custom-json/form_1.json');
  }

  getUserForm(): Observable<any>{
    return this.http.get('../../../assets/data/custom-json/user-form.json');
  }

  saveNewForm(formFields){
    this._formList.push(formFields);
  }

  getFormList(){
    return this._formList;
  }
}
