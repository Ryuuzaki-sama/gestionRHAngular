import { Component, OnInit } from '@angular/core';
import { PfeApiService } from 'src/app/Services/pfe-api.service';
import { AuthService } from 'src/app/Services/auth.service';
import { Instruction } from 'src/app/classes/Model/instruction.model';

@Component({
  selector: 'app-instruction',
  templateUrl: './instruction.component.html',
  styleUrls: ['./instruction.component.scss']
})
export class InstructionComponent implements OnInit {

  displayedColumns: string[]= ["instruction_level", "diplome_got", "language_talked and written","particular_knowledge"]
  instruction:Instruction[];
  
  isLoadingResults: boolean;
  isIncomplete : boolean =false;
  error : any;

  constructor(private api:PfeApiService, private apiAuth:AuthService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.api.GetInstructions().subscribe(res=>{
      this.instruction = res;
    })
  }

  isAdmin(){
    this.apiAuth.isAdmin();
  }

  isSalarie(){
    this.apiAuth.isSalarie();
  }

  isAuth(){
    this.apiAuth.isAuthenticated();
  }

}
