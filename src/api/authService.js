let logoutCallback = null;

export function registerLogout(callback) {
    logoutCallback = callback;
}

export function forceLogout(message) {
    if (logoutCallback) {
        logoutCallback(message);
    }
}