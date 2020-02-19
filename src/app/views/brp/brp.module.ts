import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrpRoutingModule } from './brp-routing.module';
import { BrpComponent } from './brp/brp.component';


@NgModule({
  declarations: [BrpComponent],
  imports: [
    CommonModule,
    BrpRoutingModule
  ]
})
export class BrpModule { }
