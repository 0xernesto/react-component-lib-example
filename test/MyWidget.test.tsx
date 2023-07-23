/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/prop-types */

import { fireEvent, render } from "@testing-library/react";
import React from "react";

import { MyWidget } from "../src";

jest.mock("../src/components/Button", () => {
	function MockButton({
		count,
		setCount,
	}: {
		count: number;
		setCount: React.Dispatch<React.SetStateAction<number>>;
	}) {
		return (
			<button onClick={() => setCount(count + 1)}>Increase count!</button>
		);
	}

	return MockButton;
});

jest.mock("../src/components/Text", () => {
	function MockText({ count }: { count: number }) {
		return <div>Clicked {count} times!</div>;
	}

	return MockText;
});

beforeEach(() => {
	jest.clearAllMocks();
});

describe("<MyWidget />", () => {
	it("renders without crashing", () => {
		render(<MyWidget />);
	});

	it("interacts with the Button component", () => {
		const { getByText } = render(<MyWidget />);

		fireEvent.click(getByText("Increase count!"));
		expect(getByText("Clicked 1 times!")).toBeInTheDocument();
	});

	it("interacts with the Text component", () => {
		const { getByText } = render(<MyWidget />);
		expect(getByText("Clicked 0 times!")).toBeInTheDocument();
	});
});
