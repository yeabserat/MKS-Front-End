export interface TransportBidItem {
    id: number | string;
    transport_bid_id:number;
    transport_plan_item_id:number;
    quantity:number;
    unit_id:number;
  }
  
  export const EMPTY_TRANSPORT_BID_ITEM : TransportBidItem= {
    id: null,
    transport_bid_id: null,
    transport_plan_item_id: null,
    quantity: null,
    unit_id: null,
  }