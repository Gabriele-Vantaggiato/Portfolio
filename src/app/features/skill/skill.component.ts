import {ChangeDetectionStrategy, Component, computed, signal} from '@angular/core';
import {LinkBoxComponent} from "../../components/shared/link-box/link-box.component";
import {ISkill} from '../../models/ISkill';
import {INIT_SKILL} from '../../constants';
import {SkillSectionComponent} from './skill-section/skill-section.component';

@Component({
  selector: 'app-skill',
  imports: [
    LinkBoxComponent,
    SkillSectionComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.css'
})
export default class SkillComponent {

  skills = signal<ISkill[]>(INIT_SKILL);
  learning = computed( () => this.skills().filter( s => s.competence === 'LEARNING'));
  used = computed( () => this.skills().filter( s => s.competence === 'USED'));
  using = computed( () => this.skills().filter( s => s.competence === 'USING'));
  other = computed( () => this.skills().filter( s => s.competence === 'OTHER'));
}
