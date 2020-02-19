import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BusinessPartnerRoutingModule } from "./business-partner-routing.module";
import { BusinessPartnerComponent } from "./business-partner/business-partner.component";

@NgModule({
  declarations: [BusinessPartnerComponent],
  imports: [CommonModule, BusinessPartnerRoutingModule]
})
export class BusinessPartnerModule {}
