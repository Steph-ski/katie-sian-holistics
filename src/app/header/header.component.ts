import { Component, ElementRef, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router: Router, private eRef: ElementRef) {}

  isDropdownOpen = false;

  ngAfterViewInit(): void {
    const burger = document.getElementById('burgerMenu');
    const navMenu = document.getElementById('navMenu');

    if (burger && navMenu) {
      burger.addEventListener('click', (event) => {
        event.stopPropagation(); 
        navMenu.classList.toggle('active');
      });
    }
  }

   @HostListener('document:click', ['$event'])
  handleClickOutside(event: Event) {
    const navMenu = document.getElementById('navMenu');
    const burger = document.getElementById('burgerMenu');

    if (
      navMenu &&
      burger &&
      navMenu.classList.contains('active') &&
      !this.eRef.nativeElement.contains(event.target)
    ) {
      navMenu.classList.remove('active');
    }
  }

    goToServices() {
    this.router.navigate(['']).then(() => {
      const el = document.getElementById('services');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    });
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
}

toggleDropdown() {
  this.isDropdownOpen = !this.isDropdownOpen;
}

closeMenu() {
  const navMenu = document.getElementById('navMenu');
  if (navMenu && navMenu.classList.contains('active')) {
    navMenu.classList.remove('active');
  }
}

}
