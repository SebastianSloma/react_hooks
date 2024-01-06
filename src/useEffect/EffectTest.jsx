import { useEffect, useState } from 'react';
import axios from 'axios';

const EffectTest = () => {
	const [data, setData] = useState('');
	const [count, setCount] = useState(0);

	useEffect(() => {
		axios.get('http://jsonplaceholder.typicode.com/comments').then(response => {
			setData(response.data[0].email);
			console.log('API WORKS HERE');
		});
	},[]);

	return (
		<div>
			<p>
				<b>useEffect</b>
			</p>
			<div>
				<h1>{data}</h1>
				<h1>{count}</h1>
				<button
					onClick={() => {
						setCount(count + 1);
					}}>
					Click
				</button>
			</div>
		</div>
	);
};

export default EffectTest;
