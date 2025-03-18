import { LightningElement } from 'lwc';

export default class Experience extends LightningElement {
    experiences = [
        {
            id: '1',
            company: 'Spayera Constructions',
            title: 'Senior Software Engineer',
            startDate: 'May 2022',
            endDate: 'Jun 2024',
            location: 'Remote, India',
            description: 'Designed and delivered a Salesforce-based asset management platform tailored for construction operations, significantly enhancing efficiency in equipment tracking and financial reporting. Also, engineered a custom procurement solution integrated seamlessly with existing ERP systems, providing strategic insights through interactive dashboards.'
        },
        {
            id: '2',
            company: 'Schneider Electric',
            title: 'Analyst',
            startDate: 'Jul 2019',
            endDate: 'Sep 2021',
            location: 'Bangalore, India',
            description: 'Pioneered significant process improvements and efficiency through automation and API integrations in Salesforce, achieving measurable reductions in support requests and workflow delays. Spearheaded a major CRM migration project, mentored team members, and successfully introduced organizational frameworks like OKRs to elevate team performance.'
        },
        {
            id: '3',
            company: 'UST Global',
            title: 'Software Engineering Intern',
            startDate: 'Feb 2019',
            endDate: 'Jul 2019',
            location: 'Chennai, India',
            description: 'Built predictive analytics models and proposed IoT-driven solutions to improve industrial equipment maintenance processes, leading to substantial cost savings and operational efficiency improvements.'
        }
    ];
}