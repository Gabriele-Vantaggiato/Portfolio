import {Component, Input} from '@angular/core';
import {ISkill} from '../../../models/ISkill';

@Component({
  selector: 'app-skill-section',
  imports: [],
  templateUrl: './skill-section.component.html',
  styleUrl: './skill-section.component.css'
})
export class SkillSectionComponent {
  @Input() sectionTitle: string = '';
  @Input() skills: ISkill[] = [];
}
