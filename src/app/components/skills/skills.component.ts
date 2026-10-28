import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PORTFOLIO_DATA, SkillCategory } from '../../data/portfolio.data';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  portfolio = PORTFOLIO_DATA;
  selectedFilter = signal<string>('all');

  filterOptions = [
    { id: 'all', label: 'All Disciplines' },
    { id: 'backend', label: 'Backend & Frameworks' },
    { id: 'database', label: 'Database & ORM' },
    { id: 'api', label: 'API & Architecture' },
    { id: 'web-tools', label: 'Web & Tools' }
  ];

  setFilter(filterId: string) {
    this.selectedFilter.set(filterId);
  }

  isCategoryVisible(category: SkillCategory): boolean {
    const filter = this.selectedFilter();
    if (filter === 'all') return true;

    if (filter === 'backend') {
      return (
        category.title === 'Programming Languages' ||
        category.title === 'Frameworks'
      );
    }

    if (filter === 'database') {
      return (
        category.title === 'Database Technologies' ||
        category.title === 'ORM & Data Access'
      );
    }

    if (filter === 'api') {
      return category.title === 'API & Architecture';
    }

    if (filter === 'web-tools') {
      return (
        category.title === 'Web Technologies' ||
        category.title === 'Tools & Concepts' ||
        category.title === 'Additional Familiarity'
      );
    }

    return true;
  }
}
