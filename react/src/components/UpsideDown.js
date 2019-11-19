import React from 'react';
import Input from './Input';
import './UpsideDown.css';
export default props => {
	return (
		<div className='upside-down'>
			<div className='upside-down-background snowflakes'>
				<div className='snowflake'>●</div>
				<div className='snowflake'>●</div>
				<div className='snowflake'>●</div>
				<div className='snowflake'>●</div>
				<div className='snowflake'>●</div>
				<div className='snowflake'>●</div>
				<div className='snowflake'>●</div>
				<div className='snowflake'>●</div>
				<div className='snowflake'>●</div>
				<div className='snowflake'>●</div>
				<div className='snowflake'>●</div>
				<div className='snowflake'>●</div>
			</div>
			{/* <div> */}
			<Input />
			{/* </div> */}
		</div>
	);
};
