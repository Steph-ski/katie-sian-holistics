import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private router: Router) {}

  ngAfterViewInit(): void {
    const burger = document.getElementById('burgerMenu');
    const navMenu = document.getElementById('navMenu');

    if (burger && navMenu) {
      burger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
      });
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

}
