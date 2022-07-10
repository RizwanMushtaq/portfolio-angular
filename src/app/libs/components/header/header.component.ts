import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() jumpToLandingPage = new EventEmitter();
  @Output() jumpToProjects = new EventEmitter();
  @Output() jumpToContact = new EventEmitter();
  isOpen = false;

  constructor() {}
  ngOnInit(): void {}

  clicked() {
    this.isOpen = !this.isOpen;
  }

  scrollToLandingPage() {
    this.isOpen = !this.isOpen;
    this.jumpToLandingPage.emit();
    // @ts-ignore
    // document
    //   .getElementById('LandingPage')
    //   .scrollIntoView({ behavior: 'smooth' });
  }
  scrollToProjects() {
    this.isOpen = !this.isOpen;
    this.jumpToProjects.emit();
    // @ts-ignore
    // document.getElementById('Projects').scrollIntoView({ behavior: 'smooth' });
  }
  scrollToContact() {
    this.isOpen = !this.isOpen;
    this.jumpToContact.emit();
    // @ts-ignore
    // document.getElementById('Contact').scrollIntoView({ behavior: 'smooth' });
  }
}
