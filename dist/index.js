"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.throttle = void 0;
function throttle(funcion, delay) {
    let timeout = null;
    return (...args) => {
        if (timeout !== null) {
            funcion(...args);
            timeout = setTimeout(() => {
                timeout = null;
            }, delay);
        }
    };
}
exports.throttle = throttle;
