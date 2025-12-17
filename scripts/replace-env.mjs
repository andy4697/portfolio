import fs from 'fs';
import path from 'path';

const envFile = './src/modules/config/environment/environment.js';

try {
    let content = fs.readFileSync(envFile, 'utf8');
    
    // Replace environment variables with fallbacks
    const publicKey = process.env.EMAILJS_PUBLIC_KEY || 'WDR2-OytpHripohnG';
    const serviceId = process.env.EMAILJS_SERVICE_ID || 'service_qr24frp';
    const contactTemplateId = process.env.EMAILJS_CONTACT_TEMPLATE_ID || 'template_zvgsm2m';
    const autoReplyTemplateId = process.env.EMAILJS_AUTO_REPLY_TEMPLATE_ID || 'template_q9c7nnr';
    
    content = content.replace(/process\.env\.EMAILJS_PUBLIC_KEY \|\| '[^']*'/g, `"${publicKey}"`);
    content = content.replace(/process\.env\.EMAILJS_SERVICE_ID \|\| '[^']*'/g, `"${serviceId}"`);
    content = content.replace(/process\.env\.EMAILJS_CONTACT_TEMPLATE_ID \|\| '[^']*'/g, `"${contactTemplateId}"`);
    content = content.replace(/process\.env\.EMAILJS_AUTO_REPLY_TEMPLATE_ID \|\| '[^']*'/g, `"${autoReplyTemplateId}"`);
    
    fs.writeFileSync(envFile, content);
    console.log('Environment variables replaced successfully');
    console.log(`Public Key: ${publicKey}`);
    console.log(`Service ID: ${serviceId}`);
    console.log(`Contact Template: ${contactTemplateId}`);
    console.log(`Auto Reply Template: ${autoReplyTemplateId}`);
} catch (error) {
    console.error('Error replacing environment variables:', error);
    process.exit(1);
}