/* eslint-disable import/prefer-default-export */
export const toHex = (num: number): string => {
	const val: number = Number(num);
	return `0x${val.toString(16)}`;
};
