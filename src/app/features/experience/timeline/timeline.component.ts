import { Component, Input } from '@angular/core';
import {IExperience} from '../../../models/IExperience';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-timeline',
  imports: [
    TranslatePipe
  ],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.css'
})
export class TimelineComponent {
  @Input() experience: IExperience[] = [];
}
