import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

/**
 * Generated class for the GetAdvanceInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-get-advance-info',
  templateUrl: 'get-advance-info.html',
})
export class GetAdvanceInfoPage {
  public item1 :any=[];
  public input :any;
  public resss :any=[];

  constructor(public navCtrl: NavController, public navParams: NavParams,private http: Http) {
    this.input=this.navParams.get("myInput");

  }
display(){
  this.http.get('http://localhost:3000/getUsera').subscribe(data => {
    this.item1=data.json();
    console.log(this.resss);


    for(let i=0;i<this.item1.length;i++)
    {
    if(this.item1[i].Degree == this.input)
    {
      console.log(this.item1[i]);
        this.resss.push({
          Name :this.item1[i].Name,
          Quali :this.item1[i].Degree,
          Mail :this.item1[i].Email,
          Contact :this.item1[i].Contact,
          age :this.item1[i].age,
          college :this.item1[i].college,
          code :this.item1[i].code,
          project :this.item1[i].project,
          cgpa :this.item1[i].cgpa,
          exp :this.item1[i].exp,
          status :this.item1[i].status,
          skill :this.item1[i].skill

        })
      }  
  }
})
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad GetAdvanceInfoPage');
  }
}
  
