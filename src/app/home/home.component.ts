import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router, private scroller: ViewportScroller) {}

  ngOnInit() {}

  onJumpToLandingPage() {
    // this.scroller.scrollToAnchor('landing-page');
    this.router.navigate(['/'], { fragment: 'landing-page' });
  }
  onJumpToAbout() {
    this.scroller.scrollToAnchor('about-section');
    // this.router.navigate([''], { fragment: 'about-section' });
  }
  onJumpToContact() {
    this.scroller.scrollToAnchor('contact-section');
    // this.router.navigate([''], { fragment: 'contact-section' });
  }
}
