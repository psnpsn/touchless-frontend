import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { NbCardModule, NbInputModule, NbButtonComponent, NbButtonModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';
import { AuthStoreModule } from '../@store/auth';



@NgModule({
  declarations: [LoginComponent, RegisterComponent, AuthComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    NbCardModule,
    NbInputModule,
    FormsModule,
    NbButtonModule,
  ]
})
export class AuthModule { }
