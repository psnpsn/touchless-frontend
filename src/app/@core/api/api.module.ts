import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './user.service';
import { SiteService } from './site.service';

const SERVICES = [
  UserService,
  SiteService,
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ...SERVICES,
  ],
})
export class ApiModule { }
