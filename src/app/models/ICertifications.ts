import {SafeResourceUrl} from '@angular/platform-browser';

export interface ICertifications {
  id: string;
  name: string;
  src: SafeResourceUrl | string;
}
