import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmployeerPage } from './employeer';

@NgModule({
  declarations: [
    EmployeerPage,
  ],
  imports: [
    IonicPageModule.forChild(EmployeerPage),
  ],
})
export class EmployeerPageModule {}
