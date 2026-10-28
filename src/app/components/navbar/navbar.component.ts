import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PORTFOLIO_DATA } from '../../data/portfolio.data';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  portfolio = PORTFOLIO_DATA;
  isScrolled = signal<boolean>(false);
  isMobileMenuOpen = signal<boolean>(false);
  activeSection = signal<string>('home');

  navItems = [
    { label: 'Home', target: 'home', icon: 'fa-solid fa-house' },
    { label: 'About', target: 'about', icon: 'fa-solid fa-user' },
    { label: 'Skills', target: 'skills', icon: 'fa-solid fa-code' },
    { label: 'Experience', target: 'experience', icon: 'fa-solid fa-briefcase' },
    { label: 'Projects', target: 'projects', icon: 'fa-solid fa-diagram-project' },
    { label: 'Education', target: 'education', icon: 'fa-solid fa-graduation-cap' },
    { label: 'Contact', target: 'contact', icon: 'fa-solid fa-envelope' }
  ];

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled.set(window.scrollY > 30);
    this.updateActiveSection();
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen.update((v) => !v);
  }

  closeMobileMenu() {
    this.isMobileMenuOpen.set(false);
  }

  scrollToSection(sectionId: string, event?: Event) {
    if (event) {
      event.preventDefault();
    }
    this.closeMobileMenu();
    this.activeSection.set(sectionId);

    const element = document.getElementById(sectionId);
    if (element) {
      const navOffset = 76;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

  private updateActiveSection() {
    const scrollPosition = window.scrollY + 120;
    for (const item of this.navItems) {
      const section = document.getElementById(item.target);
      if (section) {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        if (scrollPosition >= top && scrollPosition < top + height) {
          this.activeSection.set(item.target);
          break;
        }
      }
    }
  }
}
