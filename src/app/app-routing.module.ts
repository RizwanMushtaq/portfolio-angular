import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorPageComponent } from './libs/components/error-page/error-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: 'home', component: HomeComponent },
  // { path: 'projects', component: ProjectsComponent },
  // { path: 'contact', component: ContactComponent },
  { path: 'not-found', component: ErrorPageComponent },
  { path: '**', redirectTo: 'not-found', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
