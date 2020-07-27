import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './books/list/list.component';
import { AddComponent } from './books/add/add.component';
import { EditComponent } from './books/edit/edit.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import { DeleteComponent } from './books/delete/delete.component';
import { DetailComponent } from './books/detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AddComponent,
    EditComponent,
    DeleteComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
