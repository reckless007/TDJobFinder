import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormBuilder,FormGroup,Validators,AbstractControl} from '@angular/forms';
import { Http } from '@angular/http';
import { EmployeerPage } from '../employeer/employeer';



@IonicPage()
@Component({
  selector: 'page-advanceinfo',
  templateUrl: 'advanceinfo.html',
})
export class AdvanceinfoPage {
  formgroup:FormGroup;
  eage:AbstractControl;
  mail:AbstractControl;
  deg:AbstractControl;
  deg1:AbstractControl;
  num:AbstractControl;
  Status:AbstractControl;
  skill:AbstractControl;
  col:AbstractControl;
  cgpa:AbstractControl;

  public age :any;
  public degree :any;
  public pg :any;
  public num1 :any;
  public status1 :any;
  public skill1 :any;
  public col1 :any;
  public cgpa1 :any;
  public name :any;
  public quali :any;
  public email :any;
  public contact :any;
  

  constructor(public navCtrl: NavController, public navParams: NavParams,public formbuilder :FormBuilder,private http: Http) {
    this.name=this.navParams.get("name");
    this.quali=this.navParams.get("degree2");
    this.email=this.navParams.get("email");
    this.contact=this.navParams.get("num2");



    this.formgroup=this.formbuilder.group({
      eage:['',Validators.compose([Validators.required,Validators.pattern('[0-9]*')])],
      deg:['',Validators.compose([Validators.required,Validators.minLength(2)])],
      deg1:['',Validators.compose([Validators.required,Validators.minLength(2)])],
      num:['',Validators.compose([Validators.required,Validators.pattern('[0-9]*')])],
      Status:['',Validators.compose([Validators.required,Validators.minLength(2)])],
      skill:['',Validators.compose([Validators.required,Validators.minLength(2)])],
      col:['',Validators.compose([Validators.required,Validators.minLength(2)])],
      cgpa:['',Validators.compose([Validators.required,Validators.pattern('[0-9]*')])],

    });
    this.eage=this.formgroup.controls['eage'];
    this.deg=this.formgroup.controls['deg'];
    this.deg1=this.formgroup.controls['deg1'];
    this.num=this.formgroup.controls['num'];
    this.Status=this.formgroup.controls['Status'];
    this.skill=this.formgroup.controls['skill'];
    this.col=this.formgroup.controls['col'];
    this.cgpa=this.formgroup.controls['cgpa'];
  }
  insertdata(){
    let Data = {
      name:this.name,
      quali:this.quali,
      email:this.email,
      contact:this.contact,
      age:this.age,
      degree:this.degree,
      pg:this.pg,
      num1:this.num1, 
      status1:this.status1,
      skill1:this.skill1,
      col1:this.col1,
      cgpa1:this.cgpa1
    
     }
     this.http.post('http://localhost:3000/add2', Data).subscribe(response => {
      console.log('POST Response:', response);
  });
  alert("Your Form Is Succesfully Submitted")

  this.navCtrl.push(EmployeerPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdvanceinfoPage');
  }

}
