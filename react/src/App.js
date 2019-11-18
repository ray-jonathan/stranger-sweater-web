import React from 'react';
import './App.css';
import Sweater from './components/Sweater';
import Input from './components/Input';
import Title from './components/Title';

function App() {
	return (
		<div className='app'>
			<Title />
			<Sweater />
			<Input />
		</div>
	);
}

export default App;
