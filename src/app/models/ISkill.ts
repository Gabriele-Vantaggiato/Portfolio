export interface ISkill {
  id: string;
  name: string;
  imgSrc: string;
  competence: 'USING' | 'LEARNING' | 'OTHER' | 'USED'
}
