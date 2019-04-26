import * as $ from 'jquery';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS,HttpClientModule, HttpClient } from '@angular/common/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FullComponent } from './layouts/full/full.component';
import { AppHeaderComponent } from './layouts/full/header/header.component';
import { FooterComponent } from './layouts/full/footer/footer.component';
import { AppSidebarComponent } from './layouts/full/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/modules/material.module';

import { SharedModule } from './shared/shared.module';
import { SpinnerComponent } from './shared/spinner.components';

import { ProgressInterceptor } from './shared/interceptors/progress.interceptor';
import { TimingInterceptor } from './shared/interceptors/timing.interceptor';
import { ProgressBarService } from './actions/services/progress-bar.service';
import {CustomersComponent} from './customers/customers.component';
import {CustomersListComponent} from './customers/customers-list/customers-list.component';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {CustomersService} from './controllers/services/customers.service';
import {AngularFirestore} from '@angular/fire/firestore';


@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    AppHeaderComponent,
    FooterComponent,
    SpinnerComponent,
    AppSidebarComponent,
    CustomersListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  exports: [
    AppHeaderComponent,
    CustomersListComponent
  ],
  entryComponents: [
    CustomersListComponent
  ],
  providers: [
    ProgressBarService,
    CustomersService,
    AngularFirestore,
    {provide: HTTP_INTERCEPTORS, useClass: ProgressInterceptor, multi: true, deps: [ProgressBarService]},
    {provide: HTTP_INTERCEPTORS, useClass: TimingInterceptor, multi: true}
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
