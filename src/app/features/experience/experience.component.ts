import { Component } from '@angular/core';
import {BlackSeparatorComponent} from "../../components/shared/black-separator/black-separator.component";
import {LinkBoxComponent} from "../../components/shared/link-box/link-box.component";
import {TimelineComponent} from './timeline/timeline.component';
import {INIT_WORK_EXPERIENCE} from '../../constants';
import {IExperience} from '../../models/IExperience';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-experience',
  imports: [
    BlackSeparatorComponent,
    LinkBoxComponent,
    TimelineComponent,
    TranslatePipe
  ],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export default class ExperienceComponent {
  public experiences: IExperience[] = INIT_WORK_EXPERIENCE;
}
