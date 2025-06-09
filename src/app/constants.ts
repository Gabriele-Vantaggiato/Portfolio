import {IServices} from './models/IServices';
import {ISkill} from './models/ISkill';
import {ICertifications} from './models/ICertifications';
import {IExperience} from './models/IExperience';

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
  {id: 'html5', imgSrc: default_skills_path + 'html.svg', title: 'HTML5', competence: "USING"},
  {id: 'photoshop', imgSrc: default_skills_path + 'adobe-photoshop.svg', title: 'Photoshop', competence: "OTHER"},
  {id: 'angular', imgSrc: default_skills_path + 'angular.svg', title: 'Angular', competence: "USING"},
  {id: 'azure', imgSrc: default_skills_path + 'azure.svg', title: 'Azure', competence: "USED"},
  {id: 'bitbucket', imgSrc: default_skills_path + 'bitbucket.svg', title: 'Bitbucket', competence: "USED"},
  {id: 'bootstrap', imgSrc: default_skills_path + 'bootstrap.svg', title: 'Bootstrap', competence: "USING"},
  {id: 'canva', imgSrc: default_skills_path + 'canva.svg', title: 'Canva', competence: "OTHER"},
  {id: 'css', imgSrc: default_skills_path + 'css.svg', title: 'CSS', competence: "USING"},
  {id: 'cypress', imgSrc: default_skills_path + 'cypress.svg', title: 'Cypress', competence: "USED"},
  {id: 'express', imgSrc: default_skills_path + 'express.svg', title: 'Express', competence: "USED"},
  {id: 'firebase', imgSrc: default_skills_path + 'firebase.svg', title: 'Firebase', competence: "USED"},
  {id: 'flutter', imgSrc: default_skills_path + 'flutter.svg', title: 'Flutter', competence: "USED"},
  {id: 'github', imgSrc: default_skills_path + 'github.svg', title: 'Github', competence: "USING"},
  {id: 'gitlab', imgSrc: default_skills_path + 'gitlab.svg', title: 'Gitlab', competence: "USED"},
  {id: 'ionic', imgSrc: default_skills_path + 'ionic.svg', title: 'Ionic 7', competence: "USED"},
  {id: 'java', imgSrc: default_skills_path + 'java.svg', title: 'Java', competence: "USED"},
  {id: 'javascript', imgSrc: default_skills_path + 'javascript.svg', title: 'Javascript', competence: "USED"},
  {id: 'jira', imgSrc: default_skills_path + 'jira.svg', title: 'Jira', competence: "USED"},
  {id: 'kali', imgSrc: default_skills_path + 'kali.svg', title: 'Kali', competence: "LEARNING"},
  {id: 'mongodb', imgSrc: default_skills_path + 'mongodb.svg', title: 'MongoDB', competence: "USED"},
  {id: 'ngrx', imgSrc: default_skills_path + 'ngrx.svg', title: 'NGRX', competence: "USED"},
  {id: 'npm', imgSrc: default_skills_path + 'npm.svg', title: 'NPM', competence: "USING"},
  {id: 'numpy', imgSrc: default_skills_path + 'numpy.svg', title: 'Numpy', competence: "LEARNING"},
  {id: 'pandas', imgSrc: default_skills_path + 'pandas.svg', title: 'Pandas', competence: "LEARNING"},
  {id: 'postgresql', imgSrc: default_skills_path + 'postgresql.svg', title: 'PostgreSQL', competence: "USED"},
  {id: 'python', imgSrc: default_skills_path + 'python.svg', title: 'Python', competence: "LEARNING"},
  {id: 'pytorch', imgSrc: default_skills_path + 'pytorch.svg', title: 'Pytorch', competence: "LEARNING"},
  {id: 'raspberrypi', imgSrc: default_skills_path + 'raspberry-pi.svg', title: 'Raspberry PI', competence: "OTHER"},
  {id: 'react', imgSrc: default_skills_path + 'react.svg', title: 'React', competence: "USED"},
  {id: 'redux', imgSrc: default_skills_path + 'redux.svg', title: 'Redux', competence: "USED"},
  {id: 'rxjs', imgSrc: default_skills_path + 'rxjs.svg', title: 'RxJS', competence: "USING"},
  {id: 'sass', imgSrc: default_skills_path + 'sass.svg', title: 'Sass', competence: "USING"},
  {id: 'sourcetree', imgSrc: default_skills_path + 'sourcetree.svg', title: 'Sourcetree', competence: "OTHER"},
  {id: 'spring', imgSrc: default_skills_path + 'spring.svg', title: 'Spring', competence: "USED"},
  {id: 'tailwind', imgSrc: default_skills_path + 'tailwind-css.svg', title: 'Tailwind', competence: "USING"},
  {id: 'tensorflow', imgSrc: default_skills_path + 'tensorflow.svg', title: 'Tensorflow', competence: "LEARNING"},
  {id: 'typescript', imgSrc: default_skills_path + 'typescript.svg', title: 'Typescript', competence: "USING"},
  {id: 'vercel', imgSrc: default_skills_path + 'vercel.svg', title: 'Vercel', competence: "USING"},
  {id: 'wordpress', imgSrc: default_skills_path + 'wordpress.svg', title: 'Wordpress', competence: "USED"}
]

const default_img_certifications_path = './assets/imgs/certifications/';
const default_pdf_certifications_path = './assets/pdf/certifications/';
export const INIT_CERTIFICATIONS: ICertifications[] = [
  {
    id: 'angular_base',
    name: 'Angular Base',
    imgSrc: default_img_certifications_path + 'angular_basic_certificate.jpg',
    pdfSrc: default_pdf_certifications_path + 'angular_basic_certificate.pdf',
    category: 'fe'
  },
  {
    id: 'angular_intermediate',
    name: 'Angular Intermediate',
    imgSrc: default_img_certifications_path + 'angular_intermediate_certificate.jpg',
    pdfSrc: default_pdf_certifications_path + 'angular_intermediate_certificate.pdf',
    category: 'fe'
  }
]

export const INIT_WORK_EXPERIENCE: IExperience[] = [
  {
    id: "JuniorDeveloper",
    title: "Junior software developer",
    period: "2019 - 2022",
    description: [
      'Implementato test automatizzati (unit test e end-to-end test) per garantire l\'affidabilità e la qualità del software utilizzando Cypress e Jasmine',
      'Collaborato con designer e product manager per tradurre i requisiti di business in funzionalità tecniche efficaci',
      'Progettato e sviluppato componenti in Angular 12 riutilizzabili e altamente modulari, riducendo il tempo di sviluppo e migliorando la manutenzione del codice',
      'Collaborato con team esterno di backend per integrare API e servizi RESTful, assicurando la coerenza dei dati e l\'ottimizzazione delle performance',
      'Collaborato con un team internazionale in modalità scrum per vari progetti esteri'
    ]
  },
  {
    id: "SeniorDeveloper",
    title: "Senior software developer",
    period: "2022 - Giugno 2024",
    description: [
      'Sviluppato e mantenuto un progetto interno con componenti e moduli di applicazioni web utilizzando Angular 15 e TypeScript',
      'Implementato soluzioni di state management con NgRx per garantire una gestione efficiente e reattiva dello stato dell\'applicazione',
      'Sviluppato interfacce utente responsive e accessibili, seguendo le best practices di UX/UI design',
      'Realizzato applicazioni web dinamiche utilizzando React 17 e Redux, migliorando l\'interattività e l\'esperienza utente',
      'Sviluppata e integrata i18n per applicativo multilingua al fine di migliorare l\'accessibilità di quest\'ultimo'
    ]
  },
  {
    id: "CTO",
    title: "Senior software developer",
    period: "Giugno 2024 - Novembre 2024",
    description: [
      'Curata la parte software di una nuova startup per lanciarsi sul mercato',
      'Refactor sito wordpress in modo da generare più conversioni e assicurare efficienza e scalabilità',
      'Integrato sistema di pagamento con stripe, klarna e paypal',
    ]
  }
]
