import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Musteri } from '../models/musteri';

@Injectable({
  providedIn: 'root'
})
export class MusteriService {

  apiUrl='https://localhost:44374/api/'
  constructor(private httpClient:HttpClient) { }

  getByMusteri(TCKN:string):Observable<ListResponseModel<Musteri>>{
    let newPath=this.apiUrl+"Musteri/getbyid?tckn="+TCKN;
    return this.httpClient.get<ListResponseModel<Musteri>>(newPath);
  }

  getMusteri():Observable<Musteri[]>{
    let newPath=this.apiUrl+"Musteri/getall";
    return  this.httpClient.get<Musteri[]>(newPath);
  }

}
