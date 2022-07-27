import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { MessageService } from 'primeng/api';
import { of } from 'rxjs';
import { TransportBidItem } from '../models/transport-bid-item.model';
import { TransportBidItemsService } from './transport-bid-items.service';



describe('TransportBidItemsService', () => {
  let service: TransportBidItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        MatDialogModule
      ],
      providers: [
        MessageService,
      ]
    });
    service = TestBed.inject(TransportBidItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetchTransport Bid Items from server', () => {
    const response = { success: true, data: [{}] };
    const spy = spyOn(service, 'get').and.returnValue(of(response));

    service.get().subscribe((res: any) => {
      expect(res).toEqual(response);
      expect(spy).toHaveBeenCalled();
    });
  });

  it('should add a new Transport Bid Item', () => {
    const response = { success: true, data: {} };
    const data: TransportBidItem =
     { id: 1, transport_bid_id: 2, transport_plan_item_id: 2, quantity: 200, unit_id: 2}
    const spy = spyOn(service, 'add').and.returnValue(of(response));


    service.add(data).subscribe((res: any) => {
      expect(res).toEqual(response);
      expect(spy).toHaveBeenCalledWith(data);
    });
  });

  it('should update a Transport Bid Item', () => {
    const response = { success: true, data: [{}] };
    const data: TransportBidItem = { id: 1 } as TransportBidItem;
    const spy = spyOn(service, 'update').and.returnValue(of(response));


    service.update(data.id, data).subscribe((res: any) => {
      expect(res).toEqual(response);
      expect(spy).toHaveBeenCalledWith(data.id, data);
    });
  });
});
