import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  formModal: any = {};
  form_div: Boolean = true;
  url: any;

  constructor(public sanitizer: DomSanitizer) {
    this.formModal = {
      'order_id': '1',
      'amount': '1',
      'email': 'kkardaji@gmail.com'
    };
  }

  submitForm() {
    console.log(this.formModal);
    this.form_div = false;
    const unsantUrl = 'http://www.dailywale.com/paytm/PaytmKit/TxnTest.php?amount=' + this.formModal.amount + '&email=' + this.formModal.email + '&order_id=' + this.formModal.order_id;
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(unsantUrl);
  }

  startLoader(evt) {
    console.log(evt);
  }
}
