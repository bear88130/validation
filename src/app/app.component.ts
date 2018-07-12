import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit(): void {
    // alert(/^(\w+)@([\w.]+)(\.|-)[\w.]/.test('bear@tadcon'));


  }

  checkEmail(email: string) {
    const reEmail = new RegExp(/^(\w+)@([\w.]+)(\.|-)[\w.]/);
    const a = email;
    this.title = a;
    alert(reEmail.test(email));
  }

  comfirmAccount() {
    const reEmail = new RegExp('^(\w+)@([\w.]+)(\.|-)[\w.]');
    alert(reEmail.test('123'));
  }

}
