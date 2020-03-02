import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { ListViewComponent } from './list-view/list-view.component';
import { ListEditComponent } from './list-edit/list-edit.component';
import { ListCreateComponent } from './list-create/list-create.component';

import {RouterModule,Routes} from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [HomePageComponent, ListViewComponent, ListEditComponent, ListCreateComponent],
  imports: [
    CommonModule,BrowserAnimationsModule,FormsModule,RouterModule
  ],
   exports: [HomePageComponent, ListViewComponent,ListEditComponent,ListCreateComponent]
})
export class ListManagementModule { }
