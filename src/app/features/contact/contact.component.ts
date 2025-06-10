import { Component } from '@angular/core';
import {LinkBoxComponent} from "../../components/shared/link-box/link-box.component";
import {BlackSeparatorComponent} from '../../components/shared/black-separator/black-separator.component';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {EmailJSService} from '../../services/emailjs.service';

@Component({
  selector: 'app-contact',
  imports: [
    LinkBoxComponent,
    BlackSeparatorComponent,
    ReactiveFormsModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export default class ContactComponent {

  contactForm: FormGroup;
  isLoading = false;
  messageSent = false;
  errorMessage: string | null = null;

  constructor(private emailService: EmailJSService) {
    this.contactForm = new FormGroup({
      from_email: new FormControl('', [Validators.required, Validators.email]),
      from_subject: new FormControl('', [Validators.required]),
      from_message: new FormControl('', [Validators.required]),
    })
  }

  onSubmit() {
    this.isLoading = true;
    this.messageSent = false;
    this.errorMessage = null;
    if (this.contactForm.valid) {
      const templateParams = this.contactForm.value;
      this.emailService.sendEmail(templateParams).subscribe({
        next: (response) => {
          console.log('Email mandata con successo', response);
          this.messageSent = true;
          this.contactForm.reset();
          this.isLoading = false;
        },
        error: (error) => {
          console.error('Invio non riuscito' , error);
          this.errorMessage = 'Si è verificato un errore durante l\'invio dell\'email';
          this.isLoading = false;
        }
      })
    } else {
      this.errorMessage = 'Per favore compila tutti i campi richiesti';
      this.isLoading = false;
    }
  }
}
