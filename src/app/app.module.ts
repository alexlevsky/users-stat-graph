import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { UsersComponent } from './users/users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import {
  EntityMetadataMap,
  NgrxDataModule,
  DefaultDataServiceConfig
 } from 'ngrx-data';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

const url = 'https://jsonplaceholder.typicode.com/users';
const url2 = 'http://localhost:3001/api/';
const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: url
 };
export const entityMetadata: EntityMetadataMap = {
  Users: {},
  Statistics: {}
 };
@NgModule({
  declarations: [
    AppComponent,
      MainComponent,
      UsersComponent,
      UserDetailComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgrxDataModule.forRoot({ entityMetadata }),
    StoreModule.forRoot({}),
    HttpClientModule,
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [
    { provide: DefaultDataServiceConfig, useValue: defaultDataServiceConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
