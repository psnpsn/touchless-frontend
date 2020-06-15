import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MapComponent } from './map/map.component';
import { UsersComponent } from './users/users.component';
import { AgentsComponent } from './agents/agents.component';
import { SitesComponent } from './sites/sites.component';
import { WristbandComponent } from './wristband/wristband.component';
import { GatewayComponent } from './gateway/gateway.component';
import { TapwaterComponent } from './tapwater/tapwater.component';
import { SensorComponent } from './sensor/sensor.component';
import { AuthGuard } from '../auth-guard.service';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  canActivate: [AuthGuard],
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
    {
      path: 'map',
      component: MapComponent,
      canActivate: [AuthGuard]
    },
    {
      path: 'users',
      component: UsersComponent,
    },
    {
      path: 'agents',
      component: AgentsComponent,
    },
    {
      path: 'sites',
      component: SitesComponent,
    },
    {
      path: 'devices/wristbands',
      component: WristbandComponent,
    },
    {
      path: 'devices/gateways',
      component: GatewayComponent,
    },
    {
      path: 'devices/tapwater',
      component: TapwaterComponent,
    },
    {
      path: 'devices/sensors',
      component: SensorComponent  ,
    }
  ]
}];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ],
})
export class PagesRoutingModule { }
