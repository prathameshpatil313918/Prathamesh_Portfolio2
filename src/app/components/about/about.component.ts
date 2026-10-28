import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PORTFOLIO_DATA } from '../../data/portfolio.data';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  portfolio = PORTFOLIO_DATA;

  coreHighlights = [
    {
      icon: 'fa-solid fa-server',
      title: 'Backend & REST APIs',
      desc: 'Developing and maintaining robust RESTful APIs using C# and ASP.NET Web API to support enterprise business workflows.'
    },
    {
      icon: 'fa-solid fa-database',
      title: 'SQL Server & ADO.NET',
      desc: 'Writing optimized SQL queries, stored procedures, joins, and views with ADO.NET for high-performance database connectivity.'
    },
    {
      icon: 'fa-solid fa-bug-slash',
      title: 'Debugging & Validation',
      desc: 'Investigating API request payloads, troubleshooting unexpected responses, validating database integrity, and testing with Postman.'
    },
    {
      icon: 'fa-brands fa-angular',
      title: 'Frontend Integration',
      desc: 'Familiar with Angular components and responsive design, collaborating smoothly with teams for seamless end-to-end delivery.'
    }
  ];
}
