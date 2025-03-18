import { LightningElement, api } from 'lwc';

export default class CopyCode extends LightningElement {
    @api code;

    handleCopy() {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(this.code)
                .then(() => {
                    // Optional: Add a success indicator
                    const button = this.template.querySelector('button');
                    button.classList.add('copied');
                    setTimeout(() => {
                        button.classList.remove('copied');
                    }, 2000);
                })
                .catch(err => {
                    console.error('Failed to copy text: ', err);
                });
        }
    }
}