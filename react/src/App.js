import React from 'react';
import './App.css';
import Title from './components/Title';
import SweaterVest from './components/SweaterVest';
import UpsideDown from './components/UpsideDown';

function App() {
	return (
		<div className='app'>
			<div className='sweater-background'>
				<Title />
				<SweaterVest />
			</div>
			<UpsideDown />
		</div>
	);
}

export default App;
