let emailJsLoaded = false;
let emailJsLoadPromise = null;

/**
 * Loads the EmailJS script once and initializes it with the provided public key.
 * Returns the same promise for subsequent calls to avoid duplicate script tags.
 */
export function loadEmailJs(publicKey) {
    if (emailJsLoaded) {
        return Promise.resolve();
    }

    if (emailJsLoadPromise) {
        return emailJsLoadPromise;
    }

    emailJsLoadPromise = new Promise((resolve, reject) => {
        if (window.emailjs) {
            window.emailjs.init({ publicKey });
            emailJsLoaded = true;
            resolve();
            return;
        }

        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
        script.async = true;

        script.onload = () => {
            try {
                window.emailjs.init({ publicKey });
                emailJsLoaded = true;
                resolve();
            } catch (initError) {
                reject(initError);
            }
        };

        script.onerror = () => {
            reject(new Error('Failed to load EmailJS script'));
        };

        document.head.appendChild(script);
    });

    return emailJsLoadPromise;
}

/**
 * Sends an email using EmailJS.
 * @returns {Promise<Object>} EmailJS response
 */
export async function sendEmail(serviceId, templateId, params) {
    if (!window.emailjs) {
        throw new Error('EmailJS not loaded');
    }

    return window.emailjs.send(serviceId, templateId, params);
}