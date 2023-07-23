import React from "react";

import { toHex } from "../../utils/UtilityFunctions";

interface TextProps {
	count: number;
}

function Text({ count }: TextProps) {
	return (
		<div>
			<span className="text-lg text-red-500">
				Clicked {count} ({toHex(count)}) times!
			</span>
		</div>
	);
}

export default Text;
