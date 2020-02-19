import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FranchiseRoutingModule } from "./franchise-routing.module";
import { FranchiseComponent } from "./franchise/franchise.component";
import { ContactFormComponent } from "../../shared/contact-form/contact-form/contact-form.component";

@NgModule({
  declarations: [FranchiseComponent, ContactFormComponent],
  imports: [CommonModule, FranchiseRoutingModule]
})
export class FranchiseModule {}
