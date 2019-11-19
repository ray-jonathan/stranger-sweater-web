import React from 'react';
import './Letter.css';
const YELLOW = 'yellow';
const BLUE = 'blue';
const PINK = 'pink';
const GREEN = 'green';
export default ({ alpha, lightUp = null }) => {
	const colorLookup = {
		A: YELLOW,
		B: BLUE,
		C: PINK,
		D: GREEN,
		E: BLUE,
		F: YELLOW,
		G: PINK,
		H: GREEN,
		I: GREEN,
		J: PINK,
		K: BLUE,
		L: GREEN,
		M: YELLOW,
		N: PINK,
		O: PINK,
		P: GREEN,
		Q: PINK,
		R: GREEN,
		S: YELLOW,
		T: YELLOW,
		U: BLUE,
		V: PINK,
		W: BLUE,
		X: YELLOW,
		Y: PINK,
		Z: PINK,
	};

	return (
		<li className={lightUp ? `flash-${colorLookup[alpha]}` : null}>
			<div className='letter'>{alpha}</div>
		</li>
	);
};
