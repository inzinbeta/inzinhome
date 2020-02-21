import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { IndexRoutingModule } from "./index.routing";
import { IndexComponent } from "./index/index.component";
import { CarouselModule } from "ngx-owl-carousel-o";
import { RatingModule } from "ng-starrating";
import { AgGridModule } from "ag-grid-angular";

@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    IndexRoutingModule,
    CarouselModule,
    RatingModule,
    AgGridModule
  ]
})
export class IndexModule {}
