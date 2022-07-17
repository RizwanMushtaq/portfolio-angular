import { Project } from '../../libs/types/project.interface';
const doItNow_app_react_pic = '../../assets/projects/doitnow-app.svg';

export const DoItNowAppAngular: Project = {
  id: 1,
  title: 'DoItNow App (Angular)',
  photo: doItNow_app_react_pic,
  demoLink: 'https://doitnow-angular-app.netlify.app/login',
  codeLink: 'https://github.com/RizwanMushtaq/doitnow-angular-app',
  description: 'This application renders a calender and show todo items',
  technologies: ['Angular', 'TypeScript', 'RxJS', 'CSS'],
  features: [
    'User Registration',
    'User login',
    'User authorization',
    'User can see calender View',
    'User can add ToDo items',
    'User can set the ToDo item to done or undone state',
    'User can delete ToDo item from list',
    'User logout',
  ],
};
