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
  ) { }

  ngAfterViewInit(): void { }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleDropdown(dropdownName: string) {
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

goToServices() {
  this.closeMenu();

  if (this.router.url !== '/') {
    this.router.navigate(['/']).then(() => {
      setTimeout(() => {
        const el = document.getElementById('services');
        el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 0);
    });
  } else {
    setTimeout(() => {
      const el = document.getElementById('services');
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 0);
  }
}

goToAbout() {
  this.closeMenu();

  if (this.router.url !== '/') {
    this.router.navigate(['/']).then(() => {
      setTimeout(() => {
        const el = document.getElementById('about');
        el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 0);
    });
  } else {
    setTimeout(() => {
      const el = document.getElementById('about');
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 0);
  }
}

goToContact() {
  this.closeMenu();

  if (this.router.url !== '/') {
    this.router.navigate(['/']).then(() => {
      setTimeout(() => {
        const el = document.getElementById('contact');
        el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 0);
    });
  } else {
    setTimeout(() => {
      const el = document.getElementById('contact');
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 0);
  }
}

goHome() {
  this.closeMenu();

  if (this.router.url !== '/') {
    this.router.navigate(['/']).then(() => {
      setTimeout(() => {
        const el = document.getElementById('top');
        el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 0);
    });
  } else {
    setTimeout(() => {
      const el = document.getElementById('top');
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 0);
  }
}
  
}
