import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  ngAfterViewInit(): void {
    const burger = document.getElementById('burgerMenu');
    const navMenu = document.getElementById('navMenu');

    if (burger && navMenu) {
      burger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
      });
    }
  }

}
