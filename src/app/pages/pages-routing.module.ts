import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MapComponent } from './map/map.component';
import { UsersComponent } from './users/users.component';
import { AgentsComponent } from './agents/agents.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
    {
      path: 'map',
      component: MapComponent,
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
      component: MapComponent,
    },
    {
      path: 'devices/wristbands',
      component: MapComponent,
    },
    {
      path: 'devices/gateways',
      component: MapComponent,
    },
    {
      path: 'devices/tapwater',
      component: MapComponent,
    },
    {
      path: 'devices/sensors',
      component: MapComponent,
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
