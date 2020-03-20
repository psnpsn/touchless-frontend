import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './user.service';

const SERVICES = [
  UserService,
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
