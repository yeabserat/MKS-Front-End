export interface TransportPlan {
  id: number | string;
  reference_no: string;
  plan_type: string;
  region_id: number;
  
}

export const EMPTY_TRANSPORT_PLAN: TransportPlan  = {
  id: null,
  reference_no: '',
  plan_type: '',
  region_id:null,
  
}


