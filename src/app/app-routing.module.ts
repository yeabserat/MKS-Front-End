import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationComponent } from './setup/components/container/location/location.component';
import { RouteComponent } from './setup/components/container/route/route.component';
import { TransportPlanItemComponent } from './setup/components/container/transport-plan-item/transport-plan-item.component';
import { TransportPlanComponent } from './setup/components/container/transport-plan/transport-plan.component';
import { TransporterComponent } from './setup/components/container/transporter/transporter.component';
import { UnitOfMeasureComponent } from './setup/components/container/unit-of-measure/unit-of-measure.component';

const routes: Routes = [
  {path: 'transporters', component: TransporterComponent},
  {path:'transport_plans', component:TransportPlanComponent},
  {path:'unit_of_measures', component:UnitOfMeasureComponent},
  {path:'locations', component: LocationComponent},
  {path:'routes', component:RouteComponent},
  {path:'transport_plan_items/:id', component: TransportPlanItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
