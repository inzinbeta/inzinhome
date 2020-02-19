import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BrpComponent } from "./brp/brp.component";

const routes: Routes = [
  {
    path: "",
    component: BrpComponent,
    data: { title: "NgX Table", breadcrumb: "NgX Table" }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrpRoutingModule {}
