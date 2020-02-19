import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TermsComponent } from "./terms/terms.component";

const routes: Routes = [
  {
    path: "",
    component: TermsComponent,
    data: { title: "NgX Table", breadcrumb: "NgX Table" }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TermsRoutingModule {}
