import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';
import { PfeApiService } from 'src/app/Services/pfe-api.service';
import { Instruction } from 'src/app/classes/instruction.model';

@Component({
  selector: 'app-edit-instruction',
  templateUrl: './edit-instruction.component.html',
  styleUrls: ['./edit-instruction.component.scss']
})
export class EditInstructionComponent implements OnInit {

  instructionForm : FormGroup;
  instruction : Instruction;
  isLoadingResults: boolean;
  isIncomplete : boolean =false;
  error : any;

  constructor(private api:PfeApiService) { }

  ngOnInit(): void {
    this.api.GetInstruction().subscribe(res=>{
      this.instruction = res['_id'];
    })
  }

  onFormSubmit(form:NgForm){
    let id : number;
    this.api.PutInstruction(id,form).subscribe(res=>{

    })
  }

}
