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

  ngOnInit() {
    // this.scroller.scrollToAnchor('landingPage');
  }

  onJumpToLandingPage() {
    this.scroller.scrollToAnchor('landingPage');
  }
  onJumpToProjects() {
    this.scroller.scrollToAnchor('projects');
  }
  onJumpToContact() {
    this.scroller.scrollToAnchor('contact');
  }
  onJumpToResume() {
    this.scroller.scrollToAnchor('resume');
  }
}
