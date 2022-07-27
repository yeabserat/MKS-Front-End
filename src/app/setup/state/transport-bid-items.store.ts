import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { TransportBidItem } from '../models/transport-bid-item.model';

export interface TransportBidItemsState extends EntityState<TransportBidItem> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'transport-bid-items' })
export class TransportBidItemsStore extends EntityStore<TransportBidItemsState> {

  constructor() {
    super();
  }

}
