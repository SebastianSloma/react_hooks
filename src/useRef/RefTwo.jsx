import { useRef } from 'react';

const RefTwo = () => {
	const inputElement = useRef();
	const handleClick = () => {
		console.log(inputElement.current);
		inputElement.current.style.width = '300px';
	};
	return (
		<div>
			<div>
				<input type='text' ref={inputElement} />
				<button onClick={handleClick}>Click</button>
			</div>
		</div>
	);
};

export default RefTwo;
