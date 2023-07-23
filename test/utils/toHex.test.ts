import { toHex } from "../../src/utils/UtilityFunctions";

describe("toHex function", () => {
	// Setup
	const mockInt = 12345;
	const mockHex = "0x3039"; // 12345 as a hex
	const hexadecimal = /0x[\da-f]/i;

	// Actions and Assertions
	it("should return a string", () => {
		expect(typeof toHex(mockInt)).toBe("string");
	});
	it("should return a hex", () => {
		expect(toHex(mockInt)).toMatch(hexadecimal);
	});
	it("should convert an integer to the correct hex string", () => {
		expect(toHex(mockInt)).toEqual(mockHex);
	});
});
