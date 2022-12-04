import { Project } from '../../shared/types/project.interface';
const doItNow_service_express_pic =
  '../../assets/images/projects/doitnow-service.svg';

export const DoItNowServiceExpress: Project = {
  id: 4,
  title: 'DoItNow Service (ExpressJS)',
  photo: doItNow_service_express_pic,
  demoLink: 'https://doitnow-restapi-heroku.herokuapp.com/',
  codeLink: 'https://github.com/RizwanMushtaq/doitnow_restapi_heroku',
  description: 'This service acts as RESTful API for doitnow Application.',
  technologies: ['REST API', 'Node.js', 'Express.js', 'MySQL'],
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
