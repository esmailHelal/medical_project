import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./layout/header/header.component";
import { FooterComponent } from "./layout/footer/footer.component";
import { HomeComponent } from "./view/home/home.component";
import { AboutComponent } from "./view/about/about.component";
import { ContactComponent } from "./view/contact/contact.component";
import { AgmCoreModule } from "@agm/core";
import { FAQComponent } from "./view/faq/faq.component";
import { BlogComponent } from "./view/blog/blog.component";
import { LoginOrRegisterComponent } from "./view/login-or-register/login-or-register.component";
import { ProductsComponent } from "./view/products/products.component";
import { AdminFormComponent } from "./view/admin-form/admin-form.component";
import { LoginformComponent } from "./view/loginform/loginform.component";
import { AddarticleComponent } from "./view/addarticle/addarticle.component";
import { HeaderandnavsideComponent } from "./layout/headerandnavside/headerandnavside.component";
import { AuthInterceptor } from "./services/user-intersptor";
import { OwlModule } from "ngx-owl-carousel";
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    FAQComponent,
    BlogComponent,
    LoginOrRegisterComponent,
    ProductsComponent,
    AdminFormComponent,
    LoginformComponent,
    AddarticleComponent,
    HeaderandnavsideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyCk0z_gUqpiS_pwTbX9htHY2b-1Er9XXIc"
    }),
    FormsModule,
    HttpClientModule,
    OwlModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
