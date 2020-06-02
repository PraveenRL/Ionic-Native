import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FingerprintAioPage } from '../fingerprint-aio/fingerprint-aio.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private modalController: ModalController
  ) {
    setTimeout(() => {
      this.lockApp();
    }, 2000)
  }

  private async lockApp() {
    const modal = await this.modalController.create({
      component: FingerprintAioPage,
      backdropDismiss: false,
      componentProps: {
        isModal: true
      }
    })
    await modal.present();
  }

}
