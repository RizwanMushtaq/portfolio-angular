import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Output() jumpToLandingPage = new EventEmitter();
  @Output() jumpToProjects = new EventEmitter();
  @Output() jumpToContact = new EventEmitter();
  @Output() jumpToResume = new EventEmitter();
  public isOpen = false;

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
  scrollToResume() {
    this.isOpen = !this.isOpen;
    this.jumpToResume.emit();
  }
}
