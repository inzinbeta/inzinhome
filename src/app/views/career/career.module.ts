import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CareerRoutingModule } from "./career-routing.module";
import { CareerComponent } from "./career/career.component";
import { ContactFormComponent } from "../../shared/contact-form/contact-form/contact-form.component";

@NgModule({
  declarations: [CareerComponent, ContactFormComponent],
  imports: [CommonModule, CareerRoutingModule]
})
export class CareerModule {}
