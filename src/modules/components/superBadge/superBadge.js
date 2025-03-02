import { LightningElement } from 'lwc';

export default class Superbadges extends LightningElement {
    superbadges = [
        {
            id: '1',
            name: 'Approval Process',
            iconPath: '/public/assets/superbadges/approvalProcess.png'
        },
        {
            id: '2',
            name: 'Approval Process Troubleshooting',
            iconPath: '/public/assets/superbadges/approvalProcessTroubleshooting.png'
        }
    ];
}