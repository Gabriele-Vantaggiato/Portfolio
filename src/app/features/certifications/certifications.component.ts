import {Component, computed, signal} from '@angular/core';
import {LinkBoxComponent} from '../../components/shared/link-box/link-box.component';
import {ICertifications} from '../../models/ICertifications';
import {INIT_CERTIFICATIONS} from '../../constants';
import {PdfViewerModule} from 'ng2-pdf-viewer';
import {BlackSeparatorComponent} from '../../components/shared/black-separator/black-separator.component';
import {CertificationsCategoryComponent} from './certifications-category/certifications-category.component';

@Component({
  selector: 'app-certifications',
  imports: [
    LinkBoxComponent,
    PdfViewerModule,
    BlackSeparatorComponent,
    CertificationsCategoryComponent,
  ],
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.css'
})
export default class CertificationsComponent {
  private certifications = signal<ICertifications[]>(INIT_CERTIFICATIONS);
  public frontEndCertification = computed(() =>
    this.certifications().filter(c => c.category === 'fe')
  )
  public backendCertification = computed(() =>
    this.certifications().filter(c => c.category === 'be')
  )
}
