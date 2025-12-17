/**
 * Logger utility that only logs in development environment
 */
class Logger {
    constructor() {
        // Only enable logging in development
        this.isDevelopment = window.location.hostname === 'localhost' || 
                           window.location.hostname === '127.0.0.1' ||
                           window.location.hostname.includes('dev');
    }

    log(message, ...args) {
        if (this.isDevelopment) {
            console.log(`[DEBUG] ${message}`, ...args);
        }
    }

    error(message, ...args) {
        if (this.isDevelopment) {
            console.error(`[ERROR] ${message}`, ...args);
        }
    }

    warn(message, ...args) {
        if (this.isDevelopment) {
            console.warn(`[WARN] ${message}`, ...args);
        }
    }

    info(message, ...args) {
        if (this.isDevelopment) {
            console.info(`[INFO] ${message}`, ...args);
        }
    }
}

export const logger = new Logger();