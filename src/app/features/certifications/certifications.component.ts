import {Component} from '@angular/core';
import {LinkBoxComponent} from '../../components/shared/link-box/link-box.component';
import {ICertifications} from '../../models/ICertifications';
import {INIT_CERTIFICATIONS} from '../../constants';
import {PdfViewerModule} from 'ng2-pdf-viewer';
import {CertificationModalComponent} from './certification-modal/certification-modal.component';

@Component({
  selector: 'app-certifications',
  imports: [
    LinkBoxComponent,
    PdfViewerModule,
    CertificationModalComponent
  ],
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.css'
})
export default class CertificationsComponent {
  // private sanitizer = inject(DomSanitizer);
  // public certifications: ICertifications[] = INIT_CERTIFICATIONS.map((c) => {
  //   return {
  //     id: c.id,
  //     name: c.name,
  //     src: this.sanitizer.bypassSecurityTrustResourceUrl(c.src as string),
  //   }
  // });
  public certifications: ICertifications[] = INIT_CERTIFICATIONS;
  public currentModalPdfSrc: string = '';
  private pdfSrc: string = '';
  public showModal: boolean = false;

  openCertificationModal() {
    this.currentModalPdfSrc = this.pdfSrc; // Imposta il PDF da mostrare nella modale
    this.showModal = true; // Rendi la modale visibile
  }

  // Metodo per chiudere la modale
  closeCertificationModal() {
    this.showModal = false; // Nascondi la modale
    this.currentModalPdfSrc = ''; // Pulisci il sorgente per sicurezza
  }
}
