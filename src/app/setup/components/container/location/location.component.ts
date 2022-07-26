import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Column } from 'src/app/shared/models/column.model';
import { EMPTY_LOCATION, Location } from 'src/app/setup/models/location.model';
import { LocationsQuery } from 'src/app/setup/state/locations.query';
import { LocationsService } from 'src/app/setup/state/locations.service';
import { MatDialog } from '@angular/material/dialog';
import { LocationFormComponent } from '../../ui/location-form/location-form.component';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

  actions: any[] = [
    { color: 'success', label: 'New', disabled: false, icon: 'add_circle' }
  ];

  tableActions: any[] = [
    { icon: 'edit', color: 'warn', tooltip: 'Edit'}
  ]
  
  columns: Column[] = [
    { name: 'code', label: 'Code'},
    { name: 'name', label: 'Name'},
    { name: 'location_type', label: 'Location Type'},
    { name: 'description', label: 'Description'},
    { name: 'ancestry', label: 'Ancestry'}
  ];

  
  locations: Location[] = [];

  locations$: Observable<Location[]> = this.query.selectAll();

  constructor(private dialog: MatDialog,
    private service:LocationsService,
    private query: LocationsQuery) { 
      this.service.get().subscribe();
    }

  ngOnInit(): void {
  }


  
  onAdd(event: any): void {
    const dialogRef = this.dialog.open(LocationFormComponent, {
     disableClose: true,
     data: {
      formData: EMPTY_LOCATION,
      lookupData:{
        locations$: this.locations$
      }
    }
    });
    
    (dialogRef.componentInstance as any).formSubmit.subscribe((data: any) => {
      data.ancestry ===""? data.ancestry = null :data.ancestry= data.ancestry;
      this.service.add(data).subscribe();
       dialogRef.close();
    });
   }

   onEdit(event: any): void {
    const dialogRef = this.dialog.open(LocationFormComponent, {
      disableClose: true,
      data:{
        formData: event.item,
        lookupData: {
          selectedItem:event.item.ancestry,
          locations$: this.locations$
        }
      } 
     });
     
     (dialogRef.componentInstance as any).formSubmit.subscribe((data: any) => {
      data.ancestry ===""? data.ancestry = null :data.ancestry= data.ancestry;      
        this.service.update(data.id, data).subscribe();
        dialogRef.close();
     });
  }
}