import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';

import { FingerprintAioPageRoutingModule } from './fingerprint-aio-routing.module';

import { FingerprintAioPage } from './fingerprint-aio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FingerprintAioPageRoutingModule
  ],
  declarations: [
    FingerprintAioPage
  ],
  providers: [
    FingerprintAIO
  ]
})
export class FingerprintAioPageModule { }
