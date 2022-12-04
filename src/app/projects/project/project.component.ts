import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../../shared/types/project.interface';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
  @Input() project: Project;
  areTechnologiesShown: boolean = false;
  areFeaturesShown: boolean = false;

  constructor() {}

  ngOnInit(): void {
    console.log(this.project);
  }

  openLink(link: string) {
    window.open(link);
  }

  showTechnologies() {
    this.areTechnologiesShown = !this.areTechnologiesShown;
  }

  showFeatures() {
    this.areFeaturesShown = !this.areFeaturesShown;
  }
}
