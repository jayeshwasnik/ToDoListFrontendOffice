import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './user/login/login.component';
import { SignupComponent } from './user/signup/signup.component';
import { HomePageComponent } from './list-management/home-page/home-page.component';
import { ListViewComponent } from './list-management/list-view/list-view.component';
import { ListEditComponent } from './list-management/list-edit/list-edit.component';
import { ListCreateComponent } from './list-management/list-create/list-create.component';



const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
