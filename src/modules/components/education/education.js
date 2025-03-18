import { LightningElement } from 'lwc';

export default class Education extends LightningElement {
    educations = [
        {
            id: '1',
            institution: 'University of Arizona',
            location: 'Tucson, Arizona, USA',
            title: 'Master of Information Science',
            specialization: 'Machine Learning',
            startYear: '2023',
            endYear: '2025'
        },
        {
            id: '2',
            institution: 'Manipal Insitute of Technology, MAHE',
            location: 'Manipal, Karnataka, India',
            title: 'Bachelor of Technology in Electronics and Communication Engineering',
            specialization: 'Signal Processing',
            startYear: '2015',
            endYear: '2019'
        }
    ];
}