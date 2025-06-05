import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@Component({
  selector: 'app-certification-modal',
  standalone: true,
  imports: [
    CommonModule,
    PdfViewerModule
  ],
  templateUrl: './certification-modal.component.html',
  styleUrls: ['./certification-modal.component.css']
})
export class CertificationModalComponent {
  @Input() pdfSrc: string = '';
  @Output() close = new EventEmitter<void>();

  zoom: number = 1.0;
  page: number = 1;
  totalPages: number = 0;

  closeModal() {
    this.close.emit();
  }

}
