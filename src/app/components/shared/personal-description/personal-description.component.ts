import {booleanAttribute, Component, Input} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-personal-description',
  imports: [
    TranslatePipe
  ],
  templateUrl: './personal-description.component.html',
  styleUrl: './personal-description.component.css'
})
export class PersonalDescriptionComponent {
  @Input({transform: booleanAttribute}) shortDesc = false;
}
