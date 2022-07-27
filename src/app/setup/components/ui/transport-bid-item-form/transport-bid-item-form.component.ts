import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-transport-bid-item-form',
  templateUrl: './transport-bid-item-form.component.html',
  styleUrls: ['./transport-bid-item-form.component.scss']
})
export class TransportBidItemFormComponent implements OnInit {

  @Output() formSubmit = new EventEmitter();
  form: FormGroup;
  locations$;

  constructor(private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<TransportBidItemFormComponent>) { 
      this.locations$ = this.data.lookupData.locations$; 

      this.form = this.fb.group({
        id: data.id,
        transport_bid_id: data.transport_bid_id,
        transport_plan_item_id: data.transport_plan_item_id,
        quantity: data.quantity,
        unit_of_measure_id: data.unit_of_measure_id,
      
      });
    }

  ngOnInit(): void {
  }

  onSubmit():void {
    const payload = this.form.value;
    this.formSubmit.emit(payload);
  }

  onCancel(): void {
    this.dialogRef.close();
  }

}
