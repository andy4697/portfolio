import { LightningElement, track } from 'lwc';

export default class CertificationViewer extends LightningElement {
    @track certifications = [
        {
            id: 'admin',
            name: 'Salesforce Administrator',
            shortName: 'Administrator',
            issueDate: 'January 2023',
            iconPath: '/public/assets/certificationDetails/admin.png',
            pdfPath: '/public/assets/certificationDetails/admin.pdf',
            tabId: 'tab-admin',
            linkId: 'tab-admin-link',
            tabClass: 'slds-tabs_default__item slds-is-active',
            contentClass: 'slds-tabs_default__content certification-tab-content active',
            indicatorClass: 'tab-indicator admin',
            selected: 'true',
            tabIndex: '0'
        },
        {
            id: 'developer-1',
            name: 'Platform Developer I',
            shortName: 'Platform Developer I',
            issueDate: 'March 2023',
            iconPath: '/public/assets/certificationDetails/pd1.png',
            pdfPath: '/public/assets/certificationDetails/pd1.pdf',
            tabId: 'tab-dev',
            linkId: 'tab-dev-link',
            tabClass: 'slds-tabs_default__item',
            contentClass: 'slds-tabs_default__content certification-tab-content',
            indicatorClass: 'tab-indicator dev',
            selected: 'false',
            tabIndex: '-1'
        },
        {
            id: 'app-builder',
            name: 'Platform App Builder',
            shortName: 'App Builder',
            issueDate: 'May 2023',
            iconPath: '/public/assets/certificationDetails/appbuilder.png',
            pdfPath: '/public/assets/certificationDetails/pd1.pdf',
            tabId: 'tab-app-builder',
            linkId: 'tab-app-builder-link',
            tabClass: 'slds-tabs_default__item',
            contentClass: 'slds-tabs_default__content certification-tab-content',
            indicatorClass: 'tab-indicator app-builder',
            selected: 'false',
            tabIndex: '-1'
        },
        {
            id: 'developer-2',
            name: 'Platform Developer II',
            shortName: 'Platform Developer II',
            issueDate: 'July 2023',
            iconPath: '/public/assets/certificationDetails/pd2.png',
            pdfPath: '/public/assets/certificationDetails/pd1.pdf',
            tabId: 'tab-service',
            linkId: 'tab-service-link',
            tabClass: 'slds-tabs_default__item',
            contentClass: 'slds-tabs_default__content certification-tab-content',
            indicatorClass: 'tab-indicator service',
            selected: 'false',
            tabIndex: '-1'
        },
        {
            id: 'ai-specialist',
            name: 'AI Specialist',
            shortName: 'AI Specialist',
            issueDate: 'September 2023',
            iconPath: '/public/assets/certificationDetails/aispecialist.png',
            pdfPath: '/public/assets/certificationDetails/aispecialist.pdf',
            tabId: 'tab-experience',
            linkId: 'tab-experience-link',
            tabClass: 'slds-tabs_default__item',
            contentClass: 'slds-tabs_default__content certification-tab-content',
            indicatorClass: 'tab-indicator experience',
            selected: 'false',
            tabIndex: '-1'
        }
    ];
    
    handleTabClick(event) {
        const selectedTabId = event.currentTarget.dataset.id;
        
        // Reset all tabs
        this.certifications.forEach(cert => {
            cert.tabClass = 'slds-tabs_default__item';
            cert.contentClass = 'slds-tabs_default__content certification-tab-content';
            cert.selected = 'false';
            cert.tabIndex = '-1';
        });
        
        // Activate selected tab
        const selectedCert = this.certifications.find(cert => cert.id === selectedTabId);
        if (selectedCert) {
            selectedCert.tabClass = 'slds-tabs_default__item slds-is-active';
            selectedCert.contentClass = 'slds-tabs_default__content certification-tab-content active';
            selectedCert.selected = 'true';
            selectedCert.tabIndex = '0';
        }
        
        // Force component to re-render
        this.certifications = [...this.certifications];
    }
}