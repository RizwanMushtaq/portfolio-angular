import { Project } from '../../libs/types/project.interface';
const doItNow_service_express_pic = '../../assets/projects/doitnow-service.svg';

export const DoItNowServiceNest: Project = {
  id: 2,
  title: 'DoItNow Service (NestJS)',
  photo: doItNow_service_express_pic,
  demoLink: '',
  codeLink: '',
  description: 'This service acts as RESTful API for doitnow Application.',
  technologies: ['REST API', 'NestJS', 'MySQL'],
  features: [
    'User Registration',
    'User login',
    'User authorization',
    'User can add ToDo items',
    'User can set the ToDo item to done or undone state',
    'User can delete ToDo item from list',
    'User logout',
  ],
};
