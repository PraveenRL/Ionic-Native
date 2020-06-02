import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ActionSheet } from '@ionic-native/action-sheet/ngx';


import { ActionSheetPageRoutingModule } from './action-sheet-routing.module';

import { ActionSheetPage } from './action-sheet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActionSheetPageRoutingModule
  ],
  declarations: [
    ActionSheetPage
  ],
  providers: [
    ActionSheet
  ]
})
export class ActionSheetPageModule { }
