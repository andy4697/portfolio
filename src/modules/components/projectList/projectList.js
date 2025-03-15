import { LightningElement, api } from 'lwc';

export default class ProjectList extends LightningElement {
  @api isHomePage = false;
  
  projects = [
    {
      id: 1,
      imageUrl: '/public/assets/project.png',
      title: 'Demo Project 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      isNew: true,
      isHome: true,
      technologies: ['HTML', 'CSS', 'JavaScript'],
      pillColor: 'blue'
    },
    {
      id: 2,
      imageUrl: '/public/assets/project.png',
      title: 'Demo Project 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      isNew: false,
      isHome: true,
      technologies: ['Apex', 'LWC', 'Salesforce'],
      pillColor: 'green'
    },
    {
      id: 3,
      imageUrl: '/public/assets/project.png',
      title: 'Demo Project 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      isNew: false,
      isHome: false,
      technologies: ['React', 'Node', 'MongoDB'],
      pillColor: 'orange'
    },
    {
      id: 4,
      imageUrl: '/public/assets/project.png',
      title: 'Demo Project 4',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      isNew: true,
      isHome: false,
      technologies: ['Angular', 'TypeScript', 'Firebase'],
      pillColor: 'purple'
    }
  ];
  
  // Computed property to filter projects based on whether we're on the home page
  get displayedProjects() {
    if (this.isHomePage) {
      return this.projects.filter(project => project.isHome);
    }
    return this.projects;
  }
}