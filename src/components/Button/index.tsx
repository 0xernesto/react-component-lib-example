import React, { Dispatch, SetStateAction } from "react";

interface ButtonProps {
	count: number;
	setCount: Dispatch<SetStateAction<number>>;
}

function Button({ count, setCount }: ButtonProps) {
	const handleClick = () => {
		setCount(count + 1);
	};

	return (
		<button
			className="h-16 w-36 rounded-lg bg-gray-900 text-blue-500 hover:bg-gray-800 hover:text-blue-600"
			onClick={handleClick}
		>
			Increase count!
		</button>
	);
}

export default Button;
