import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CompanyPage } from '../company/company';
import { EmployeerPage } from '../employeer/employeer';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
openemployeerpage(){
this.navCtrl.push(EmployeerPage);
}
opencompanypage(){
  this.navCtrl.push(CompanyPage);
}
}
