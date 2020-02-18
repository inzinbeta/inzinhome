import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SigninComponent } from "./signin/signin.component";

const routes: Routes = [
  {
    path: "",
    component: SigninComponent,
    data: { title: "NgX Table", breadcrumb: "NgX Table" }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SigninRoutingModule {}
