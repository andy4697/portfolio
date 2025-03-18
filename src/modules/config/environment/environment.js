// Configuration values that will be replaced with environment variables during build
export const config = {
    emailJs: {
        publicKey: process.env.EMAILJS_PUBLIC_KEY || '',
        serviceId: process.env.EMAILJS_SERVICE_ID || '',
        contactTemplateId: process.env.EMAILJS_CONTACT_TEMPLATE_ID || '',
        autoReplyTemplateId: process.env.EMAILJS_AUTO_REPLY_TEMPLATE_ID || ''
    }
};