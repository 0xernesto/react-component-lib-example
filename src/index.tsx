/* eslint-disable import/prefer-default-export */
import "./styles/tailwind.css";

import React, { useState } from "react";

import Button from "./components/Button";
import Text from "./components/Text";

export function MyWidget() {
	const [count, setCount] = useState<number>(0);

	return (
		<div className="flex h-5/6 w-5/6 flex-col items-center justify-center rounded-lg p-4 ring-2 ring-blue-900">
			<Button count={count} setCount={setCount} />
			<div className="mt-5">
				<Text count={count} />
			</div>
		</div>
	);
}
