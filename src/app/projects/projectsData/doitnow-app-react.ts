import { Project } from '../../shared/types/project.interface';
const doItNow_app_react_pic = '../../assets/images/projects/doitnow-app.svg';

export const DoItNowAppReact: Project = {
  id: 3,
  title: 'DoItNow App (React)',
  photo: doItNow_app_react_pic,
  demoLink: 'https://doitnow-react-ts-redux.netlify.app/',
  codeLink: 'https://github.com/RizwanMushtaq/doitnow_react_ts_redux',
  description: 'This application renders a calender and show todo items',
  technologies: [
    'React.js',
    'TypeScript',
    'State management by Redux Toolkit',
    'React Hooks(useEffect, useRef)',
    'Axios',
    'User Authorization using JSON web tokens',
    'Calender rendering using date-fns',
    'Sass',
  ],
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
