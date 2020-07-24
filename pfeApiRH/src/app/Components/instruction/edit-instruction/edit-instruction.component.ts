import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, Form, FormBuilder, Validators } from '@angular/forms';
import { PfeApiService } from 'src/app/Services/pfe-api.service';
import { Instruction } from 'src/app/classes/Model/instruction.model';
import { Salarie } from 'src/app/classes/Model/salarie.model';

@Component({
  selector: 'app-edit-instruction',
  templateUrl: './edit-instruction.component.html',
  styleUrls: ['./edit-instruction.component.scss']
})
export class EditInstructionComponent implements OnInit {

  instructionForm : FormGroup;
  instruction : Instruction;
  isLoadingResults: boolean;
  salarie : Salarie[];
  instruction_level : string[]= ["niveau Bac","Bac","Bac+2","Licence Professionelle","Master Professionelle"]
  languages : string[]= ["العربية","francais","english","others"];
  isIncomplete : boolean =false;
  error : any;

  getErrorMessage() {
    return this.instructionForm.hasError('required') ? 'Required field' :
      this.instructionForm.hasError('email') ? 'Not a valid email' :
        '';
  }

  constructor(private api:PfeApiService, private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.api.GetInstructions().subscribe(res=>{
      this.instruction = res['_id'];
    })
    this.instructionForm = this.formBuilder.group({
      instruction_level : ['', Validators.required],
      diplome_got : ['', Validators.required],
      language_talked : ['', Validators.required],
      language_write :['', Validators.required],
      particular_knowledge :['', Validators.required],
    })
  }

  onFormSubmit(form:NgForm){
    let id : number;
    this.api.PutInstruction(id,form).subscribe(res=>{

    })
  }

}
