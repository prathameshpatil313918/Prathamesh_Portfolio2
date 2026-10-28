import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PORTFOLIO_DATA } from '../../data/portfolio.data';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  portfolio = PORTFOLIO_DATA;

  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  copiedItem = signal<string | null>(null);
  formSubmitted = signal<boolean>(false);
  formError = signal<string | null>(null);

  copyToClipboard(text: string, type: string) {
    navigator.clipboard.writeText(text).then(() => {
      this.copiedItem.set(type);
      setTimeout(() => {
        if (this.copiedItem() === type) {
          this.copiedItem.set(null);
        }
      }, 2500);
    });
  }

  onSubmit() {
    if (!this.formData.name || !this.formData.email || !this.formData.message) {
      this.formError.set('Please fill out all required fields.');
      return;
    }

    this.formError.set(null);
    this.formSubmitted.set(true);

    const subject = encodeURIComponent(
      this.formData.subject || `Opportunity Discussion from ${this.formData.name}`
    );
    const body = encodeURIComponent(
      `Name: ${this.formData.name}\nEmail: ${this.formData.email}\n\nMessage:\n${this.formData.message}`
    );
    const mailtoUrl = `mailto:${this.portfolio.personal.email}?subject=${subject}&body=${body}`;

    window.location.href = mailtoUrl;

    setTimeout(() => {
      this.formData = { name: '', email: '', subject: '', message: '' };
      this.formSubmitted.set(false);
    }, 5000);
  }
}
