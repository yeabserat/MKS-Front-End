import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-route-form',
  templateUrl: './route-form.component.html',
  styleUrls: ['./route-form.component.scss']
})
export class RouteFormComponent implements OnInit {

  @Output() formSubmit = new EventEmitter();
  

  locations$;
  form: FormGroup;

  constructor(private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: {formData:any, lookupData:any}) { 

      this.locations$ = this.data.lookupData.locations$;
      this.form = this.fb.group({
        id: data.formData.id,
        name: data.formData.name,
        region_id:data.formData.region_id,
        source_id:data.formData.source_id,
        destination_id:data.formData.destination_id
      });
    }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const payload = this.form.value;
    this.formSubmit.emit(payload);
  }

}
