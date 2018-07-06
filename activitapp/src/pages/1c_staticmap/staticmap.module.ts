import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StaticmapPage } from './staticmap';

@NgModule({
  declarations: [
    StaticmapPage,
  ],
  imports: [
    IonicPageModule.forChild(StaticmapPage),
  ],
})
export class StaticmapPageModule {}
