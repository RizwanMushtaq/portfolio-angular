import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Output() jumpToLandingPage = new EventEmitter();
  @Output() jumpToAbout = new EventEmitter();
  @Output() jumpToContact = new EventEmitter();
  public isOpen = false;

  ngOnInit(): void {}

  clicked() {
    this.isOpen = !this.isOpen;
  }

  scrollToLandingPage() {
    this.isOpen = !this.isOpen;
    this.jumpToLandingPage.emit();
  }
  scrollToAbout() {
    this.isOpen = !this.isOpen;
    this.jumpToAbout.emit();
  }
  scrollToContact() {
    this.isOpen = !this.isOpen;
    this.jumpToContact.emit();
  }
}
