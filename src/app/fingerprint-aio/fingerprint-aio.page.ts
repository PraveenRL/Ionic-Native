import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-fingerprint-aio',
  templateUrl: './fingerprint-aio.page.html',
  styleUrls: ['./fingerprint-aio.page.scss'],
})
export class FingerprintAioPage implements OnInit {
  @Input() isModal: boolean;

  constructor(
    private faio: FingerprintAIO,
    private router: Router,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    console.log(`Modal ${this.isModal}`);
  }

  public onClickLocked() {
    this.faio.isAvailable().then(() => {
      this.faio.show({
        title: 'Fingerprint-Demo', //Android: Used for encryption. iOS: used for dialogue if no `localizedReason` is given.
        description: 'password', //Necessary for Android encrpytion of keys. Use random secret key.
        disableBackup: true,
      }).then(() => {
        if (this.isModal) {
          this.modalController.dismiss();
        } else {
          this.router.navigate(['/home']);
        }
      }).catch(error => {
        window.alert(error)
      })
    })

  }

}
