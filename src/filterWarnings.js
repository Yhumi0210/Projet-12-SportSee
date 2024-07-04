// src/filterWarnings.js

const originalWarn = console.warn
console.warn = (message, ...args) => {
    if (typeof message === 'string' && message.includes('Support for defaultProps will be removed')) {
        return
    }
    originalWarn(message, ...args)
}
