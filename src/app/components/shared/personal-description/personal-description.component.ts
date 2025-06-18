import {booleanAttribute, Component, Input} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';
import {RouterLink} from '@angular/router';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-personal-description',
  imports: [
    TranslatePipe,
    RouterLink,
    NgClass
  ],
  templateUrl: './personal-description.component.html',
  styleUrl: './personal-description.component.css'
})
export class PersonalDescriptionComponent {
  @Input({transform: booleanAttribute}) shortDesc = false;
}
