import { LightningElement } from 'lwc';

export default class CertificationIcons extends LightningElement {
    selectedCertification = null;
    showModal = false;

    certifications = [
        {
            id: 'admin',
            name: 'Salesforce Administrator',
            shortName: 'Administrator',
            issueDate: 'January 2023',
            iconUrl: '/public/assets/certificationDetails/admin.png',
            certificateUrl: '/public/assets/certificationDetails/admin-certificate.png'
        },
        {
            id: 'developer-1',
            name: 'Platform Developer I',
            shortName: 'Developer I',
            issueDate: 'March 2023',
            iconUrl: '/public/assets/certificationDetails/platform-developer-1.png',
            certificateUrl: '/public/assets/certificationDetails/platform-developer-1-certificate.png'
        },
        {
            id: 'app-builder',
            name: 'Platform App Builder',
            shortName: 'App Builder',
            issueDate: 'May 2023',
            iconUrl: '/public/assets/certificationDetails/app-builder.png',
            certificateUrl: '/public/assets/certificationDetails/platform-developer-1-certificate.png'
        },
        {
            id: 'developer-2',
            name: 'Platform Developer II',
            shortName: 'Platform Developer II',
            issueDate: 'July 2023',
            iconUrl: '/public/assets/certificationDetails/platform-developer-2.png',
            certificateUrl: '/public/assets/certificationDetails/platform-developer-1-certificate.png'
        },
        {
            id: 'ai-specialist',
            name: 'AI Specialist',
            shortName: 'AI Specialist',
            issueDate: 'September 2023',
            iconUrl: '/public/assets/certificationDetails/ai-specialist.png',
            certificateUrl: '/public/assets/certificationDetails/ai-specialist-certificate.png'
        }
    ];
    
    handleIconClick(event) {
        const certId = event.currentTarget.dataset.id;
        const clickedCert = this.certifications.find(cert => cert.id === certId);
        
        this.selectedCertification = clickedCert;
        this.showModal = true;
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
    
    handleCloseClick() {
        this.showModal = false;
        this.selectedCertification = null;
        document.body.style.overflow = ''; // Restore scrolling
    }

    handleModalOverlayClick(event) {
        if (event.target === event.currentTarget) {
            this.handleCloseClick();
        }
    }

    handleModalContentClick(event) {
        event.stopPropagation();
    }

    disconnectedCallback() {
        document.body.style.overflow = ''; // Ensure scroll is restored
    }
}