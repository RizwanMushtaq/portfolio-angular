import { Injectable } from '@angular/core';
import { DoItNowAppAngular } from './projectsData/doitnow-app-angular';
import { DoItNowServiceNest } from './projectsData/doitnow-service-nest';
import { DoItNowAppReact } from './projectsData/doitnow-app-react';
import { DoItNowServiceExpress } from './projectsData/doitnow-service-express';
import { PrintMyTweetApp } from './projectsData/printmytweet-app';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  constructor() {}

  getProjects() {
    return [
      DoItNowAppAngular,
      DoItNowServiceNest,
      DoItNowAppReact,
      DoItNowServiceExpress,
      PrintMyTweetApp,
    ];
  }
}
