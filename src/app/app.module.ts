import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//for routing module
import {RouterModule,Routes} from '@angular/router';


import {UserModule} from './user/user.module';
import {ListManagementModule} from './list-management/list-management.module';

//import statements for services
import { ListService } from './list.service';

//for angular forms
import { FormsModule } from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { LoginComponent } from './user/login/login.component';
import { SignupComponent } from './user/signup/signup.component';
import { HomePageComponent } from './list-management/home-page/home-page.component';
import { ListViewComponent } from './list-management/list-view/list-view.component';
import { ListEditComponent } from './list-management/list-edit/list-edit.component';
import { ListCreateComponent } from './list-management/list-create/list-create.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,BrowserAnimationsModule,FormsModule,UserModule,ListManagementModule,RouterModule.forRoot([ {path:'login',component:LoginComponent},
	{path:'home',component:HomePageComponent},
    //{path:'',redirectTo:'login',pathMatch:'full'},
    {path:'create',component:ListCreateComponent},
    //remember this blogId is just a random name ,you can name it anything.It is not actually the variable blogId in home component
    {path:'list/:listId',component:ListViewComponent},
    {path:'edit/:listId',component:ListEditComponent}
    //{path:'**',component:LoginComponent}
    ])
  ],
  providers: [ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
