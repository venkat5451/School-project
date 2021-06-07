import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RockService {
basicUrl="http://localhost:3000/admission"
  constructor(private _http:HttpClient) { }
  getAdmissions(){
   //return  this._http.get(`${this.basicUrl}/${id}`);
   return this._http.get(this.basicUrl);
   //return this._http.get(`${this.baseUrl}/${id}`);

  }
}
