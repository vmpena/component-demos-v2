import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { HomeComponent } from './home/home.component';
import { AccordionsComponent } from './accordions/accordions.component';
import { PaginationComponent } from './pagination/pagination.component';
import { FontAwesomeComponent } from './font-awesome/font-awesome.component';

import {CustomerService} from "./services/customer.service";
import { Routing } from './app.routing';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AccordionModule } from 'ng2-bootstrap/accordion';
import { PaginationModule } from 'ng2-bootstrap/pagination';
import { Ng2PaginationModule } from 'ng2-pagination'


@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    HomeComponent,
    AccordionsComponent,
    PaginationComponent,
    FontAwesomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing,
    NgbModule.forRoot(),
    AccordionModule.forRoot(),
    PaginationModule.forRoot(),
    Ng2PaginationModule
  ],
  providers: [
    CustomerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
