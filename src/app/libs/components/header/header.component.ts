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
  }
  scrollToProjects() {
    this.isOpen = !this.isOpen;
    this.jumpToProjects.emit();
  }
  // scrollToContact() {
  //   this.isOpen = !this.isOpen;
  //   this.jumpToContact.emit();
  // }
}
