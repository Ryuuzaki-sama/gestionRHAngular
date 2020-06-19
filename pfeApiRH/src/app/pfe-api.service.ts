import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const url = "";

@Injectable({
  providedIn: 'root'
})

export class PfeApiService {
  
  constructor(private http:HttpClient) { }

  GetEmploye(){
    const apiUrl = `${url}emp`;
    return this.http.get(apiUrl);
  }

  PostEmploye(emp) {
    const apiUrl = `${url}emp`;
    return this.http.post(apiUrl, emp);
  }

  PutEmploye(id:number, emp){
    const apiUrl = `${url}emp/${id}`;
    return this.http.put(apiUrl, emp);
  }

  DeleteEmp(id:number) {
    const apiUrl = `${url}emp/${id}`;
    return this.http.delete(apiUrl);
  }

}
