import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { FingerprintAioPageModule } from '../fingerprint-aio/fingerprint-aio.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    FingerprintAioPageModule,
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
