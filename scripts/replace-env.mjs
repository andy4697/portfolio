import fs from 'fs';
import path from 'path';

const envFile = './site/config/environment/environment.js';

try {
    let content = fs.readFileSync(envFile, 'utf8');
    
    content = content.replace('__EMAILJS_PUBLIC_KEY__', process.env.EMAILJS_PUBLIC_KEY || '');
    content = content.replace('__EMAILJS_SERVICE_ID__', process.env.EMAILJS_SERVICE_ID || '');
    content = content.replace('__EMAILJS_CONTACT_TEMPLATE_ID__', process.env.EMAILJS_CONTACT_TEMPLATE_ID || '');
    content = content.replace('__EMAILJS_AUTO_REPLY_TEMPLATE_ID__', process.env.EMAILJS_AUTO_REPLY_TEMPLATE_ID || '');
    
    fs.writeFileSync(envFile, content);
    console.log('Environment variables replaced successfully');
} catch (error) {
    console.error('Error replacing environment variables:', error);
    process.exit(1);
}