import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { ContactFormComponent } from "./contact-form/contact-form.component";

@NgModule({
  declarations: [ContactFormComponent],
  imports: [CommonModule, FormsModule]
})
export class ContactFormModule {}
