import React, { useState } from 'react';
import './App.css';
import Title from './components/Title';
import SweaterVest from './components/SweaterVest';
import UpsideDown from './components/UpsideDown';
import Loader from './components/Loader';
import FadeIn from './components/FadeIn';
import useTimeout from './hooks/useTimeout';
import Screenshot from './components/Screenshot';

export default () => {
	const [contents, setContents] = useState(
		<>
			<div className='loader-fade-out'></div>
			<Loader />
		</>,
	);
	useTimeout(async () => {
		return setContents(
			<div className='app'>
				<FadeIn />
				<div className='sweater-background'>
					<Title />
					<SweaterVest />
				</div>
				<UpsideDown />
			</div>,
		);
	}, 6000);
	return contents;
};
