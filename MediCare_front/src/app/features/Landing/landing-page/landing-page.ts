import { Component } from '@angular/core';
import { Navbar } from "../../../shared/components/navbar/navbar";
import { Footer } from "../../../shared/components/footer/footer";

@Component({
  selector: 'app-landing-page',
  imports: [Navbar],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css'
})
export class LandingPage {
  isOpen: boolean = false;

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }
}
