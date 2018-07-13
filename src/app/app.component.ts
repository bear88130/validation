import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isCheckedEmail: boolean;
  isCheckedPassword: boolean;
  isCheckedRePassword: boolean;

  ngOnInit(): void {
    // alert(/^(\w+)@([\w.]+)(\.|-)[\w.]/.test('bear@tadcon'));


  }

  checkEmail(email: string) {
    const reEmail = new RegExp(/^(\w+)@([\w.]+)(\.|-)[\w.]/);
    this.isCheckedEmail = reEmail.test(email) ? false : true ;
  }

  checkPassword(password: string) {
  const rePassword = new RegExp(/^(\w*8)/);
    this.isCheckedPassword = rePassword.test(password) ? false : true ;
  }

  checkRePassword(password: HTMLInputElement , rePassword: string) {
    this.isCheckedRePassword = (password.value === rePassword) ? false : true;
  }

  checkProcess1() {
    if (this.isCheckedEmail === false
      && this.isCheckedPassword === false
      && this.isCheckedRePassword === false) {
        alert('通過');
    } else {
      alert('失敗');
    }
  }
}
