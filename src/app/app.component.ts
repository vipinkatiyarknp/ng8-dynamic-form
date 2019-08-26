import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'dynamic-form-generator';
  formName = 'Dynamic Form Generator';
  formJson: FormTypes[];
  constructor(private _http: HttpClient) {

  }

  ngOnInit() {
    this.getFormInfo();
  }
  getFormInfo() {
    this._http.get('assets/formdata.json').subscribe((res: any) => {
      this.formJson = res;
    }, error => {
      console.log(error);

    });
  }
}

export interface FormTypes {
  label?: string;
  tag: string;
  value?: string;
  type?: string;
  placeholder?: string;
  values?: any;
  name?: string;
  inputStyles?: any;
  labelStyles?: any;
}

