import { useState } from 'react';

const StateTest = () => {
	const [counter, setCounter] = useState(0);
	const [inputValue, setInputValue] = useState('Name');

	const increment = () => {
		setCounter(counter + 1);
	};

	let onChange = event => {
		const newValue = event.target.value;
		setInputValue(newValue);
	};
	return (
		<div>
			<p>
				const [first, setfirst] = <b>useState</b>(second)
			</p>
			<div>
				{counter} <button onClick={increment}>Increment</button>
			</div>
			<div>
				<input placeholder='write text' onChange={onChange} />
				{inputValue}
			</div>
		</div>
	);
};

export default StateTest;
