import { render } from "@testing-library/react";
import React from "react";

import Text from "../../src/components/Text";
import { toHex } from "../../src/utils/UtilityFunctions";

describe("<Text />", () => {
	it("renders without crashing", () => {
		const count = 0;
		const { getByText } = render(<Text count={count} />);
		expect(
			getByText(`Clicked ${count} (${toHex(count)}) times!`)
		).toBeInTheDocument();
	});

	it("displays the correct text", () => {
		const count = 5;
		const { getByText } = render(<Text count={count} />);
		expect(
			getByText(`Clicked ${count} (${toHex(count)}) times!`)
		).toBeInTheDocument();
	});
});
