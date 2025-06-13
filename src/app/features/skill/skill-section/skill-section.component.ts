import {ChangeDetectionStrategy, Component, input, Input} from '@angular/core';
import {ISkill} from '../../../models/ISkill';
import {UpperCasePipe} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';

@Component({
  selector: 'app-skill-section',
  imports: [
    UpperCasePipe,
    TranslateModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './skill-section.component.html',
  styleUrl: './skill-section.component.css'
})
export class SkillSectionComponent {
  @Input() sectionTitle: string = '';
  skills = input<ISkill[]>();
}
