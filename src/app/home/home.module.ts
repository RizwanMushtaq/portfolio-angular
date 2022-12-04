import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ComponentsModule } from '../shared/components/components.module';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { HomeAboutComponent } from './home-about/home-about.component';
import { HomeComponent } from './home.component';
import { NavbarComponent } from '../shared/components/navbar/navbar.component';

@NgModule({
  declarations: [HomeComponent, HomeHeaderComponent, HomeAboutComponent],
  imports: [CommonModule, HomeRoutingModule, ComponentsModule],
})
export class HomeModule {}
