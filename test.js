const { calculateCO2 } = require('../script.js'); // Import function for testing that is in the root 

describe("CO2 Emissions Calculator", () => {

    test("calculates CO2 emissions correctly for 100 miles", () => {
        expect(calculateCO2(100)).toBe("11.50"); // 100 * 0.115 = 11.50
    });

    test("calculates CO2 emissions correctly for 500 miles", () => {
        expect(calculateCO2(500)).toBe("57.50"); // 500 * 0.115 = 57.50
    });

    test("throws an error for negative distance", () => {
        expect(() => calculateCO2(-50)).toThrow("Invalid distance. Please enter a positive number.");
    });

    test("throws an error for zero distance", () => {
        expect(() => calculateCO2(0)).toThrow("Invalid distance. Please enter a positive number.");
    });

    test("throws an error for non-numeric input", () => {
        expect(() => calculateCO2("abc")).toThrow("Invalid distance. Please enter a positive number.");
    });

    test("throws an error for empty input", () => {
        expect(() => calculateCO2()).toThrow("Invalid distance. Please enter a positive number.");
    });

});