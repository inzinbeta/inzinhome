import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CategoriesRoutingModule } from "./categories-routing.module";
import { CategoriesComponent } from "./categories/categories.component";

import { CarouselModule } from "ngx-owl-carousel-o";

@NgModule({
  declarations: [CategoriesComponent],
  imports: [CommonModule, CategoriesRoutingModule, CarouselModule]
})
export class CategoriesModule {}
