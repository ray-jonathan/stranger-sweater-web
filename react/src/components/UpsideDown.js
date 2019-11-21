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
			<Input />
			<div className='attribution'>
				Having fun? Learn more about{' '}
				<a href='https://github.com/ray-jonathan/stranger-sweater-web'>
					this project
				</a>{' '}
				and <a href='https://jonathan-ray.com'>the creator.</a>
			</div>
		</div>
	);
};
