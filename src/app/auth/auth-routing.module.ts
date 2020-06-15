import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth-guard.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthComponent } from './auth.component';

const routes: Routes = [{
  path: '',
  component: AuthComponent,
  children: [
    {
      path: 'login',
      component: LoginComponent,
    },
    {
      path: 'register',
      component: RegisterComponent,
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
export class AuthRoutingModule { }
