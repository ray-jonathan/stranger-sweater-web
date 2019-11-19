import React from 'react';
import Title from './Title';
import './Loader.css';
export default props => {
	return (
		<div className='loader'>
			<Title />
			<div className='loader-background'></div>
		</div>
	);
};
