import { Component, Input } from '@angular/core';
import {IExperience} from '../../../models/IExperience';

@Component({
  selector: 'app-timeline',
  imports: [],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.css'
})
export class TimelineComponent {
  @Input() experience: IExperience[] = [];
}
