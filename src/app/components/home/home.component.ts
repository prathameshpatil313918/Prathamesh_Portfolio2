import { Component, OnInit, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PORTFOLIO_DATA } from '../../data/portfolio.data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {
  portfolio = PORTFOLIO_DATA;

  // Animated Roles Cycler
  roles = PORTFOLIO_DATA.personal.animatedRoles;
  currentRoleIndex = 0;
  displayedRole = signal<string>(this.roles[0]);
  private typingInterval: any;
  private roleTimeout: any;

  ngOnInit() {
    this.startTypewriterEffect();
  }

  ngOnDestroy() {
    if (this.typingInterval) clearInterval(this.typingInterval);
    if (this.roleTimeout) clearTimeout(this.roleTimeout);
  }

  startTypewriterEffect() {
    let charIndex = 0;
    let isDeleting = false;

    const cycle = () => {
      const fullText = this.roles[this.currentRoleIndex];

      if (!isDeleting) {
        charIndex++;
        this.displayedRole.set(fullText.substring(0, charIndex));

        if (charIndex === fullText.length) {
          // Pause at full word
          this.roleTimeout = setTimeout(() => {
            isDeleting = true;
            cycle();
          }, 2200);
          return;
        }
      } else {
        charIndex--;
        this.displayedRole.set(fullText.substring(0, charIndex));

        if (charIndex === 0) {
          isDeleting = false;
          this.currentRoleIndex = (this.currentRoleIndex + 1) % this.roles.length;
        }
      }

      const speed = isDeleting ? 45 : 85;
      this.roleTimeout = setTimeout(cycle, speed);
    };

    cycle();
  }

  scrollTo(sectionId: string, event: Event) {
    event.preventDefault();
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
}
