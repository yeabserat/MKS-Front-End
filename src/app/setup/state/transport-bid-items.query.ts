import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { TransportBidItemsState, TransportBidItemsStore } from './transport-bid-items.store';

@Injectable({ providedIn: 'root' })
export class TransportBidItemsQuery extends QueryEntity<TransportBidItemsState> {

  constructor(protected override store: TransportBidItemsStore) {
    super(store);
  }

}
