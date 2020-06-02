import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FingerprintAioPage } from './fingerprint-aio.page';

const routes: Routes = [
  {
    path: '',
    component: FingerprintAioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FingerprintAioPageRoutingModule {}
