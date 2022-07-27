import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UtilService } from 'src/app/shared/services/util.service';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';
import { TransportBidItem } from '../models/transport-bid-item.model';
import { TransportBidItemsStore } from './transport-bid-items.store';


@Injectable({ providedIn: 'root' })
export class TransportBidItemsService  {

  constructor(private transportBidItemsStore: TransportBidItemsStore,
    private http: HttpClient,
    private utilService: UtilService) {

  }



  get() {
    const url = `${environment.apiUrl}/transport_bid_items`;
    return this.http.get(url).pipe(
      tap({next: (response: any) => {
        if (response.success) {
          this.transportBidItemsStore.set(response.data);
        } else {
          this.utilService.showErrorMessage(response.error);
        }
      }, error: () => this.utilService.showErrorMessage('Error')})
    )
  }

  add(transport_bid_item: TransportBidItem) {
    const url = `${environment.apiUrl}/transport_bid_items`;
    return this.http.post(url, {transport_bid_item}).pipe(
      tap({
        next: (response: any) => {
          if (response.success) {
            this.transportBidItemsStore.add(response.data);
          } else {
            console.log(response.error);
            this.utilService.showErrorMessage(response.error);
          }
        }, error: () => this.utilService.showErrorMessage('Error')
      })
    )
  }
  
  update(id: any, transportBidItem: Partial<TransportBidItem>) {
    const url = `${environment.apiUrl}/transport_bid_items/${id}`;
    return this.http.put(url, { transportBidItem }).pipe(
      tap({
        next: (response: any) => {
          if (response.success) {
            this.transportBidItemsStore.update(id, response.data);
          } else {
            this.utilService.showErrorMessage(response.error);
          }
        }, error: () => this.utilService.showErrorMessage('Error')
      })
    )
  }





}
