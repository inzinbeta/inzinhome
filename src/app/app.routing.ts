import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeLayoutComponent } from "./shared/home-layout/home-layout.component";

export const rootRouterConfig: Routes = [
  {
    path: "",
    component: HomeLayoutComponent,
    canActivate: [],
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./views/index/index.module").then(m => m.IndexModule),
        data: { title: "Admin" }
      },
      {
        path: "contact",
        loadChildren: () =>
          import("./views/contact/contact.module").then(m => m.ContactModule),
        data: { title: "Admin" }
      },
      {
        path: "about",
        loadChildren: () =>
          import("./views/about/about.module").then(m => m.AboutModule),
        data: { title: "Admin" }
      },
      {
        path: "login",
        loadChildren: () =>
          import("./views/login/login.module").then(m => m.LoginModule),
        data: { title: "Admin" }
      },
      {
        path: "sell-with-us",
        loadChildren: () =>
          import("./views/sell/sell.module").then(m => m.SellModule),
        data: { title: "Admin" }
      },
      {
        path: "terms",
        loadChildren: () =>
          import("./views/terms/terms.module").then(m => m.TermsModule),
        data: { title: "Admin" }
      },
      {
        path: "franchise",
        loadChildren: () =>
          import("./views/franchise/franchise.module").then(
            m => m.FranchiseModule
          ),
        data: { title: "Admin" }
      },
      {
        path: "services",
        loadChildren: () =>
          import("./views/services/services.module").then(
            m => m.ServicesModule
          ),
        data: { title: "Admin" }
      },
      {
        path: "automotive",
        loadChildren: () =>
          import("./views/categories/categories.module").then(
            m => m.CategoriesModule
          ),
        data: { title: "Admin" }
      },
      {
        path: "business-partner",
        loadChildren: () =>
          import("./views/business-partner/business-partner.module").then(
            m => m.BusinessPartnerModule
          ),
        data: { title: "Admin" }
      },
      {
        path: "business-referral-program",
        loadChildren: () =>
          import("./views/brp/brp.module").then(m => m.BrpModule),
        data: { title: "Admin" }
      },
      {
        path: "career",
        loadChildren: () =>
          import("./views/career/career.module").then(m => m.CareerModule),
        data: { title: "Admin" }
      }
    ]
  },

  {
    path: "user",
    component: HomeLayoutComponent,
    canActivate: [],
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./views/index/index.module").then(m => m.IndexModule),
        data: { title: "Admin" }
      },
      {
        path: "contact",
        loadChildren: () =>
          import("./views/contact/contact.module").then(m => m.ContactModule),
        data: { title: "Admin" }
      },
      {
        path: "about",
        loadChildren: () =>
          import("./views/about/about.module").then(m => m.AboutModule),
        data: { title: "Admin" }
      }
    ]
  }
];
