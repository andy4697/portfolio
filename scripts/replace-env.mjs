import fs from 'fs';
import path from 'path';

const envFile = './src/modules/config/environment/environment.js';

try {
    let content = fs.readFileSync(envFile, 'utf8');
    
    // Replace environment variables
    content = content.replace('process.env.EMAILJS_PUBLIC_KEY', `"${process.env.EMAILJS_PUBLIC_KEY || ''}"`);
    content = content.replace('process.env.EMAILJS_SERVICE_ID', `"${process.env.EMAILJS_SERVICE_ID || ''}"`);
    content = content.replace('process.env.EMAILJS_CONTACT_TEMPLATE_ID', `"${process.env.EMAILJS_CONTACT_TEMPLATE_ID || ''}"`);
    content = content.replace('process.env.EMAILJS_AUTO_REPLY_TEMPLATE_ID', `"${process.env.EMAILJS_AUTO_REPLY_TEMPLATE_ID || ''}"`);
    
    fs.writeFileSync(envFile, content);
    console.log('Environment variables replaced successfully');
} catch (error) {
    console.error('Error replacing environment variables:', error);
    process.exit(1);
}