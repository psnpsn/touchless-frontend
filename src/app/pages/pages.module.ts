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
import { SiteStoreModule } from '../@store/site';
import { GatewayComponent } from './gateway/gateway.component';
import { TapwaterComponent } from './tapwater/tapwater.component';
import { SensorComponent } from './sensor/sensor.component';
import { WristbandComponent } from './wristband/wristband.component';
import { GatewayStoreModule } from '../@store/gateway';
import { TapwaterStoreModule } from '../@store/tapwater';
import { SensorStoreModule } from '../@store/sensor';
import { WristbandStoreModule } from '../@store/wristband';
import { AuthGuard } from '../auth-guard.service';
import { AuthStoreModule } from '../@store/auth';
import { TapreadStoreModule } from '../@store/tapread';
import { ComplianceStoreModule } from '../@store/compliance';
import { TapreadComponent } from './tapread/tapread.component';



@NgModule({
  declarations: [
    PagesComponent,
    UsersComponent,
    AgentsComponent,
    SitesComponent,
    GatewayComponent,
    TapwaterComponent,
    SensorComponent,
    WristbandComponent,
    TapreadComponent

  ],
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
    SiteStoreModule,
    GatewayStoreModule,
    TapwaterStoreModule,
    SensorStoreModule,
    WristbandStoreModule,
    TapreadStoreModule,
    ComplianceStoreModule
  ],
  providers: [
    AuthGuard
  ]
})
export class PagesModule { }
