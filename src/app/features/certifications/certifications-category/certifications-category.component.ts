import {ChangeDetectionStrategy, Component, Input, Signal} from '@angular/core';
import {ICertifications} from '../../../models/ICertifications';

@Component({
  selector: 'app-certifications-category',
  imports: [],
  templateUrl: './certifications-category.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './certifications-category.component.css'
})
export class CertificationsCategoryComponent {
  @Input({required: true}) certifications!: Signal<ICertifications[]>;
  @Input() title: string = '';
}
