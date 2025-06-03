import {ChangeDetectionStrategy, Component, input, Input} from '@angular/core';
import {ISkill} from '../../../models/ISkill';
import {JsonPipe, NgClass, NgOptimizedImage, UpperCasePipe} from '@angular/common';

@Component({
  selector: 'app-skill-section',
  imports: [
    UpperCasePipe,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './skill-section.component.html',
  styleUrl: './skill-section.component.css'
})
export class SkillSectionComponent {
  @Input() sectionTitle: string = '';
  skills = input<ISkill[]>();
}
