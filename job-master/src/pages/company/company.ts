import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormBuilder,FormGroup,Validators,AbstractControl} from '@angular/forms';
import { Http } from '@angular/http';
import { GetAdvanceInfoPage } from '../get-advance-info/get-advance-info';



@IonicPage()
@Component({
  selector: 'page-company',
  templateUrl: 'company.html',
})
export class CompanyPage {
  formgroup:FormGroup;
  cname:AbstractControl;
  mail:AbstractControl;
  deg:AbstractControl;
 
  public name1 :any;
  public degree1 :any;
  public email1 :any;
  public myInput :any;
  public item :any=[];
  public res :any=[];
  

  constructor(public navCtrl: NavController,public formbuilder :FormBuilder, public navParams: NavParams,private http: Http) {

    this.formgroup=this.formbuilder.group({
      cname:['',Validators.compose([Validators.required,Validators.pattern('[a-zA-Z]*')])],
      deg:['',Validators.compose([Validators.required,Validators.minLength(2)])],
      mail:['',Validators.compose([Validators.required,Validators.pattern('^[A-Z0-9a-z\\._%+-]+@([A-Za-z0-9-]+\\.)+[A-Za-z]{2,4}$')])],
     
    });
    this.cname=this.formgroup.controls['cname'];
    this.deg=this.formgroup.controls['deg'];
    this.mail=this.formgroup.controls['mail'];
  }
  insertdata(){
    let Data = {
      name1:this.name1,
      degree1:this.degree1,
      email1:this.email1,
     }
     this.http.post('http://localhost:3000/adds', Data).subscribe(response => {
      console.log('POST Response:', response);
  });
  }

      getdata(){  
            this.http.get('http://localhost:3000/getUsera').subscribe(data => {
              this.item=data.json();
              console.log(this.item);
        
              for(let i=0;i<this.item.length;i++)
              {
              if(this.item[i].Degree == this.myInput)
              {
                console.log(this.item[i]);
                  this.res.push({
                    Name :this.item[i].Name,
                    Quali :this.item[i].Degree,
                    Mail :this.item[i].Email,
                    Contact :this.item[i].Contact
        
                  })
                }  
            }
});
       }


          push(){
            this.navCtrl.push(GetAdvanceInfoPage,{myInput:this.myInput,res:this.res})

          }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CompanyPage');
  }

}
