import { Injectable } from '@angular/core';
import emailJS from '@emailjs/browser';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailJSService {

  private readonly SERVICE_ID = 'service_oxeomk1';
  private readonly TEMPLATE_ID = 'template_w1lelrs';
  private readonly PUBLIC_KEY = 'Ht76bqj2fuJgH7l6Y';

  constructor() {
    emailJS.init(this.PUBLIC_KEY);
  }

  sendEmail(templateParams: Record<string, unknown>): Observable<any> {
    return from(emailJS.send(this.SERVICE_ID, this.TEMPLATE_ID, templateParams));
  }
}
