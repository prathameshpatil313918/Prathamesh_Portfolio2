export interface SkillCategory {
  title: string;
  icon: string;
  description: string;
  skills: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  isCurrent?: boolean;
  points: string[];
  technologies: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  type: string;
  year: string;
  role: string;
  isFeatured?: boolean;
  description: string;
  image?: string;
  architectureImage?: string;
  responsibilities: string[];
  technologies: string[];
  metrics?: { label: string; value: string }[];
  liveUrl?: string;
  sourceUrl?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  duration: string;
  score?: string;
  focus: string[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: 'Prathamesh Patil',
    title: '.NET Developer',
    roleTagline: 'C# • ASP.NET Core • Web API • SQL Server • ADO.NET',
    experienceYears: '1.5 Years',
    phone: '+91 9553595362',
    email: 'prathameshpatil313918@gmail.com',
    location: 'Amravati, Maharashtra / Hyderabad, Telangana',
    resumeUrl: 'assets/Prathamesh_Patil_Resume_2026.pdf',
    resumeFileName: 'Prathamesh_Patil_Resume_2026.pdf',
    headline: 'Backend Application Development with C#, ASP.NET Web API, and SQL Server',
    animatedRoles: [
      '.NET Developer',
      'Backend Engineer',
      'ASP.NET Core & Web API Specialist',
      'SQL Server & Database Enthusiast'
    ],
    objective:
      '.NET Developer with 1.5 years of experience in backend application development using C#, ASP.NET Web API, SQL Server, and ADO.NET. Experienced in developing and maintaining REST APIs, writing and modifying SQL queries and stored procedures, and implementing email logging functionality. Skilled in API testing using Postman, debugging backend issues, validating database operations, and resolving application defects. Familiar with Angular and experienced in collaborating with team members to implement backend enhancements based on business requirements.',
    stats: [
      { label: 'Experience', value: '1.5 Years', sub: 'Backend Application Dev' },
      { label: 'Core Frameworks', value: '.NET Core & Web API', sub: 'C#, ADO.NET, EF Core' },
      { label: 'Database Operations', value: 'SQL Server', sub: 'Stored Procs, Joins & Views' },
      { label: 'Education', value: 'B.E. (CSE)', sub: 'Sant Gadge Baba Amravati Univ.' }
    ]
  },

  skillsCategories: [
    {
      title: 'Programming Languages',
      icon: 'fa-solid fa-code',
      description: 'Core backend and query languages for enterprise business logic',
      skills: ['C#', 'SQL']
    },
    {
      title: 'Frameworks',
      icon: 'fa-solid fa-cubes',
      description: 'Robust Microsoft .NET frameworks for modern web services',
      skills: ['ASP.NET Core MVC', 'ASP.NET MVC', '.NET Core']
    },
    {
      title: 'Database Technologies',
      icon: 'fa-solid fa-database',
      description: 'Relational data modeling, querying, optimization, and stored logic',
      skills: ['SQL Server', 'Stored Procedures', 'Joins', 'Views']
    },
    {
      title: 'ORM & Data Access',
      icon: 'fa-solid fa-network-wired',
      description: 'High-performance database connectivity and querying mechanisms',
      skills: ['Entity Framework Core', 'ADO.NET', 'LINQ']
    },
    {
      title: 'API & Architecture',
      icon: 'fa-solid fa-gears',
      description: 'Designing, exposing, and maintaining structured backend architectures',
      skills: [
        'RESTful APIs',
        'ASP.NET Web API',
        'MVC Architecture',
        'Dependency Injection'
      ]
    },
    {
      title: 'Web Technologies',
      icon: 'fa-solid fa-desktop',
      description: 'Responsive user interface markup, styling, and client-side scripting',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'jQuery']
    },
    {
      title: 'Tools & Concepts',
      icon: 'fa-solid fa-toolbox',
      description: 'Development IDEs, version control, and core software engineering concepts',
      skills: [
        'Visual Studio',
        'Git',
        'GitHub',
        'OOP (Object-Oriented Programming)',
        'CRUD Operations',
        'Debugging'
      ]
    },
    {
      title: 'Additional Familiarity',
      icon: 'fa-brands fa-angular',
      description: 'Frontend client-side engineering framework familiarity',
      skills: ['Angular']
    }
  ] as SkillCategory[],

  experience: [
    {
      role: '.NET Developer',
      company: 'SOFTROUTE INFO TECHNOLOGIES PRIVATE LIMITED',
      location: 'Telangana, India',
      period: 'May 2025 – September 2026',
      type: 'Full-time',
      isCurrent: false,
      points: [
        'Developed and maintained backend functionalities using C# and ASP.NET Web API to meet business requirements and support application enhancements.',
        'Created and modified SQL queries and stored procedures to support data retrieval, updates, and application-specific database operations.',
        'Used ADO.NET to interact with SQL Server and validate database operations associated with backend API functionality.',
        'Analyzed API request payloads, investigated unexpected responses, and resolved backend defects through debugging.',
        'Implemented email logging functionality to store recipient details, project information, and email status in SQL Server.',
        'Tested REST API endpoints using Postman and verified request parameters, response data, and database records.',
        'Collaborated with team members to understand business requirements, troubleshoot technical issues, and implement backend changes.'
      ],
      technologies: [
        'C#',
        'ASP.NET Web API',
        'SQL Server',
        'ADO.NET',
        'Stored Procedures',
        'Postman',
        'Email Logging',
        'Debugging'
      ]
    },
    {
      role: 'Quality Assurance (QA) Associate',
      company: 'Siyaram Silk Mills',
      location: 'Maharashtra, India',
      period: 'July 2024 – March 2025',
      type: 'Full-time',
      isCurrent: false,
      points: [
        'Performed quality inspections on textile products to identify defects and maintain product quality standards.',
        'Inspected fabric for visible defects and quality issues during the production process.',
        'Recorded inspection findings and reported quality issues to the concerned team.',
        'Coordinated with production team members to support quality control procedures.'
      ],
      technologies: [
        'Quality Assurance',
        'Defect Identification',
        'Inspection Reporting',
        'Process Quality Control'
      ]
    }
  ] as ExperienceItem[],

  projects: [
    {
      id: 'smartpark',
      title: 'Online Parking Management System (SmartPark)',
      subtitle: 'Smart Vehicle Parking, Gate Security & Payment Automation',
      type: 'Full-Stack .NET 8 MVC Application',
      year: '2024',
      role: 'Full-Stack .NET Developer',
      isFeatured: true,
      image: 'assets/parking-showcase.jpg',
      architectureImage: 'assets/smartpark-architecture.jpg',
      description:
        'A comprehensive full-stack enterprise web application for parking slot reservation, gate security automation, and payment processing built using ASP.NET Core 8 MVC, Entity Framework Core 8, and SQL Server.',
      responsibilities: [
        'Developed a full-stack web application for parking slot reservation and management using ASP.NET MVC and SQL Server.',
        'Implemented 3-tier Role-Based Access Control (Admin, Gate Security / Ticket Checker, Customer) with secure Cookie Authentication and BCrypt password hashing.',
        'Integrated Razorpay & Stripe Payment Gateways for secure checkout processing, order verification, and automated payment receipts.',
        'Engineered digital parking passes featuring dynamic QR codes (qrcode.js) and Barcodes (JsBarcode), with camera-based live ticket scanning via ZXing for gate check-in/out.',
        'Implemented dynamic pricing algorithms (IParkingPricingService) based on vehicle classification (Car, Bike, SUV, EV), duration, and automated overstay penalty calculations.',
        'Utilized Entity Framework Core 8 with Code-First migrations, unique index constraints, and automated database seeding for parking slots and role credentials.',
        'Designed modern, responsive user interfaces using HTML5, CSS3, JavaScript, and Bootstrap 5.3 with interactive floor and bay occupancy status.'
      ],
      technologies: [
        'C#',
        'ASP.NET Core 8 MVC',
        'SQL Server',
        'Entity Framework Core 8',
        'Razorpay & Stripe',
        'BCrypt Security',
        'QR Code (qrcode.js)',
        'Barcode (JsBarcode)',
        'Camera Scanner (ZXing)',
        'Bootstrap 5.3'
      ],
      metrics: [
        { label: 'Architecture', value: 'ASP.NET Core 8 MVC' },
        { label: 'Database & ORM', value: 'SQL Server + EF Core 8' },
        { label: 'Security & Auth', value: '3-Tier RBAC + BCrypt' },
        { label: 'Gate Automation', value: 'Live QR/Barcode ZXing' }
      ]
    },
    {
      id: 'isg-tango',
      title: 'ISG Tango – Sourcing Solution Platform',
      subtitle: 'Enterprise Digital Sourcing & Service Provider Evaluation',
      type: 'Enterprise .NET Web API & Database Maintenance',
      year: '2025 – 2026',
      role: 'Backend .NET Developer',
      isFeatured: false,
      description:
        'An enterprise digital sourcing platform that helps organizations manage technology sourcing activities, evaluate service providers, and support sourcing decisions.',
      responsibilities: [
        'Maintained and enhanced REST APIs using C# and ASP.NET Web API to implement changes based on business requirements.',
        'Created and modified SQL queries and stored procedures to support application data retrieval and database operations using SQL Server and ADO.NET.',
        'Implemented and maintained email logging functionality to record recipient details, project information, and email status in SQL Server.',
        'Investigated API request payload issues, debugged backend defects, and implemented fixes to address application issues.',
        'Tested REST API endpoints using Postman and verified API responses and database records to validate functionality.'
      ],
      technologies: [
        'C#',
        'ASP.NET Web API',
        'SQL Server',
        'ADO.NET',
        'Angular',
        'Postman',
        'Stored Procedures',
        'Email Logging'
      ],
      metrics: [
        { label: 'Engineering Role', value: 'Backend Development & API Maintenance' },
        { label: 'Data Access', value: 'ADO.NET & Stored Procedures' },
        { label: 'Feature Delivery', value: 'Email Audit & Status Logging' },
        { label: 'Validation', value: 'Postman Integration Testing' }
      ]
    }
  ] as ProjectItem[],

  education: [
    {
      degree: 'Bachelor of Engineering (CSE)',
      institution: 'Sant Gadge Baba Amravati University',
      location: 'Maharashtra, India',
      duration: '2020 – 2024',
      score: '71.10%',
      focus: [
        'Computer Science and Engineering core curriculum',
        'Object-Oriented Programming (OOP) and Software Design',
        'Relational Database Management Systems (RDBMS) & SQL',
        'Data Structures, Algorithms, and Operating Systems'
      ]
    },
    {
      degree: '.NET Full Stack Development Training',
      institution: 'Naresh IT',
      location: 'Hyderabad, Telangana',
      duration: '2025 – 2026',
      score: 'Completed',
      focus: [
        'C#, ASP.NET Core MVC, Web API, and Entity Framework Core',
        'SQL Server database management, stored procedures, and CRUD operations',
        'RESTful API architecture, Dependency Injection, and Repository Pattern',
        'Frontend integration with Angular and Bootstrap'
      ]
    }
  ] as EducationItem[]
};
