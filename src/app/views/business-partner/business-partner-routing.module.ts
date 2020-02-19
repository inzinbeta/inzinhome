import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BusinessPartnerComponent } from "./business-partner/business-partner.component";

const routes: Routes = [
  {
    path: "",
    component: BusinessPartnerComponent,
    data: { title: "NgX Table", breadcrumb: "NgX Table" }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessPartnerRoutingModule {}
