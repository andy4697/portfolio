import { LightningElement } from 'lwc';

export default class Education extends LightningElement {
    educations = [
        {
            id: '1',
            title: 'Title Name',
            startYear: '[start year]',
            endYear: '[end year]',
            institution: '[Study Center Name]',
            location: '[City], [Country]'
        },
        {
            id: '2',
            title: 'Title Name',
            startYear: '[start year]',
            endYear: '[end year]',
            institution: '[Study Center Name]',
            location: '[City], [Country]'
        }
    ];
}