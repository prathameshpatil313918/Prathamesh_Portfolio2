import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PORTFOLIO_DATA, ProjectItem } from '../../data/portfolio.data';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  portfolio = PORTFOLIO_DATA;

  // Media preview tabs for SmartPark
  selectedImageTab = signal<'showcase' | 'architecture'>('showcase');

  setImageTab(tab: 'showcase' | 'architecture') {
    this.selectedImageTab.set(tab);
  }

  get featuredProject(): ProjectItem | undefined {
    return this.portfolio.projects.find((p) => p.isFeatured);
  }

  get otherProjects(): ProjectItem[] {
    return this.portfolio.projects.filter((p) => !p.isFeatured);
  }
}
