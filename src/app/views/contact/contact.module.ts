import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ContactRoutingModule } from "./contact-routing.module";
import { ContactComponent } from "./contact/contact.component";
import { ContactFormComponent } from "../../shared/contact-form/contact-form/contact-form.component";

@NgModule({
  declarations: [ContactComponent, ContactFormComponent],
  imports: [CommonModule, ContactRoutingModule]
})
export class ContactModule {}
