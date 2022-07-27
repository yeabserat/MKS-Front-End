import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { LocationsQuery } from 'src/app/setup/state/locations.query';
import { LocationsService } from 'src/app/setup/state/locations.service';
import { Column } from 'src/app/shared/models/column.model';
import { Location } from 'src/app/setup/models/location.model';
import { TransportBidItemFormComponent } from '../../ui/transport-bid-item-form/transport-bid-item-form.component';
import { EMPTY_TRANSPORT_BID_ITEM, TransportBidItem } from 'src/app/setup/models/transport-bid-item.model';
import { TransportBidItemsService } from 'src/app/setup/state/transport-bid-items.service';
import { TransportBidItemsQuery } from 'src/app/setup/state/transport-bid-items.query';

@Component({
  selector: 'app-transport-bid-item',
  templateUrl: './transport-bid-item.component.html',
  styleUrls: ['./transport-bid-item.component.scss']
})
export class TransportBidItemComponent implements OnInit {

  actions: any[] = [
    { color: 'success', label: 'New', disabled: false, icon: 'add_circle' }
  ];

  tableActions: any[] = [
    { icon: 'edit', color: 'warn', tooltip: 'Edit'}
  ]

  columns: Column[] = [
    { name: 'transport_bid_reference_no', label: 'Transport Bid'},
    { name: 'quantity', label: 'Quantity'},
    { name: 'unit_of_measure_name', label: 'Unit'},
  ];

  transportBidItems: TransportBidItem[] = [];
 

  transportBidItems$: Observable<TransportBidItem[]> = this.query.selectAll();
  location$:Observable<Location[]> = this.locationQuery.selectAll();

  constructor(private dialog: MatDialog,
    private service:TransportBidItemsService,
    private query: TransportBidItemsQuery,
    private locationService: LocationsService,
    private locationQuery:LocationsQuery) { }

  ngOnInit(): void {
    this.service.get().subscribe();
    this.locationService.get().subscribe();
  }

  onAdd(event: any): void {
    const dialogRef = this.dialog.open(TransportBidItemFormComponent, {
     disableClose: true,
     data: {
      formData:EMPTY_TRANSPORT_BID_ITEM,
      lookupData: {
        location : this.location$,
      }
     }
    });
    
    (dialogRef.componentInstance as any).formSubmit.subscribe((data: any) => {
       this.service.add(data).subscribe();
       dialogRef.close();
    });
   }
  
  onEdit(event: any): void {
    const dialogRef = this.dialog.open(TransportBidItemFormComponent, {
      disableClose: true,
      data: event.item
     });
     
     (dialogRef.componentInstance as any).formSubmit.subscribe((data: any) => {
        this.service.update(data.id, data).subscribe();
        dialogRef.close();
     });
  }

}
