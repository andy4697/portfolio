import { LightningElement } from 'lwc';

export default class Skills extends LightningElement {
    skillCategories = [
        {
            id: 'languages',
            title: 'Programming Languages',
            icon: 'fas fa-code',
            iconColor: '#FF6B6B',
            skills: [
                { name: 'Python', icon: 'devicon-python-plain', iconColor: '#3776AB' },
                { name: 'Apex', icon: 'fas fa-cloud', iconColor: '#00A1E0' },
                { name: 'JavaScript', icon: 'devicon-javascript-plain', iconColor: '#F7DF1E' },
                { name: 'HTML/CSS', icon: 'devicon-html5-plain', iconColor: '#E34F26' },
                { name: 'SQL', icon: 'fas fa-database', iconColor: '#336791' },
                { name: 'XML', icon: 'fas fa-file-code', iconColor: '#FF6B6B' }
            ]
        },
        {
            id: 'crm',
            title: 'CRM & Platforms',
            icon: 'fas fa-cloud-upload-alt',
            iconColor: '#4CAF50',
            skills: [
                { name: 'Salesforce', icon: 'fas fa-cloud', iconColor: '#00A1E0' },
                { name: 'Zinfi', icon: 'fas fa-network-wired', iconColor: '#2196F3' }
            ]
        },
        {
            id: 'salesforce',
            title: 'Salesforce Technologies',
            icon: 'fas fa-bolt',
            iconColor: '#00A1E0',
            skills: [
                { name: 'Lightning Web Components', icon: 'fas fa-bolt', iconColor: '#00A1E0' },
                { name: 'Aura Components', icon: 'fas fa-puzzle-piece', iconColor: '#F7931E' },
                { name: 'Visualforce', icon: 'fas fa-file-code', iconColor: '#FF6B6B' },
                { name: 'Triggers', icon: 'fas fa-code-branch', iconColor: '#4CAF50' },
                { name: 'Apex Classes', icon: 'fas fa-file-alt', iconColor: '#2196F3' },
                { name: 'Process Builder', icon: 'fas fa-project-diagram', iconColor: '#9C27B0' },
                { name: 'Workflows', icon: 'fas fa-sitemap', iconColor: '#FF9800' },
                { name: 'Flow Builder', icon: 'fas fa-random', iconColor: '#E91E63' }
            ]
        },
        {
            id: 'sfTools',
            title: 'Salesforce Tools',
            icon: 'fas fa-tools',
            iconColor: '#9C27B0',
            skills: [
                { name: 'Salesforce DX', icon: 'fas fa-terminal', iconColor: '#00A1E0' },
                { name: 'Salesforce CLI', icon: 'fas fa-terminal', iconColor: '#2196F3' },
                { name: 'VS Code', icon: 'devicon-vscode-plain', iconColor: '#007ACC' },
                { name: 'Data Loader', icon: 'fas fa-upload', iconColor: '#4CAF50' },
                { name: 'Workbench', icon: 'fas fa-wrench', iconColor: '#FF9800' }
            ]
        },
        {
            id: 'integration',
            title: 'Integration & Database',
            icon: 'fas fa-plug',
            iconColor: '#2196F3',
            skills: [
                { name: 'REST API', icon: 'fas fa-exchange-alt', iconColor: '#FF6B6B' },
                { name: 'SOAP API', icon: 'fas fa-envelope', iconColor: '#9C27B0' },
                { name: 'SOQL', icon: 'fas fa-database', iconColor: '#00A1E0' },
                { name: 'SOSL', icon: 'fas fa-search', iconColor: '#4CAF50' },
                { name: 'Data Modeling', icon: 'fas fa-project-diagram', iconColor: '#FF9800' }
            ]
        },
        {
            id: 'frameworks',
            title: 'Libraries & Frameworks',
            icon: 'fas fa-layer-group',
            iconColor: '#607D8B',
            skills: [
                { name: 'FastAPI', icon: 'devicon-fastapi-plain', iconColor: '#009688' },
                { name: 'Flask', icon: 'devicon-flask-original', iconColor: '#000000' },
                { name: 'Pandas', icon: 'devicon-pandas-plain', iconColor: '#150458' },
                { name: 'NumPy', icon: 'devicon-numpy-plain', iconColor: '#013243' },
                { name: 'Selenium', icon: 'fas fa-robot', iconColor: '#43B02A' },
                { name: 'Scrapy', icon: 'fas fa-spider', iconColor: '#60A839' }
            ]
        },
        {
            id: 'tools',
            title: 'Development Tools',
            icon: 'fas fa-tools',
            iconColor: '#FF9800',
            skills: [
                { name: 'Git', icon: 'devicon-git-plain', iconColor: '#F05032' },
                { name: 'GitHub', icon: 'devicon-github-original', iconColor: '#FF9800' },
                { name: 'JIRA', icon: 'devicon-jira-plain', iconColor: '#0052CC' },
                { name: 'Linux', icon: 'devicon-linux-plain', iconColor: '#FCC624' },
                { name: 'Visual Studio', icon: 'devicon-visualstudio-plain', iconColor: '#5C2D91' }
            ]
        },
        {
            id: 'methodologies',
            title: 'Methodologies & Other',
            icon: 'fas fa-tasks',
            iconColor: '#673AB7',
            skills: [
                { name: 'Agile', icon: 'fas fa-sync', iconColor: '#FF6B6B' },
                { name: 'Scrum', icon: 'fas fa-users', iconColor: '#4CAF50' },
                { name: 'BMC Remedy', icon: 'fas fa-ticket-alt', iconColor: '#2196F3' },
                { name: 'Excel', icon: 'fas fa-file-excel', iconColor: '#217346' },
                { name: 'Google Colab', icon: 'fas fa-brain', iconColor: '#F9AB00' }
            ]
        }
    ];

    renderedCallback() {
        this.updateIconColors();
    }

    updateIconColors() {
        this.template.querySelectorAll('i[data-color]').forEach(icon => {
            icon.style.setProperty('--icon-color', icon.dataset.color);
        });
    }

    get formattedCategories() {
        return this.skillCategories.map(category => ({
            ...category,
            isImageIcon: category.icon.startsWith('http'),
            skills: category.skills.map(skill => ({
                ...skill,
                isImageIcon: skill.icon.startsWith('http')
            }))
        }));
    }
}
