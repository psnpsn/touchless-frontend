import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { LayoutModule } from '../@layout/layout.module';
import { PagesRoutingModule } from './pages-routing.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { MapModule } from './map/map.module';
import { UsersComponent } from './users/users.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NbCardModule, NbIconModule } from '@nebular/theme';
import { UserStoreModule } from '../@store/users/user-store.module';
import { AgentsComponent } from './agents/agents.component';
import { AgentStoreModule } from '../@store/agent';
import { SitesComponent } from './sites/sites.component';



@NgModule({
  declarations: [PagesComponent, UsersComponent, AgentsComponent, SitesComponent],
  imports: [
    CommonModule,
    LayoutModule,
    PagesRoutingModule,
    DashboardModule,
    MapModule,
    Ng2SmartTableModule,
    NbCardModule,
    NbIconModule,
    UserStoreModule,
    AgentStoreModule,

  ]
})
export class PagesModule { }
