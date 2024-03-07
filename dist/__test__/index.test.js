"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
const globals_1 = require("@jest/globals");
globals_1.jest.useFakeTimers();
describe("probando el método throttle", () => {
    it("debería llamar al callback después del tiempo de espera", () => {
        const callback = globals_1.jest.fn();
        const Trhottled = (0, index_1.throttle)(callback, 1000);
        Trhottled();
        (0, globals_1.expect)(callback).toHaveBeenCalledTimes(1);
    });
});
