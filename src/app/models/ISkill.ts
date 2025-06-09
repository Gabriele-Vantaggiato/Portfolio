import {IGenericWithImage} from './IGenericWithImage';

export interface ISkill extends IGenericWithImage {
  competence: 'USING' | 'LEARNING' | 'OTHER' | 'USED'
}
