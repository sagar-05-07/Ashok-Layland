import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AppSettings } from 'src/app/app.settings';
import { emailValidator } from 'src/app/theme/utils/app-validators';
import { users } from '../helpers/data';
import { UserService } from './user.service';
import { MenuService } from 'src/app/theme/components/menu/menu.service';
import { Settings } from 'src/app/app.settings.model';
// import { Settings } from 'http2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;
  public settings: Settings;
  passwordType: string;
  public TypeString: string = "password";
  public isPassword: boolean = true;
  public showpass: boolean = true;

  constructor(
    public appSettings: AppSettings,
    public fb: FormBuilder,
    public router: Router) {
    this.settings = this.appSettings.settings;
    this.form = this.fb.group({
      'email': [null, Validators.compose([Validators.required, emailValidator])],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(6)])]
    });
  }

  ngOnInit(): void {

  }

  public onSubmit() {
    localStorage.setItem('loginUser', this.form.value.email)

    if (this.form.value.email == "admin@optionmatrix.com" && this.form.value.password == "admin@123") {
      this.router.navigate(['app/dashboard']);
    }
    else if (this.form.value.email == "supplier@optionmatrix.com" && this.form.value.password == "supplier@123") {
      this.router.navigate(['app/supplier-process']);
    } else
      alert("Wrong E-mail Id or Password");
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.settings.loadingSpinner = false;
    });
  }
  public ChangetextType(isPassword: any) {
    if (isPassword) {
      this.TypeString = "password"
      this.showpass = !this.showpass;
    } else {
      this.TypeString = "text"
      this.showpass = !this.showpass;
    }
  }

  public togglePassword() {
    this.passwordType = this.passwordType == 'text' ? 'password' : 'text';
  }
}