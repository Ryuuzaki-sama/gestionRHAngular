import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Salarie } from '../classes/model/salarie.model';
import { Condjoint } from '../classes/model/condjoint.model';
import { Pays } from '../classes/localisation/pays.model';
import { SituationFamilial } from '../classes/model/situation-familial.model';
import { Region } from '../classes/localisation/region.model';
import { Ville } from '../classes/localisation/ville.model';
import { Quartier } from '../classes/localisation/quartier.model';
import { Permis } from '../classes/model/permis.model';
import { Fonction } from '../classes/model/fonction.model';
import { SuiviPro } from '../classes/model/suivi-pro.model';
import { AbsenceReason } from '../classes/model/absence-reason.model';
import { Accident } from '../classes/model/accident.model';
import { AbsenceLegal } from '../classes/Model/absence-legal.model';
import { Entreprise } from '../classes/model/entreprise.model';
import { Promotion } from '../classes/model/promotion.model';
import { Service } from '../classes/model/service.model';
import { Sanction } from '../classes/model/sanction.model';
import { Instruction } from '../classes/model/instruction.model';
import { EmploisAnterieur } from '../classes/model/emplois-anterieur.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'token': "base64:jpKAcM1IWrMK6k51F7F6xzeC6t2N9mWvqTsmzr/pG+c='"
  }
  //  {'token':'base64:jpKAcM1IWrMK6k51F7F6xzeC6t2N9mWvqTsmzr/pG+c='}
  )
};

const url = "http://localhost:8000/api/";

@Injectable({
  providedIn: 'root'
})

export class PfeApiService {
  
  constructor(private http:HttpClient) { }

  // Start Salarie
  GetSalaries(){
    const apiUrl = `${url}salarie`;
    return this.http.get<Salarie[]>(apiUrl,httpOptions);
  }

  GetSalarie(id:number){
    const apiUrl = `${url}salarie/${id}`;
    return this.http.get<Salarie>(apiUrl,httpOptions);
  }

  PostSalarie(salarie) {
    const apiUrl = `${url}salarie`;
    return this.http.post<Salarie[]>(apiUrl, salarie,httpOptions);
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

  GetCondjoints(){
    const apiUrl = `${url}condjoint`;
    return this.http.get<Condjoint[]>(apiUrl);
  }
  GetConjoint(id:number){
    const apiUrl = `${url}conjoint/${id}`;
    return this.http.get<Condjoint>(apiUrl,httpOptions);
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
    const apiUrl = `${url}pays`;
    return this.http.get<Pays[]>(apiUrl);
  }
  Getpays(id:number){
    const apiUrl = `${url}pays/${id}`;
    return this.http.get<Pays>(apiUrl,httpOptions);
  }

  PostPays(pays) {
    const apiUrl = `${url}pays`;
    return this.http.post<Pays[]>(apiUrl, pays);
  }

  PutPays(id:number, pays){
    const apiUrl = `${url}pays/${id}`;
    return this.http.put<Pays[]>(apiUrl, pays);
  }

  DeletePays(id:number) {
    const apiUrl = `${url}pays/${id}`;
    return this.http.delete<Pays[]>(apiUrl);
  }

  // End Pays

  // Start Region
  GetRegions(){
    const apiUrl = `${url}region`;
    return this.http.get<Region[]>(apiUrl);
  }

  GetRegion(id:number){
    const apiUrl = `${url}region/${id}`;
    return this.http.get<Region>(apiUrl,httpOptions);
  }

  PostRegion(salarie) {
    const apiUrl = `${url}region`;
    return this.http.post<Region[]>(apiUrl, salarie);
  }

  PutRegion(id:number, salarie){
    const apiUrl = `${url}region/${id}`;
    return this.http.put<Region[]>(apiUrl, salarie);
  }

  DeleteRegion(id:number) {
    const apiUrl = `${url}region/${id}`;
    return this.http.delete<Region[]>(apiUrl);
  }

  // End Region

  // Start Ville

  GetVilles(){
    const apiUrl = `${url}ville`;
    return this.http.get<Ville[]>(apiUrl);
  }
  GetVille(id:number){
    const apiUrl = `${url}ville/${id}`;
    return this.http.get<Ville>(apiUrl,httpOptions);
  }
  PostVille(salarie) {
    const apiUrl = `${url}ville`;
    return this.http.post<Ville[]>(apiUrl, salarie);
  }

  PutVille(id:number, salarie){
    const apiUrl = `${url}ville/${id}`;
    return this.http.put<Ville[]>(apiUrl, salarie);
  }

  DeleteVille(id:number) {
    const apiUrl = `${url}ville/${id}`;
    return this.http.delete<Ville[]>(apiUrl);
  }

  // End Ville

   // Start situation familial

   GetSituations(){
    const apiUrl = `${url}situation_familial`;
    return this.http.get<SituationFamilial[]>(apiUrl);
  }

  GetSituation(id:number){
    const apiUrl = `${url}situation_familial/${id}`;
    return this.http.get<SituationFamilial>(apiUrl,httpOptions);
  }

  PostSituation(situation) {
    const apiUrl = `${url}situation_familial`;
    return this.http.post<SituationFamilial[]>(apiUrl, situation);
  }

  PutSituation(id:number, pays){
    const apiUrl = `${url}situation_familial/${id}`;
    return this.http.put<SituationFamilial[]>(apiUrl, pays);
  }

  DeleteSituation(id:number) {
    const apiUrl = `${url}situation_familial/${id}`;
    return this.http.delete<SituationFamilial[]>(apiUrl);
  }

  // End situation familial

  
  // Start Quartier
  GetQuarties(){
    const apiUrl = `${url}quartier`;
    return this.http.get<Quartier[]>(apiUrl);
  }

  GetQuartier(id:number){
    const apiUrl = `${url}quartier/${id}`;
    return this.http.get<Quartier>(apiUrl);
  }

  PostQuartier(salarie) {
    const apiUrl = `${url}quartier`;
    return this.http.post<Quartier[]>(apiUrl, salarie);
  }

  PutQuartier(id:number, salarie){
    const apiUrl = `${url}quartier/${id}`;
    return this.http.put<Quartier[]>(apiUrl, salarie);
  }

  DeleteQuartier(id:number) {
    const apiUrl = `${url}quartier/${id}`;
    return this.http.delete<Quartier[]>(apiUrl);
  }

  // End Quartier

  // Start Permis

  GetPermisLst(){
    const apiUrl = `${url}permis`;
    return this.http.get<Permis[]>(apiUrl);
  }

  GetPermis(id:number){
    const apiUrl = `${url}permis/${id}`;
    return this.http.get<Permis>(apiUrl,httpOptions);
  }

  PostPermis(permis) {
    const apiUrl = `${url}permis`;
    return this.http.post<Permis[]>(apiUrl, permis);
  }

  PutPermis(id:number, permis){
    const apiUrl = `${url}permis/${id}`;
    return this.http.put<Permis[]>(apiUrl, permis);
  }

  DeletePermis(id:number) {
    const apiUrl = `${url}permis/${id}`;
    return this.http.delete<Permis[]>(apiUrl);
  }

  // End Permis

   // Start Fonction

   GetFonctions(){
    const apiUrl = `${url}fonction`;
    return this.http.get<Fonction[]>(apiUrl);
  }

  GetFonction(id:number){
    const apiUrl = `${url}fonction/${id}`;
    return this.http.get<Salarie>(apiUrl,httpOptions);
  }

  PostFonction(fonction) {
    const apiUrl = `${url}fonction`;
    return this.http.post<Fonction[]>(apiUrl, fonction);
  }

  PutFonction(id:number, fonction){
    const apiUrl = `${url}fonction/${id}`;
    return this.http.put<Fonction[]>(apiUrl, fonction);
  }

  DeleteFonction(id:number) {
    const apiUrl = `${url}fonction/${id}`;
    return this.http.delete<Fonction[]>(apiUrl);
  }

  // End Fonction

  // Start SuiviPro
  GetSuiviPros(){
    const apiUrl = `${url}suivipro`;
    return this.http.get<SuiviPro[]>(apiUrl);
  }

  GetSuiviPro(id:number){
    const apiUrl = `${url}suivipro/${id}`;
    return this.http.get<SuiviPro>(apiUrl,httpOptions);
  }

  PostSuiviPro(suivipro) {
    const apiUrl = `${url}suivipro`;
    return this.http.post<SuiviPro[]>(apiUrl, suivipro);
  }

  PutSuiviPro(id:number, suivipro){
    const apiUrl = `${url}suivipro/${id}`;
    return this.http.put<SuiviPro[]>(apiUrl, suivipro);
  }

  DeleteSuiviPro(id:number) {
    const apiUrl = `${url}suivipro/${id}`;
    return this.http.delete<SuiviPro[]>(apiUrl);
  }

  // End SuiviPro

  // Start AbsenceReason

  GetAbsenceReasones(){
    const apiUrl = `${url}reasonabsence`;
    return this.http.get<AbsenceReason[]>(apiUrl);
  }

  GetAbsenceReason(id:number){
    const apiUrl = `${url}reasonabsence/${id}`;
    return this.http.get<AbsenceReason>(apiUrl,httpOptions);
  }

  PostAbsenceReason(reasonabsence) {
    const apiUrl = `${url}reasonabsence`;
    return this.http.post<AbsenceReason[]>(apiUrl, reasonabsence);
  }

  PutAbsenceReason(id:number, reasonabsence){
    const apiUrl = `${url}reasonabsence/${id}`;
    return this.http.put<AbsenceReason[]>(apiUrl, reasonabsence);
  }

  DeleteAbsenceReason(id:number) {
    const apiUrl = `${url}reasonabsence/${id}`;
    return this.http.delete<AbsenceReason[]>(apiUrl);
  }

  // End AbsenceReason

   // Start Accident

   GetAccidents(){
    const apiUrl = `${url}accident`;
    return this.http.get<Accident[]>(apiUrl);
  }

  GetAccident(id:number){
    const apiUrl = `${url}accident/${id}`;
    return this.http.get<Accident>(apiUrl,httpOptions);
  }

  PostAccident(accident) {
    const apiUrl = `${url}accident`;
    return this.http.post<Accident[]>(apiUrl, accident);
  }

  PutAccident(id:number, accident){
    const apiUrl = `${url}accident/${id}`;
    return this.http.put<Accident[]>(apiUrl, accident);
  }

  DeleteAccident(id:number) {
    const apiUrl = `${url}accident/${id}`;
    return this.http.delete<Accident[]>(apiUrl);
  }

  // End Accident

  // Start Permis

  GetSanctions(){
    const apiUrl = `${url}sanction`;
    return this.http.get<Sanction[]>(apiUrl);
  }

  GetSanction(id:number){
    const apiUrl = `${url}sanction/${id}`;
    return this.http.get<Sanction>(apiUrl,httpOptions);
  }

  PostSanction(sanction) {
    const apiUrl = `${url}sanction`;
    return this.http.post<Sanction[]>(apiUrl, sanction);
  }

  PutSanction(id:number, sanction){
    const apiUrl = `${url}sanction/${id}`;
    return this.http.put<Sanction[]>(apiUrl, sanction);
  }

  DeleteSanction(id:number) {
    const apiUrl = `${url}sanction/${id}`;
    return this.http.delete<Sanction[]>(apiUrl);
  }

  // End Sanction

   // Start Service

   GetServices(){
    const apiUrl = `${url}service`;
    return this.http.get<Service[]>(apiUrl);
  }

  GetService(id:number){
    const apiUrl = `${url}service/${id}`;
    return this.http.get<Service>(apiUrl,httpOptions);
  }

  PostService(service) {
    const apiUrl = `${url}service`;
    return this.http.post<Service[]>(apiUrl, service);
  }

  PutService(id:number, service){
    const apiUrl = `${url}service/${id}`;
    return this.http.put<Service[]>(apiUrl, service);
  }

  DeleteService(id:number) {
    const apiUrl = `${url}service/${id}`;
    return this.http.delete<Service[]>(apiUrl);
  }

  // End Service

  // Start SuiviPro
  GetPromotions(){
    const apiUrl = `${url}promotion`;
    return this.http.get<Promotion[]>(apiUrl);
  }

  GetPromotion(id:number){
    const apiUrl = `${url}promotion/${id}`;
    return this.http.get<Promotion>(apiUrl,httpOptions);
  }

  PostPromotion(promotion) {
    const apiUrl = `${url}promotion`;
    return this.http.post<Promotion[]>(apiUrl, promotion);
  }

  PutPromotion(id:number, promotion){
    const apiUrl = `${url}promotion/${id}`;
    return this.http.put<Promotion[]>(apiUrl, promotion);
  }

  DeletePromotion(id:number) {
    const apiUrl = `${url}promotion/${id}`;
    return this.http.delete<Promotion[]>(apiUrl);
  }

  // End Promotion

  // Start Entreprise

  GetEntreprises(){
    const apiUrl = `${url}entreprise`;
    return this.http.get<Entreprise[]>(apiUrl);
  }

  GetEntreprise(id:number){
    const apiUrl = `${url}entreprise/${id}`;
    return this.http.get<Entreprise>(apiUrl,httpOptions);
  }

  PostEntreprise(entreprise) {
    const apiUrl = `${url}entreprise`;
    return this.http.post<Entreprise[]>(apiUrl, entreprise);
  }

  PutEntreprise(id:number, entreprise){
    const apiUrl = `${url}entreprise/${id}`;
    return this.http.put<Entreprise[]>(apiUrl, entreprise);
  }

  DeleteEntreprise(id:number) {
    const apiUrl = `${url}entreprise/${id}`;
    return this.http.delete<Entreprise[]>(apiUrl);
  }

  // End Entreprise

   // Start AbsenceLegal

   GetAbsenceLegals(){
    const apiUrl = `${url}absence_legal`;
    return this.http.get<AbsenceLegal[]>(apiUrl);
  }

  GetAbsenceLegal(id:number){
    const apiUrl = `${url}absence_legal/${id}`;
    return this.http.get<Entreprise>(apiUrl,httpOptions);
  }

  PostAbsenceLegal(absence_legal) {
    const apiUrl = `${url}absence_legal`;
    return this.http.post<AbsenceLegal[]>(apiUrl, absence_legal);
  }

  PutAbsenceLegal(id:number, absence_legal){
    const apiUrl = `${url}absence_legal/${id}`;
    return this.http.put<AbsenceLegal[]>(apiUrl, absence_legal);
  }

  DeleteAbsenceLegal(id:number) {
    const apiUrl = `${url}absence_legal/${id}`;
    return this.http.delete<AbsenceLegal[]>(apiUrl);
  }

  // End AbsenceLegal

  // Start EmploisAnterieur

  GetEmploisAnterieurs(){
    const apiUrl = `${url}emploi_ant`;
    return this.http.get<EmploisAnterieur[]>(apiUrl);
  }

  GetEmploisAnterieur(id:number){
    const apiUrl = `${url}emploi_ant/${id}`;
    return this.http.get<Entreprise>(apiUrl,httpOptions);
  }

  PostEmploisAnterieur(emploi_ant) {
    const apiUrl = `${url}emploi_ant`;
    return this.http.post<EmploisAnterieur[]>(apiUrl, emploi_ant);
  }

  PutEmploisAnterieur(id:number, emploi_ant){
    const apiUrl = `${url}emploi_ant/${id}`;
    return this.http.put<EmploisAnterieur[]>(apiUrl, emploi_ant);
  }

  DeleteEmploisAnterieur(id:number) {
    const apiUrl = `${url}emploi_ant/${id}`;
    return this.http.delete<EmploisAnterieur[]>(apiUrl);
  }

  // End EmploisAnterieur

   // Start AbsenceLegal

   GetInstructions(){
    const apiUrl = `${url}instruction`;
    return this.http.get<Instruction[]>(apiUrl);
  }

  GetInstruction(id:number){
    const apiUrl = `${url}instruction/${id}`;
    return this.http.get<Entreprise>(apiUrl,httpOptions);
  }


  PostInstruction(instruction) {
    const apiUrl = `${url}instruction`;
    return this.http.post<Instruction[]>(apiUrl, instruction);
  }

  PutInstruction(id:number, instruction){
    const apiUrl = `${url}instruction/${id}`;
    return this.http.put<Instruction[]>(apiUrl, instruction);
  }

  DeleteInstruction(id:number) {
    const apiUrl = `${url}instruction/${id}`;
    return this.http.delete<Instruction[]>(apiUrl);
  }

  // End AbsenceLegal
}
