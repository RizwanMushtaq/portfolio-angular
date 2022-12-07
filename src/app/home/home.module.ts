import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ComponentsModule } from '../shared/components/components.module';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { HomeAboutComponent } from './home-about/home-about.component';
import { HomeComponent } from './home.component';
import { HomeContactComponent } from './home-contact/home-contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    HomeHeaderComponent,
    HomeAboutComponent,
    HomeContactComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HomeRoutingModule,
    ComponentsModule,
  ],
})
export class HomeModule {}
