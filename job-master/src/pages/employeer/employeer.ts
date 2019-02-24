import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Item } from 'ionic-angular';
import {FormBuilder,FormGroup,Validators,AbstractControl} from '@angular/forms';
import { Http } from '@angular/http';
import { AdvanceinfoPage } from '../advanceinfo/advanceinfo';


@IonicPage()
@Component({
  selector: 'page-employeer',
  templateUrl: 'employeer.html',
})
export class EmployeerPage {
  formgroup:FormGroup;
  cname:AbstractControl;
  mail:AbstractControl;
  deg:AbstractControl;
  num:AbstractControl;
  public name :any;
  public degree2 :any;
  public email :any;
  public num2 :any;
  public myInput :any;
  public item :any=[];
  public res :any=[];
  

  constructor(public navCtrl: NavController,public formbuilder :FormBuilder, public navParams: NavParams,private http: Http) {
    this.formgroup=this.formbuilder.group({
      cname:['',Validators.compose([Validators.required,Validators.pattern('[a-zA-Z]*')])],
      deg:['',Validators.compose([Validators.required,Validators.minLength(2)])],
      mail:['',Validators.compose([Validators.required,Validators.pattern('^[A-Z0-9a-z\\._%+-]+@([A-Za-z0-9-]+\\.)+[A-Za-z]{2,4}$')])],
      num:['',Validators.compose([Validators.required,Validators.pattern('[0-9]*'),Validators.minLength(10),Validators.maxLength(10)])],
    });
    this.cname=this.formgroup.controls['cname'];
    this.deg=this.formgroup.controls['deg'];
    this.mail=this.formgroup.controls['mail'];
    this.num=this.formgroup.controls['num'];

  }
  insertdata(){
    
 
     
  this.navCtrl.push(AdvanceinfoPage,{name:this.name,degree2:this.degree2,email:this.email,num2:this.num2});
  }
  
  getdata(){
    
    var i,j;
        this.http.get('http://localhost:3000/getUsers').subscribe(data => {
          this.item=data.json();
    
          for(i=0;i<this.item.length;i++)
          {

          if(this.item[i].Requirements == this.myInput)
          {
            
              this.res.push({
                Company :this.item[i].Company,
                Requirements :this.item[i].Requirements,
                Email :this.item[i].Email,
              })
          }
        
        }
      });
      }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmployeerPage');
  }

}
