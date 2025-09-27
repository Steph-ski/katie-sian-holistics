import { Component, ElementRef, HostListener, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit {
  isDropdownOpen = false;
  isMenuOpen = false;

  constructor(private router: Router, private eRef: ElementRef) {}

  ngAfterViewInit(): void {
    // Nothing needed here for burger menu — handled via Angular bindings
  }

  // Toggle burger menu open/close
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // Toggle dropdown open/close
  toggleDropdown(event: Event) {
    event.stopPropagation(); // prevent document click from closing immediately
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  // Close both dropdown and burger menu
  closeMenu() {
    this.isMenuOpen = false;
    this.isDropdownOpen = false;
  }

  // Close dropdown when clicking outside
  @HostListener('document:click', ['$event'])
  handleClickOutside(event: Event) {
    if (this.isDropdownOpen && !this.eRef.nativeElement.contains(event.target)) {
      this.isDropdownOpen = false;
    }

    if (this.isMenuOpen && !this.eRef.nativeElement.contains(event.target)) {
      this.isMenuOpen = false;
    }
  }

  // Navigation methods with smooth scroll
  goHome() {
    if (this.router.url === '/') {
      const el = document.getElementById('top');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      this.router.navigate(['/']).then(() => {
        const el = document.getElementById('top');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      });
    }
    this.closeMenu();
  }

  goToAbout() {
    if (this.router.url === '/') {
      const el = document.getElementById('about');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      this.router.navigate(['/']).then(() => {
        const el = document.getElementById('about');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      });
    }
    this.closeMenu();
  }

  goToServices() {
    if (this.router.url === '/') {
      const el = document.getElementById('services');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      this.router.navigate(['/']).then(() => {
        const el = document.getElementById('services');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      });
    }
    this.closeMenu();
  }

  goToContact() {
    if (this.router.url === '/') {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      this.router.navigate(['/']).then(() => {
        const el = document.getElementById('contact');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      });
    }
    this.closeMenu();
  }
}
