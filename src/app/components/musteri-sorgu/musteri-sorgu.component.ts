import { Component, OnInit } from '@angular/core';
import { Musteri } from 'src/app/models/musteri';
import { MusteriService } from 'src/app/services/musteri.service';

@Component({
  selector: 'app-musteri-sorgu',
  templateUrl: './musteri-sorgu.component.html',
  styleUrls: ['./musteri-sorgu.component.css']
})
export class MusteriSorguComponent implements OnInit {


  musteriler: Musteri[]=[];
  tckn : string='';
  data:any;
  dataLoaded=false;

  filterNoText= '';
  filterNameText='';
  filterSurnameText='';
  filterUnvanText='';
  filterTcText='';
  filterDurumText='';

  
  displayedColumns: string[] = ['ad'];
  clickedRows = new Set<Musteri>();

  

  constructor(private musteriService:MusteriService) { 
    

  }

  ngOnInit(): void {
    
    this.getMusteri();
    
   
  }

  getMusteri(){
    this.musteriService.getMusteri().subscribe((response)=>{
   this.musteriler=response;


    })
 }
 getMusteribyId(){
  if (!this.tckn) {
    console.log("tckn yok")
    return;
 }
  this.musteriService.getByMusteri(this.tckn).subscribe((response)=>{
    this.data=response.data;
    this.dataLoaded=true;
    console.log(response.data);
 
  })
}


}
