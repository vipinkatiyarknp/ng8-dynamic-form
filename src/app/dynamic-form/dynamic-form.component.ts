import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { MustMatch } from './helpers/match-password';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {
  jsonFormDataInput: any;

  @Input('jsonFormData')
  get jsonFormData() {
    return this.jsonFormDataInput;
  }
  set jsonFormData(val) {
    this.jsonFormDataInput = val;
  }

  registerForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.registerForm = this.formBuilder.group({
      userName: ['', Validators.required],
      userEmail: ['', [Validators.required, Validators.email]],
      userPassword: ['', Validators.required],
      userConfirmPassword: ['', Validators.required],
      userMobile: ['', [Validators.required, Validators.maxLength(10)]],
      userAge: ['', Validators.required],
      userDate: ['', Validators.required],
      userGender: ['', Validators.required],
      userSelect: ['', Validators.required],
      userCheckbox: ['', Validators.required]
    }, {
        validator: MustMatch('userPassword', 'userConfirmPassword')
      });
  }

  checkifInputType(controlType) {
    const controlTypes = ['text', 'password', 'number', 'tel', 'email', 'date'];
    return controlTypes.includes(controlType);
  }
  // get f() {
  //   return this.registerForm.controls;
  // }

  onSubmit() {
    console.log('SUBMIT::::');
    this.submitted = true;
    debugger;
    // stop here if form is invalid
    console.log(this.registerForm.controls);
    if (this.registerForm.invalid) {
      return;
    }
    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  }

  onReset() {
    console.log('RESET::::');
    this.submitted = false;
    this.registerForm.reset();
  }

}
