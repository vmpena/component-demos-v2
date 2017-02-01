import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { NgBootstrapDemosComponent }  from './ng-bootstrap-demos/ng-bootstrap-demos.component';
import { HomeComponent } from './home/home.component';
import { CustomersComponent } from './customers/customers.component';
import { AccordionsComponent } from './accordions/accordions.component';
import { PaginationComponent } from './pagination/pagination.component';
import {FontAwesomeComponent} from "./font-awesome/font-awesome.component";

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'customers',
    component: CustomersComponent
  },
  {
    path: 'accordions',
    component: AccordionsComponent
  },
  {
    path: 'pagination',
    component: PaginationComponent
  },
  {
    path: 'font-awesome',
    component: FontAwesomeComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

/*
 RouterModule.forRoot() creates a module that contains all the directives and routes
 plus the router service itself:
 https://angular.io/docs/ts/latest/api/router/index/RouterModule-class.html
 */

// the constant "Routing" is a configured RouterModule
export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);



