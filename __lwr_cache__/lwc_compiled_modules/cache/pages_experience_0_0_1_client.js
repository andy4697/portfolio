import { registerDecorators as _registerDecorators, LightningElement, registerComponent as _registerComponent } from "lwc";
import _tmpl from "./experience.html";
class Experience extends LightningElement {
  constructor(...args) {
    super(...args);
    this.experiences = [{
      id: '1',
      title: 'Job Title at Project or Company Name',
      startDate: '[Start Date]',
      endDate: '[End Date]',
      company: '[Company]',
      location: '[City], [Country]',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'
    }, {
      id: '2',
      title: 'Job Title at Project or Company Name',
      startDate: '[Start Date]',
      endDate: '[End Date]',
      company: '[Company]',
      location: '[City], [Country]',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'
    }, {
      id: '3',
      title: 'Job Title at Project or Company Name',
      startDate: '[Start Date]',
      endDate: '[End Date]',
      company: '[Company]',
      location: '[City], [Country]',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'
    }];
  }
  /*LWC compiler v8.14.0*/
}
_registerDecorators(Experience, {
  fields: ["experiences"]
});
const __lwc_component_class_internal = _registerComponent(Experience, {
  tmpl: _tmpl,
  sel: "-experience",
  apiVersion: 63
});
export default __lwc_component_class_internal;