import { LightningElement } from 'lwc';

export default class Experience extends LightningElement {
    experiences = [
        {
            id: '1',
            company: 'General Motors',
            title: 'Senior Salesforce Developer',
            startDate: 'July 2025',
            endDate: 'Present',
            location: 'United States',
            workMode: 'Remote',
            description: 'Building enterprise-grade service infrastructure at one of the largest automotive companies in the US, where reliability, compliance, and performance are non-negotiable. My work spans scalable automation, secure integrations, and high-volume service platforms used daily by thousands of agents.',
            highlights: [
                'Engineered an Omni-Channel routing framework across voice, chat, email, and case channels using Skills-Based Routing and Presence configurations, boosting agent productivity by 35% and reducing case misrouting by 40%',
                'Implemented Okta SSO using SAML 2.0 with custom Just-in-Time provisioning and automated attribute mapping, enabling seamless onboarding for 5,000 external portal users and 200 internal users',
                'Designed an event-driven case escalation engine using Platform Events and Queueable Apex, decoupling high-volume trigger logic and eliminating transaction timeout errors in complex service workflows',
                'Architected a high-throughput data archiving solution using Batch Apex to process 1M+ case records per execution, enabling recursive component analysis and seamless Odaseva data retention integration',
                'Developed LWC-based unified Agent Console surfacing real-time account health, entitlement, and case history data via REST API callouts, reducing average handle time by 22%',
                'Integrated Box for securing sensitive data, reducing security incidents by 30% while ensuring compliance with data protection regulations',
                'Leveraged Cursor AI with custom rule sets to accelerate development and generate 100+ test classes, maintaining 90%+ Apex code coverage across all releases'
            ]
        },
        {
            id: '2',
            company: 'Verizon',
            title: 'Senior Software Engineer - Salesforce',
            startDate: 'September 2021',
            endDate: 'June 2024',
            location: 'Hyderabad, India',
            workMode: 'Hybrid',
            description: 'Nearly three years owning the full lifecycle: design, build, deploy, and iterate. At Verizon, I helped modernize how a large-scale sales org leveraged Salesforce, bringing in smarter automation, cleaner data pipelines, and better tooling for the teams relying on it every day.',
            highlights: [
                'Integrated the Darwin deal-scoring system into Sales Cloud via web services and surfaced win-rate predictions on an LWC dashboard, improving forecast accuracy by 34%',
                'Extended the Apex Trigger Handler framework with Map-based SOQL caching and bypass switches, reducing queries per transaction by 75% and enabling large-scale data imports without governor limit failures',
                'Streamlined 15+ business processes by migrating legacy Process Builders to Flows with reusable sub-flows and bypass logic, eliminating technical debt ahead of Salesforce deprecation',
                'Supervised migration of 100,000+ records from ERP to Salesforce using MuleSoft and Anypoint Studio, achieving 99% data accuracy with DataWeave ETL workflows',
                'Improved platform quality and accessibility by raising Clayton score from 35% to 75%, resolving security vulnerabilities via Burp Suite, and guiding the team on WCAG 2.2 guidelines',
                'Implemented DocuSign eSignature with Salesforce, automating contract workflows and reducing processing time by 30%, resulting in 20% faster deal closures',
                'Led code reviews and managed CI/CD with Gearset and Bitbucket while maintaining 85%+ Apex test coverage and enterprise deployment standards'
            ]
        },
        {
            id: '3',
            company: 'Schneider Electric',
            title: 'Salesforce Technical Analyst',
            startDate: 'July 2019',
            endDate: 'September 2021',
            location: 'Bangalore, India',
            workMode: 'On-site',
            description: 'My first real taste of enterprise Salesforce, and a crash course in what it takes to build for global scale. At Schneider, I owned integration and migration workstreams serving partner networks spanning over 100 countries. It taught me how to work across complex organizations, communicate with non-technical stakeholders, and take full ownership of what I ship.',
            highlights: [
                'Designed and implemented a metadata-driven REST API framework with Custom Objects, Custom Metadata Types, and a dynamic SOQL engine for partner data, cutting new integration deployment from 2 weeks to 15 minutes',
                'Built an asynchronous partner registration web service to provision identity access including AILs and permission sets on sign-up via Queueable Apex, enabling zero-touch onboarding with no manual IT support',
                'Owned Account 360 and Contact 360 Lightning Web Components, streamlining IDMS, Zinfi, and Box data into unified partner views during the Classic-to-Lightning migration',
                'Directed end-to-end migration of 1.2M+ partner loyalty records from Salesforce to Zinfi, collaborating with 5+ cross-functional teams and 50+ stakeholders for UAT, achieving seamless production go-live',
                'Configured Lightning Flows and multi-tier approval processes for ORF with territory-based routing, auto-approval for low-value deals, and executive escalation for high-value deals',
                'Served as primary contact for integration and migration workstreams, leading POCs, code/design reviews, and mentoring 5+ interns'
            ]
        },
        {
            id: '4',
            company: 'UST Global',
            title: 'Salesforce Intern',
            startDate: 'February 2019',
            endDate: 'July 2019',
            location: 'Chennai, India',
            workMode: 'On-site',
            description: 'Where it all began. I joined UST Global as an intern and left five months later having contributed to real production work. I wasn\'t just shadowing; I was writing automation, resolving bugs, and shipping alongside the team. It set the standard I\'ve held myself to ever since: get up to speed fast, take initiative, and make yourself useful from day one.',
            highlights: [
                'Completed Salesforce platform training with hands-on experience in Administration and Development across Sales Cloud and Service Cloud',
                'Built and configured custom objects, page layouts, Flows, and Workflow Rules to meet business needs, improving data entry efficiency and streamlining user processes',
                'Contributed to live projects by assisting with configurations, automation, and bug fixes, independently contributing within 8 weeks of onboarding'
            ]
        }
    ];
}