import { HesapDetayDto } from './../../models/HesapDetayDto';
import { Hesap } from './../../models/hesap';
import { HesapService } from './../../services/hesap.service';
import { EkNoDto } from './../../models/EkNoDto';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-hesap',
  templateUrl: './hesap.component.html',
  styleUrls: ['./hesap.component.css']
})
export class HesapComponent implements OnInit {

  tckn :string= '';
  data:any;
  eknolar:EkNoDto[]=[];
  ekNo:number=0;
  detay:any;
  dataLoaded=false;
  


  
  constructor(private hesapService:HesapService) { }
 
  ngOnInit(): void {

  }

  getEkNobyId(){
    if (!this.tckn) {
      this.dataLoaded=false;
      
   }
    this.hesapService.getEkNo(this.tckn).subscribe((response)=>{
    
      this.eknolar=response;
    })
  }

  getHesap(){
    this.hesapService.getHesap().subscribe((response)=>{
      this.data=response;
       })
  }
  
  getHesapDetay(){
    if(!this.ekNo){
      this.dataLoaded=false;
      
    }
    this.hesapService.getHesapDetail(this.ekNo).subscribe((response)=>{
     
      this.detay=response;
      this.dataLoaded=true;
      console.log(response)
    })
  }






}
