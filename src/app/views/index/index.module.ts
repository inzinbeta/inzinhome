import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { IndexRoutingModule } from "./index.routing";
import { IndexComponent } from "./index/index.component";
import { CarouselModule } from "ngx-owl-carousel-o";
// import { RatingModule } from "ng-starrating";

@NgModule({
  declarations: [IndexComponent],
  imports: [CommonModule, IndexRoutingModule, CarouselModule]
})
export class IndexModule {}
