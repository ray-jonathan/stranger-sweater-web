import React from 'react';
import './App.css';
import Input from './components/Input';
import Title from './components/Title';
import SweaterVest from './components/SweaterVest';

function App() {
	return (
		<div className='app'>
			<Title />
			<SweaterVest />
			<Input />
		</div>
	);
}

export default App;
