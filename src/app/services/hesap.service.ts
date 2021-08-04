import { EkNoDto } from './../models/EkNoDto';
import { Hesap } from './../models/hesap';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { HesapDetayDto } from '../models/HesapDetayDto';

@Injectable({
  providedIn: 'root'
})
export class HesapService {
  apiUrl='https://localhost:44374/api/'
  constructor(private httpClient:HttpClient) { }

  getEkNo(tckn:string):Observable<EkNoDto[]>{
    let newPath=this.apiUrl+"Hesap/getbyekno?tckn="+tckn;
    return this.httpClient.get<EkNoDto[]>(newPath);
  }

  getHesap():Observable<Hesap[]>{
    let newPath=this.apiUrl+"Hesap/getall";
    return  this.httpClient.get<Hesap[]>(newPath);
  }

  getHesapDetail(ekNo:number):Observable<ListResponseModel<HesapDetayDto>>{
    let newPath=this.apiUrl+"Hesap/getbyhesapdetail?ekno="+ekNo;
    return this.httpClient.get<ListResponseModel<HesapDetayDto>>(newPath);
    
  }

}
