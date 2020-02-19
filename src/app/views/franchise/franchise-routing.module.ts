import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FranchiseComponent } from "./franchise/franchise.component";

const routes: Routes = [
  {
    path: "",
    component: FranchiseComponent,
    data: { title: "NgX Table", breadcrumb: "NgX Table" }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FranchiseRoutingModule {}
