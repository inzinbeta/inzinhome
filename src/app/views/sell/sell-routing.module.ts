import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SellComponent } from "./sell/sell.component";

const routes: Routes = [
  {
    path: "",
    component: SellComponent,
    data: { title: "NgX Table", breadcrumb: "NgX Table" }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellRoutingModule {}
