import { throttle } from "../index";
import { expect, jest } from "@jest/globals";

jest.useFakeTimers();

describe("probando el método throttle", () => {
  it("debería llamar al callback después del tiempo de espera", () => {
    const callback = jest.fn();
    const Trhottled = throttle(callback, 1000);
    Trhottled();

    expect(callback).toHaveBeenCalledTimes(1);
  });
});
