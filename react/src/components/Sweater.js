import React from 'react';
import Letter from './Letter';
import './Sweater.css';
function Sweater(props) {
	const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	const row1 = alphabet
		.split('')
		.slice(0, 8)
		.map((alpha, i) => <Letter key={`1-${i}`} alpha={alpha} />);
	const row2 = alphabet
		.split('')
		.slice(8, 17)
		.map((alpha, i) => <Letter key={`2-${i}`} alpha={alpha} />);
	const row3 = alphabet
		.split('')
		.slice(17, 26)
		.map((alpha, i) => <Letter key={`3-${i}`} alpha={alpha} />);
	return (
		<>
			<ul className='sweater row-1'>{row1}</ul>
			<ul className='sweater row-2'>{row2}</ul>
			<ul className='sweater row-3'>{row3}</ul>
		</>
	);
}
export default Sweater;
