import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { PfeApiService } from 'src/app/Services/pfe-api.service';

@Component({
  selector: 'app-edit-salarie',
  templateUrl: './edit-salarie.component.html',
  styleUrls: ['./edit-salarie.component.scss']
})
export class EditSalarieComponent implements OnInit {

  salarieForm: FormGroup;
  id:number=null;
  prod_name:string='';
  prod_desc:string='';
  prod_price:number=null;
  isLoadingResults = false;

  constructor(private router: Router, private route: ActivatedRoute, private api: PfeApiService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getProduct(this.route.snapshot.params['id']);
    this.salarieForm = this.formBuilder.group({
      'prod_name' : [null, Validators.required],
      'prod_desc' : [null, Validators.required],
      'prod_price' : [null, Validators.required]
    });
  }
  getProduct(id) {
    // this.api.GetSalarie(id).subscribe(data => {
    //   this.id = data.id;
    //   this.salarieForm.setValue({
    //     prod_name: data.prod_name,
    //     prod_desc: data.prod_desc,
    //     prod_price: data.prod_price
    //   });
    // });
  }
  onFormSubmit(form:NgForm) {
    this.isLoadingResults = true;
    this.api.PutSalarie(this.id, form)
      .subscribe(res => {
          let id = res['_id'];
          this.isLoadingResults = false;
          this.router.navigate(['/salarie/salarie-details', id]);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }
  productDetails() {
    this.router.navigate(['/salarie/salarie-details', this.id]);
  }
}
