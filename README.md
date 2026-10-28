# Prathamesh Patil — .NET Developer Portfolio

A modern, premium, attractive, and responsive Developer Portfolio website engineered with **Angular (Standalone Architecture)**, designed specifically for **Prathamesh Patil (.NET Developer with 1.5 Years of Experience)**.

---

## 💎 Redesign & Visual Highlights

1. **Modern Hero Section**:
   - High-impact first impression featuring developer name, experience badge, and introduction.
   - **Interactive animated role typing**: Cycles through *.NET Developer*, *Backend Engineer*, *ASP.NET Core & Web API Specialist*, and *SQL Server & Database Enthusiast*.
   - **Profile Image & Developer Frame**: Glowing multi-ring glassmorphic frame with floating tech pills (`#C#`, `#.NET 8`, `#SQL Server`, `#Web API`) and live verification beacon.
   - Clear call-to-action buttons: **“View My Projects”**, **“Download Resume”**, and **“Contact Me”**.

2. **Premium Dark Glassmorphic Theme**:
   - Deep navy background (`#070d1a`, `#0a1329`) with subtle radial gradients of cyan, indigo, and purple.
   - Frosted glass cards (`backdrop-filter: blur(16px)`), luminous borders, soft drop shadows, and glowing accent highlights.
   - High-contrast typography with `Plus Jakarta Sans` and `JetBrains Mono`.

3. **Prominent Flagship Project Showcase**:
   - **Online Parking Management System (SmartPark)**:
     - Flagship project card with an interactive browser mockup frame.
     - Interactive media tabs switching between **Live App Screenshot** (`parking-showcase.jpg`) and **System Architecture Diagram** (`smartpark-architecture.jpg`).
     - Full feature breakdown: ASP.NET Core 8 MVC, EF Core 8, 3-Tier RBAC, BCrypt security, Razorpay & Stripe integration, QR/Barcode generation & ZXing camera scanner, dynamic vehicle pricing.
   - **ISG Tango – Sourcing Solution Platform**:
     - Enterprise digital sourcing platform maintenance, backend REST APIs, SQL Server stored procedures, ADO.NET connectivity, email logging, and Postman API testing.

4. **Technical Skills Categorization**:
   - Categorized into *Programming Languages*, *Frameworks*, *Database Technologies*, *ORM & Data Access*, *API & Architecture*, *Web Technologies*, *Tools & Concepts*, and *Additional Familiarity (Angular)*.
   - Interactive filter pills to filter categories smoothly.

5. **Career Journey Timeline**:
   - Visual vertical timeline with glowing connection track and distinct role icons.
   - Documented experience:
     - *.NET Developer* at **SOFTROUTE INFO TECHNOLOGIES PRIVATE LIMITED** (May 2025 – Sept 2026)
     - *Quality Assurance (QA) Associate* at **Siyaram Silk Mills** (July 2024 – March 2025)

6. **Academic Background**:
   - Bachelor of Engineering (Computer Science & Engineering) from *Sant Gadge Baba Amravati University* (2020 – 2024, 71.10%).
   - .NET Full Stack Development Training from *Naresh IT* (2025 – 2026, Completed).

7. **Direct Contact & Resume Download**:
   - Clickable `mailto:prathameshpatil313918@gmail.com` with quick-copy button.
   - Clickable `tel:+919553595362` with quick-copy button.
   - Interactive message form that triggers pre-filled email client dispatch.
   - Direct download for `Prathamesh_Patil_Resume.pdf`.

---

## 📁 Directory Structure

```
d:\Angular\2YOE\
├── public/
│   ├── assets/
│   │   ├── parking-showcase.jpg           # Live App Screenshot
│   │   ├── smartpark-architecture.jpg     # System Architecture Diagram
│   │   └── Prathamesh_Patil_Resume_2026.pdf    # Verified Resume PDF
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── navbar/                    # Navigation & mobile drawer
│   │   │   ├── home/                      # Hero section with animated typewriter
│   │   │   ├── about/                     # Profile card & narrative
│   │   │   ├── skills/                    # Filterable skill cards
│   │   │   ├── experience/                # Career milestone timeline
│   │   │   ├── projects/                  # SmartPark & ISG Tango showcases
│   │   │   ├── education/                 # Engineering & technical training
│   │   │   ├── contact/                   # Contact cards & interactive form
│   │   │   └── footer/                    # Footer with quick links & back-to-top
│   │   ├── data/
│   │   │   └── portfolio.data.ts          # Central data source
│   │   ├── app.component.ts
│   │   ├── app.component.html
│   │   └── app.config.ts
│   ├── index.html
│   ├── main.ts
│   └── styles.css                         # Glassmorphic dark theme design system
├── angular.json
├── package.json
└── tsconfig.json
```

---

## 🚀 Running the Project

### Development Server
```powershell
npm start
# or
ng serve
```
Open your browser at `http://localhost:4200/`.

### Production Build
```powershell
npm run build
```
Built files are generated in `dist/portfolio-2yoe/browser/` (production bundle is ~67 kB transfer size).

### GitHub Pages Build
```powershell
npm run build:gh
```
Generates production build with base href `/Prathamesh_Portfolio2/` ready for GitHub Pages hosting.
