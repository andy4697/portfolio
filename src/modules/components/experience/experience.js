import { LightningElement } from 'lwc';

export default class Experience extends LightningElement {
    experiences = [
        {
            id: '1',
            company: 'JPMorgan Chase',
            title: 'Senior Salesforce Developer',
            startDate: '2025',
            endDate: 'Present',
            location: 'United States',
            workMode: 'Remote',
            description: 'I build enterprise service infrastructure for one of the world\'s largest banks, where reliability, compliance, and performance are non-negotiable. My work focuses on scalable automation, secure integrations, and high-volume service platforms used daily by thousands of agents.',
            highlights: [
                'Designed intelligent case routing and automated escalation workflows across multi-region service teams — improved SLA compliance from 60% to 95%',
                'Built KYC/AML compliance workflows with multi-level approvals and full audit trail logging, achieving 100% regulatory compliance',
                'Integrated core banking systems via REST APIs, CTI, and Platform Events into a unified agent desktop, cutting handling time by 25%',
                'Delivered 60+ Apex classes and 25+ LWC components at 99.5% uptime and 90%+ test coverage',
                'Established development standards and mentored 3 junior developers, reducing onboarding time from 4 weeks to 1 week'
            ]
        },
        {
            id: '2',
            company: 'Serveen Software Systems',
            title: 'Senior Salesforce Developer',
            startDate: '2021',
            endDate: '2024',
            location: 'Hyderabad, India',
            workMode: 'Hybrid',
            description: 'Three years of owning the full lifecycle: design, build, deploy, and iterate. At Serveen, I helped transform how a fast-growing sales org used Salesforce, bringing in smarter automation, cleaner data pipelines, and better tooling for the teams relying on it every day.',
            highlights: [
                'Integrated an AI deal-scoring engine that boosted sales forecast accuracy by 34% across a $45M+ pipeline',
                'Built 48 custom LWC components for 500+ users, improving page load time by 65% and Lighthouse score from 62 to 89',
                'Engineered a 10-level quote approval system cutting cycle time by 58% across 1,200+ monthly approvals',
                'Executed Oracle CPQ integration via bidirectional REST APIs, reducing data discrepancies from 15% to 0.3%',
                'Constructed a scalable trigger framework across 40+ objects, reducing SOQL queries by 75%'
            ]
        },
        {
            id: '3',
            company: 'Schneider Electric',
            title: 'Salesforce Technical Analyst',
            startDate: '2019',
            endDate: '2021',
            location: 'Bangalore, India',
            workMode: 'On-site',
            description: 'My first real taste of enterprise Salesforce — and a crash course in what it takes to build for global scale. At Schneider, I owned integration and migration workstreams that served partner networks spanning over 100 countries. It taught me how to work across complex organizations, communicate with non-technical stakeholders, and take full ownership of what I ship.',
            highlights: [
                'Developed 40+ LWC components including Account 360 and Contact 360, integrated with IDMS, Zini, and Box handling 100,000+ annual API calls',
                'Built a metadata-driven REST API framework serving 5,000+ partner accounts across 120 countries, cutting field config time from 2 weeks to 15 minutes',
                'Led the Classic-to-Lightning migration, redesigning Visualforce pages as modern LWC components',
                'Coordinated a 1.2M+ record data migration with 99.5% accuracy, sustaining 98% deployment success across CI/CD pipelines'
            ]
        },
        {
            id: '4',
            company: 'UST Global',
            title: 'Salesforce Intern',
            startDate: '',
            endDate: '2019',
            location: 'Chennai, India',
            workMode: 'On-site',
            description: 'Where it all began. I joined UST Global as an intern and left five months later having contributed to real production work. I wasn\'t just shadowing — I was writing automation, resolving bugs, and shipping alongside the team. It set the standard I\'ve held myself to ever since: get up to speed fast, take initiative, and make yourself useful from day one.',
            highlights: [
                'Delivered production-ready Aura components and Visualforce pages with 75%+ Apex test coverage',
                'Contributed to code reviews and full deployment cycles independently within 8 weeks of joining'
            ]
        }
    ];
}
