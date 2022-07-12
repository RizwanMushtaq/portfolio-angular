import { Project } from '../../libs/types/project.interface';
const doItNow_app_react_pic = '../../assets/projects/printmytweet-app.svg';

export const PrintMyTweetApp: Project = {
  id: 5,
  title: 'PrintMyTweet App (JavaScript)',
  photo: doItNow_app_react_pic,
  demoLink: 'https://rizwanmushtaq.github.io/PrintMyTweet/',
  codeLink: 'https://github.com/RizwanMushtaq/PrintMyTweet/tree/main',
  description:
    'User can render images of different sizes, background color and text',
  technologies: ['Vanilla JavaScript', 'Canvas API', 'CSS', 'HTML'],
  features: [
    'Generate Image of any Size',
    'Writing Text in Image',
    'Change Colors of Text and background of Image',
    'Insert random Circles in the background',
    'Position your text in Image',
    'Insert Tweeter icon and Position anywhere inside Image',
    'Export Images as PNG or JPEG formats',
  ],
};
