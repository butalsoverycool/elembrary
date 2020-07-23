import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Button from './components/Button';

function App() {
	const [power, setPower] = useState(false);

	const clickHandler = () => {
		setPower(!power ? true : false);
	};

	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />

				<p>elemrary!</p>

				<Button
					id='gogogo'
					className='action-button'
					text={power ? 'on' : 'off'}
					onClick={() => {
						clickHandler();
					}}
					mode={power ? 'success' : null}
				/>
			</header>
		</div>
	);
}

export default App;
