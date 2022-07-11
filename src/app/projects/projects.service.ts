import { Injectable } from '@angular/core';
import { DoItNowAppReact } from './projectsData/doitnow-app-react';
import { DoItNowServiceExpress } from './projectsData/doitnow-service-express';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  constructor() {}

  getProjects() {
    return [DoItNowAppReact, DoItNowServiceExpress];
  }
}
