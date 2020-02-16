import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [

  { 
    path: '', 
    component:ContactComponent, 
    data: { title: 'NgX Table', breadcrumb: 'NgX Table' } 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
