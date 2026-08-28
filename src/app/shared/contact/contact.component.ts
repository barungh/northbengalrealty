import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  submitted = false;

  enquiryTypes = [
    'Buy a Property',
    'Sell a Property',
    'Land for Sale',
    'Title / Legal Dispute',
    'Investment Consultation',
    'General Enquiry',
  ];

  districts = [
    'Siliguri', 'Bagdogra', 'Matigara', 'Jalpaiguri',
    'Falakata', 'Alipurduar', 'Coochbehar',
    'Darjeeling', 'Kalimpong', 'Gangtok', 'Other',
  ];

  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[6-9]\d{9}$/),
    ]),
    enquiryType: new FormControl('', [Validators.required]),
    district: new FormControl(''),
    message: new FormControl('', [Validators.required, Validators.minLength(10)]),
  });

  get nameError(): boolean {
    const c = this.form.get('name');
    return !!(c?.invalid && (c.dirty || c.touched || this.submitted));
  }

  get phoneError(): boolean {
    const c = this.form.get('phone');
    return !!(c?.invalid && (c.dirty || c.touched || this.submitted));
  }

  get enquiryError(): boolean {
    const c = this.form.get('enquiryType');
    return !!(c?.invalid && (c.dirty || c.touched || this.submitted));
  }

  get messageError(): boolean {
    const c = this.form.get('message');
    return !!(c?.invalid && (c.dirty || c.touched || this.submitted));
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) return;

    const { name, phone, enquiryType, district, message } = this.form.value;

    const lines = [
      `Hi North Bengal Realty,`,
      ``,
      `*Name:* ${name}`,
      `*Phone:* ${phone}`,
      `*Enquiry Type:* ${enquiryType}`,
      district ? `*District of Interest:* ${district}` : null,
      ``,
      `*Message:*`,
      message,
    ]
      .filter(l => l !== null)
      .join('\n');

    const waUrl = `https://wa.me/916297063622?text=${encodeURIComponent(lines)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');

    // Reset after successful redirect
    this.form.reset();
    this.submitted = false;
  }
}
