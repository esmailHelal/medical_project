import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./view/home/home.component";
import { AboutComponent } from "./view/about/about.component";
import { ContactComponent } from "./view/contact/contact.component";
import { FAQComponent } from "./view/faq/faq.component";
import { BlogComponent } from "./view/blog/blog.component";
import { LoginOrRegisterComponent } from "./view/login-or-register/login-or-register.component";
import { ProductsComponent } from "./view/products/products.component";
import { AdminFormComponent } from "./view/admin-form/admin-form.component";
import { LoginformComponent } from "./view/loginform/loginform.component";
import { AddarticleComponent } from "./view/addarticle/addarticle.component";
const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "contact", component: ContactComponent },
  { path: "faq", component: FAQComponent },
  { path: "blog", component: BlogComponent },
  { path: "auth", component: LoginOrRegisterComponent },
  { path: "product", component: ProductsComponent },
  { path: "admain", component: AdminFormComponent },
  { path: "admain/admain", component: AdminFormComponent },
  { path: "logadmain", component: LoginformComponent },
  { path: "admain/article", component: AddarticleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
