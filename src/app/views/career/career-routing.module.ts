import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CareerComponent } from "./career/career.component";

const routes: Routes = [
  {
    path: "",
    component: CareerComponent,
    data: { title: "NgX Table", breadcrumb: "NgX Table" }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CareerRoutingModule {}
