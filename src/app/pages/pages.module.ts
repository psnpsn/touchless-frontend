import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { LayoutModule } from '../@layout/layout.module';
import { PagesRoutingModule } from './pages-routing.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { MapModule } from './map/map.module';
import { UsersComponent } from './users/users.component';



@NgModule({
  declarations: [PagesComponent, UsersComponent],
  imports: [
    CommonModule,
    LayoutModule,
    PagesRoutingModule,
    DashboardModule,
    MapModule,
  ]
})
export class PagesModule { }
