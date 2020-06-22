import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Salarie } from './classes/salarie.model';
import { Condjoint } from './classes/condjoint.model';
import { Pays } from './classes/localisation/pays.model';
import { SituationFamilial } from './classes/situation-familial.model';
import { Region } from './classes/localisation/region.model';
import { Ville } from './classes/localisation/ville.model';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

const url = "localhost/api/";

@Injectable({
  providedIn: 'root'
})

export class PfeApiService {
  
  constructor(private http:HttpClient) { }

  // Start Salarie
  GetSalarie(){
    const apiUrl = `${url}salarie`;
    return this.http.get<Salarie[]>(apiUrl);
  }

  PostSalarie(salarie) {
    const apiUrl = `${url}salarie`;
    return this.http.post<Salarie[]>(apiUrl, salarie);
  }

  PutSalarie(id:number, salarie){
    const apiUrl = `${url}salarie/${id}`;
    return this.http.put<Salarie[]>(apiUrl, salarie);
  }

  Deletesalarie(id:number) {
    const apiUrl = `${url}salarie/${id}`;
    return this.http.delete<Salarie[]>(apiUrl);
  }

  // End Salarie

  // Start Condjoint

  GetCondjoint(){
    const apiUrl = `${url}condjoint`;
    return this.http.get<Condjoint[]>(apiUrl);
  }

  PostCondjoint(salarie) {
    const apiUrl = `${url}condjoint`;
    return this.http.post<Condjoint[]>(apiUrl, salarie);
  }

  PutCondjoint(id:number, salarie){
    const apiUrl = `${url}condjoint/${id}`;
    return this.http.put<Condjoint[]>(apiUrl, salarie);
  }

  DeleteCondjoint(id:number) {
    const apiUrl = `${url}condjoint/${id}`;
    return this.http.delete<Condjoint[]>(apiUrl);
  }

  // End Condjoint

   // Start Pays

   GetPays(){
    const apiUrl = `${url}Pays`;
    return this.http.get<Pays[]>(apiUrl);
  }

  PostPays(pays) {
    const apiUrl = `${url}Pays`;
    return this.http.post<Pays[]>(apiUrl, pays);
  }

  PutPays(id:number, pays){
    const apiUrl = `${url}Pays/${id}`;
    return this.http.put<Pays[]>(apiUrl, pays);
  }

  DeletePays(id:number) {
    const apiUrl = `${url}Pays/${id}`;
    return this.http.delete<Pays[]>(apiUrl);
  }

  // End Pays

  // Start Salarie
  GetRegion(){
    const apiUrl = `${url}Region`;
    return this.http.get<Region[]>(apiUrl);
  }

  PostRegion(salarie) {
    const apiUrl = `${url}Region`;
    return this.http.post<Region[]>(apiUrl, salarie);
  }

  PutRegion(id:number, salarie){
    const apiUrl = `${url}Region/${id}`;
    return this.http.put<Region[]>(apiUrl, salarie);
  }

  DeleteRegion(id:number) {
    const apiUrl = `${url}Region/${id}`;
    return this.http.delete<Region[]>(apiUrl);
  }

  // End Salarie

  // Start Condjoint

  GetVille(){
    const apiUrl = `${url}Ville`;
    return this.http.get<Ville[]>(apiUrl);
  }

  PostVille(salarie) {
    const apiUrl = `${url}Ville`;
    return this.http.post<Ville[]>(apiUrl, salarie);
  }

  PutVille(id:number, salarie){
    const apiUrl = `${url}Ville/${id}`;
    return this.http.put<Ville[]>(apiUrl, salarie);
  }

  DeleteVille(id:number) {
    const apiUrl = `${url}Ville/${id}`;
    return this.http.delete<Ville[]>(apiUrl);
  }

  // End Condjoint

   // Start Pays

   GetSituation(){
    const apiUrl = `${url}situation_familial`;
    return this.http.get<SituationFamilial[]>(apiUrl);
  }

  PostSituation(pays) {
    const apiUrl = `${url}situation_familial`;
    return this.http.post<SituationFamilial[]>(apiUrl, pays);
  }

  PutSituation(id:number, pays){
    const apiUrl = `${url}situation_familial/${id}`;
    return this.http.put<SituationFamilial[]>(apiUrl, pays);
  }

  DeleteSituation(id:number) {
    const apiUrl = `${url}situation_familial/${id}`;
    return this.http.delete<SituationFamilial[]>(apiUrl);
  }

  // End Pays

  
  

}
