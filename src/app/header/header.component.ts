import { Component, ElementRef, HostListener, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    imports: [],
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit {
  isMenuOpen = false;

  // NEW: track each dropdown separately
  openDropdown: string | null = null;

  constructor(
    private router: Router,
    private eRef: ElementRef
  ) {}

  ngAfterViewInit(): void {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleDropdown(event: Event, dropdownName: string) {
    event.stopPropagation();
    this.openDropdown =
      this.openDropdown === dropdownName ? null : dropdownName;
  }

  closeMenu() {
    this.isMenuOpen = false;
    this.openDropdown = null;
  }

  @HostListener('document:click', ['$event'])
  handleClickOutside(event: Event) {
    if (
      (this.isMenuOpen || this.openDropdown) &&
      !this.eRef.nativeElement.contains(event.target)
    ) {
      this.isMenuOpen = false;
      this.openDropdown = null;
    }
  }

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
