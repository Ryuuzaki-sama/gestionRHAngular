import { Component, OnInit } from '@angular/core';
import { Condjoint } from 'src/app/classes/model/condjoint.model';

@Component({
  selector: 'app-conjoint',
  templateUrl: './conjoint.component.html',
  styleUrls: ['./conjoint.component.scss']
})
export class ConjointComponent implements OnInit {
  conjoit : Condjoint;
  constructor() { }

  ngOnInit(): void {
  }

}
