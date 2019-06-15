import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistreComponent } from './registre/registre.component';
import { LoginComponent } from './login/login.component';
import { RouteGuard } from './route.guard';
import { DashbordComponent } from './dashbord/dashbord.component';
import { SettingComponent } from './setting/setting.component';
import { GuardloginGuard } from './guardlogin.guard';
//import { RouteGuard } from './route.guard';

const routes: Routes = [
  { path: 'signup', component: RegistreComponent, canActivate: [RouteGuard] },
  { path: 'signin', component: LoginComponent ,canActivate: [RouteGuard]},
  { path: 'dashbord', component: DashbordComponent},
  { path: 'add-post', component: SettingComponent, canActivate:[GuardloginGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
