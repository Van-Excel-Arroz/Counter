import { useState } from 'react';
import './App.css';

export default function App() {
	const [num, setNum] = useState(0);

	const inc = () => {
		setNum(num + 1);
	};

	const dec = () => {
		setNum(num - 1);
	};

	return (
		<div>
			<h1>Counter</h1>
			<h2>The count is: {num}</h2>
			<button onClick={inc}>Increment</button>
			<button onClick={dec}>Decrement</button>
		</div>
	);
}
