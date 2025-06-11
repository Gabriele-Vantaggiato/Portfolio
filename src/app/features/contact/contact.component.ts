import {Component, inject, ViewContainerRef} from '@angular/core';
import {LinkBoxComponent} from "../../components/shared/link-box/link-box.component";
import {BlackSeparatorComponent} from '../../components/shared/black-separator/black-separator.component';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {EmailJSService} from '../../services/emailjs.service';
import {ToastService} from '../../services/toast.service';

@Component({
  selector: 'app-contact',
  imports: [
    LinkBoxComponent,
    BlackSeparatorComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export default class ContactComponent {

  contactForm: FormGroup;
  isLoading = false;
  private emailService: EmailJSService = inject(EmailJSService);
  private viewContainerRef = inject(ViewContainerRef);
  private toastService: ToastService;

  constructor() {
    this.contactForm = new FormGroup({
      from_email: new FormControl('', [Validators.required, Validators.email]),
      from_subject: new FormControl('', [Validators.required]),
      from_message: new FormControl('', [Validators.required]),
    })
    this.toastService = new ToastService(this.viewContainerRef);
  }

  onSubmit() {
    this.isLoading = true;
    if (!this.contactForm.dirty) {
      this.toastService.showToast('Per favore compila i campi', 'ERROR')
    }
    if (this.contactForm.valid) {
      const templateParams = this.contactForm.value;
      this.emailService.sendEmail(templateParams).subscribe({
        next: (response) => {
          this.toastService.showToast('L\'email è stata inviata con successo', 'SUCCESS')
          this.contactForm.reset();
          this.isLoading = false;
        },
        error: (error) => {
          this.toastService.showToast('Si è verificato un problema durante l\'invio dell\'email', 'ERROR')
          console.error('Invio non riuscito' , error);
          this.isLoading = false;
        }
      })
    } else {
      this.isLoading = false;
    }
  }
}
