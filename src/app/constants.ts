import {IServices} from './models/IServices';
import {ISkill} from './models/ISkill';

export const INIT_SERVICE: IServices[] = [
  {
    id: "development",
    title: 'development',
    imgSrc: './assets/imgs/develop_service.png',
    description: "I can develop the site based on your needs and suggestions. I can also develop the site from scratch and consult you during the job"
  },
  {
    id: "maintenance",
    title: 'maintenance',
    imgSrc: './assets/imgs/maintenance_service.png',
    description: "I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job"
  },
  {
    id: "efficiency",
    title: 'efficiency',
    imgSrc: './assets/imgs/maintenance_service.png',
    description: "I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job"
  }
]

const default_skills_path = './assets/imgs/skills/';
export const INIT_SKILL: ISkill[] = [
  {id: 'html5', imgSrc: default_skills_path + 'html.svg', name: 'HTML5', competence: "USING"},
  {id: 'photoshop', imgSrc: default_skills_path + 'adobe-photoshop.svg', name: 'Photoshop', competence: "OTHER"},
  {id: 'angular', imgSrc: default_skills_path + 'angular.svg', name: 'Angular', competence: "USING"},
  {id: 'azure', imgSrc: default_skills_path + 'azure.svg', name: 'Azure', competence: "USED"},
  {id: 'bitbucket', imgSrc: default_skills_path + 'bitbucket.svg', name: 'Bitbucket', competence: "USED"},
  {id: 'bootstrap', imgSrc: default_skills_path + 'bootstrap.svg', name: 'Bootstrap', competence: "USING"},
  {id: 'canva', imgSrc: default_skills_path + 'canva.svg', name: 'Canva', competence: "OTHER"},
  {id: 'css', imgSrc: default_skills_path + 'css.svg', name: 'CSS', competence: "USING"},
  {id: 'express', imgSrc: default_skills_path + 'express.svg', name: 'Express', competence: "USED"},
  {id: 'firebase', imgSrc: default_skills_path + 'firebase.svg', name: 'Firebase', competence: "USED"},
  {id: 'github', imgSrc: default_skills_path + 'github.svg', name: 'Github', competence: "USING"},
  {id: 'gitlab', imgSrc: default_skills_path + 'gitlab.svg', name: 'Gitlab', competence: "USED"},
  {id: 'ionic', imgSrc: default_skills_path + 'ionic.svg', name: 'Ionic 7', competence: "USED"},
  {id: 'java', imgSrc: default_skills_path + 'java.svg', name: 'Java', competence: "USED"},
  {id: 'javascript', imgSrc: default_skills_path + 'javascript.svg', name: 'Javascript', competence: "USED"},
  {id: 'jira', imgSrc: default_skills_path + 'jira.svg', name: 'Jira', competence: "USED"},
  {id: 'kali', imgSrc: default_skills_path + 'kali.svg', name: 'Kali', competence: "LEARNING"},
  {id: 'mongodb', imgSrc: default_skills_path + 'mongodb.svg', name: 'MongoDB', competence: "USED"},
  {id: 'ngrx', imgSrc: default_skills_path + 'ngrx.svg', name: 'NGRX', competence: "USED"},
  {id: 'npm', imgSrc: default_skills_path + 'npm.svg', name: 'NPM', competence: "USING"},
  {id: 'numpy', imgSrc: default_skills_path + 'numpy.svg', name: 'Numpy', competence: "LEARNING"},
  {id: 'pandas', imgSrc: default_skills_path + 'pandas.svg', name: 'Pandas', competence: "LEARNING"},
  {id: 'postgresql', imgSrc: default_skills_path + 'postgresql.svg', name: 'PostgreSQL', competence: "USED"},
  {id: 'python', imgSrc: default_skills_path + 'python.svg', name: 'Python', competence: "LEARNING"},
  {id: 'pytorch', imgSrc: default_skills_path + 'pytorch.svg', name: 'Pytorch', competence: "LEARNING"},
  {id: 'raspberrypi', imgSrc: default_skills_path + 'raspberry-pi.svg', name: 'Raspberry PI', competence: "OTHER"},
  {id: 'react', imgSrc: default_skills_path + 'react.svg', name: 'React', competence: "USED"},
  {id: 'redux', imgSrc: default_skills_path + 'redux.svg', name: 'Redux', competence: "USED"},
  {id: 'rxjs', imgSrc: default_skills_path + 'rxjs.svg', name: 'RxJS', competence: "USING"},
  {id: 'sass', imgSrc: default_skills_path + 'sass.svg', name: 'Sass', competence: "USING"},
  {id: 'sourcetree', imgSrc: default_skills_path + 'sourcetree.svg', name: 'Sourcetree', competence: "OTHER"},
  {id: 'spring', imgSrc: default_skills_path + 'spring.svg', name: 'Spring', competence: "USED"},
  {id: 'tailwind', imgSrc: default_skills_path + 'tailwind-css.svg', name: 'Tailwind', competence: "USING"},
  {id: 'tensorflow', imgSrc: default_skills_path + 'tensorflow.svg', name: 'Tensorflow', competence: "LEARNING"},
  {id: 'typescript', imgSrc: default_skills_path + 'typescript.svg', name: 'Typescript', competence: "USING"},
  {id: 'vercel', imgSrc: default_skills_path + 'vercel.svg', name: 'Vercel', competence: "USING"},
  {id: 'wordpress', imgSrc: default_skills_path + 'wordpress.svg', name: 'Wordpress', competence: "USED"}
]
