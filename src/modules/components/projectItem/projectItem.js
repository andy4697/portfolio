import { LightningElement, api } from 'lwc';

export default class ProjectItem extends LightningElement {
  @api imageUrl;
  @api title;
  @api description;
  @api isNew = false;
  @api technologies = [];
  @api pillColor = 'blue'; // Default pill color
  
  get formattedTechnologies() {
    return this.technologies.map(tech => {
      return {
        id: `tech-${tech}-${Math.random().toString(36).substr(2, 9)}`,
        name: tech,
        class: `tech-pill ${this.pillColor}`
      };
    });
  }
}