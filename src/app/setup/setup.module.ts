import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SetupRoutingModule } from './setup-routing.module';
import { TransporterComponent } from './components/container/transporter/transporter.component';
import { SharedModule } from '../shared/shared.module';
import { TransporterFormComponent } from './components/ui/transporter-form/transporter-form.component';
import { AppCommonModule } from '../app.common.module';
import { LocationComponent } from './components/container/location/location.component';
import { RouteComponent } from './components/container/route/route.component';
import { TransportPlanComponent } from './components/container/transport-plan/transport-plan.component';
import { TransportPlanItemComponent } from './components/container/transport-plan-item/transport-plan-item.component';
import { UnitOfMeasureComponent } from './components/container/unit-of-measure/unit-of-measure.component';
import { TransportPlanFormComponent } from './components/ui/transport-plan-form/transport-plan-form.component';
import { UnitOfMeasureFormComponent } from './components/ui/unit-of-measure-form/unit-of-measure-form.component';
import { LocationFormComponent } from './components/ui/location-form/location-form.component';
import { RouteFormComponent } from './components/ui/route-form/route-form.component';
import { TransportPlanItemFormComponent } from './components/ui/transport-plan-item-form/transport-plan-item-form.component';


@NgModule({
  declarations: [
    TransporterComponent,
    TransporterFormComponent,
    LocationComponent,
    RouteComponent,
    TransportPlanComponent,
    TransportPlanItemComponent,
    UnitOfMeasureComponent,
    TransportPlanFormComponent,
    UnitOfMeasureFormComponent,
    LocationFormComponent,
    RouteFormComponent,
    TransportPlanItemFormComponent,
  ],
  imports: [
    CommonModule,
    SetupRoutingModule,
    SharedModule,
    AppCommonModule
  ],
  exports: [
    TransporterComponent
  ]
})
export class SetupModule { }
