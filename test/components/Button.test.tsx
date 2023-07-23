import { fireEvent, render } from "@testing-library/react";
import React from "react";

import Button from "../../src/components/Button";

describe("<Button />", () => {
	let count: number;
	let setCount: jest.Mock;

	beforeEach(() => {
		count = 0;
		setCount = jest.fn();
	});

	it("renders without crashing", () => {
		const { getByText } = render(
			<Button count={count} setCount={setCount} />
		);
		expect(getByText("Increase count!")).toBeInTheDocument();
	});

	it("increases count on click", () => {
		const { getByText } = render(
			<Button count={count} setCount={setCount} />
		);
		fireEvent.click(getByText("Increase count!"));
		expect(setCount).toHaveBeenCalledWith(1);
	});
});
