import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { LibsModule } from './libs/libs.module';
import { ComponentsModule } from './libs/components/components.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LandingPageComponent } from './landing-page/landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectsComponent,
    ContactComponent,
    LandingPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, LibsModule, ComponentsModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
