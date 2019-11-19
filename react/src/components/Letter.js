import React from 'react';
import './Letter.css';
function Letter({ alpha, lightUp = null }) {
	const colorLookup = {
		A: {
			background: 'rgba(209, 183, 68, 0.7)',
			_background: 'rgba(209, 183, 68, 0.2)',
			boxShadow: '0px 0.3em 0.2em 1em rgba(209, 183, 68, 0.502)',
			_boxShadow: '0px 0.3em 1.4em 1em rgba(209, 183, 68, 1)',
		},
		B: {
			background: 'rgba(18, 157, 221, 0.7)',
			_background: 'rgba(18, 157, 221, 0.2)',
			boxShadow: '0px 0.3em 0.2em 1em rgba(18, 157, 221, 0.502)',
			_boxShadow: '0px 0.3em 1.4em 1em rgba(18, 157, 221, 1)',
		},
		C: {
			background: 'rgba(240, 36, 131, 0.6)',
			_background: 'rgba(240, 36, 131, 0.2)',
			boxShadow: '0px 0.3em 0.2em 1em rgba(240, 36, 131, 0.502)',
			_boxShadow: '0px 0.3em 1.4em 1em rgba(240, 36, 131, 1)',
		},
		D: {
			background: 'rgba(66, 178, 98, 0.7)',
			boxShadow: 'rgba(66, 178, 98, 0.502)',
			_background: 'rgba(66, 178, 98, 0)',
			_boxShadow: '0px 0.3em 1.4em 1em rgba(66, 178, 98, 1)',
		},
		E: {
			background: 'rgba(18, 157, 221, 0.7)',
			_background: 'rgba(18, 157, 221, 0.2)',
			boxShadow: '0px 0.3em 0.2em 1em rgba(18, 157, 221, 0.502)',
			_boxShadow: '0px 0.3em 1.4em 1em rgba(18, 157, 221, 1)',
		},
		F: {
			background: 'rgba(209, 183, 68, 0.7)',
			_background: 'rgba(209, 183, 68, 0.2)',
			boxShadow: '0px 0.3em 0.2em 1em rgba(209, 183, 68, 0.502)',
			_boxShadow: '0px 0.3em 1.4em 1em rgba(209, 183, 68, 1)',
		},
		G: {
			background: 'rgba(240, 36, 131, 0.6)',
			_background: 'rgba(240, 36, 131, 0.2)',
			boxShadow: '0px 0.3em 0.2em 1em rgba(240, 36, 131, 0.502)',
			_boxShadow: '0px 0.3em 1.4em 1em rgba(240, 36, 131, 1)',
		},
		H: {
			background: 'rgba(66, 178, 98, 0.7)',
			boxShadow: 'rgba(66, 178, 98, 0.502)',
			_background: 'rgba(66, 178, 98, 0.2)',
			_boxShadow: '0px 0.3em 1.4em 1em rgba(66, 178, 98, 1)',
		},
		I: {
			background: 'rgba(66, 178, 98, 0.7)',
			boxShadow: ' 0px 0.3em 0.2em 1em rgba(66, 178, 98, 0.502)',
			_background: ' rgba(66, 178, 98, 0.2)',
			_boxShadow: '0px 0.3em 1.4em 1em rgba(66, 178, 98, 1)',
		},
		J: {
			background: 'rgba(240, 36, 131, 0.6)',
			_background: 'rgba(240, 36, 131, 0.2)',
			boxShadow: '0px 0.3em 0.2em 1em rgba(240, 36, 131, 0.502)',
			_boxShadow: '0px 0.3em 1.4em 1em rgba(240, 36, 131, 1)',
		},
		K: {
			background: 'rgba(18, 157, 221, 0.7)',
			_background: 'rgba(18, 157, 221, 0.2)',
			boxShadow: '0px 0.3em 0.2em 1em rgba(18, 157, 221, 0.502)',
			_boxShadow: '0px 0.3em 1.4em 1em rgba(18, 157, 221, 1)',
		},
		L: {
			background: 'rgba(66, 178, 98, 0.7)',
			boxShadow: 'rgba(66, 178, 98, 0.502)',
			_background: 'rgba(66, 178, 98, 0)',
			_boxShadow: '0px 0.3em 1.4em 1em rgba(66, 178, 98, 1)',
		},
		M: {
			background: 'rgba(209, 183, 68, 0.7)',
			_background: 'rgba(209, 183, 68, 0.2)',
			boxShadow: '0px 0.3em 0.2em 1em rgba(209, 183, 68, 0.502)',
			_boxShadow: '0px 0.3em 1.4em 1em rgba(209, 183, 68, 1)',
		},
		N: {
			background: 'rgba(240, 36, 131, 0.6)',
			_background: 'rgba(240, 36, 131, 0.2)',
			boxShadow: '0px 0.3em 0.2em 1em rgba(240, 36, 131, 0.502)',
			_boxShadow: '0px 0.3em 1.4em 1em rgba(240, 36, 131, 1)',
		},
		O: {
			background: 'rgba(240, 36, 131, 0.6)',
			_background: 'rgba(240, 36, 131, 0.2)',
			boxShadow: '0px 0.3em 0.2em 1em rgba(240, 36, 131, 0.502)',
			_boxShadow: '0px 0.3em 1.4em 1em rgba(240, 36, 131, 1)',
		},
		P: {
			background: 'rgba(66, 178, 98, 0.7)',
			boxShadow: ' 0px 0.3em 0.2em 1em rgba(66, 178, 98, 0.502)',
			_background: ' rgba(66, 178, 98, 0.2)',
			_boxShadow: '0px 0.3em 1.4em 1em rgba(66, 178, 98, 1)',
		},
		Q: {
			background: 'rgba(240, 36, 131, 0.6)',
			_background: 'rgba(240, 36, 131, 0.2)',
			boxShadow: '0px 0.3em 0.2em 1em rgba(240, 36, 131, 0.502)',
			_boxShadow: '0px 0.3em 1.4em 1em rgba(240, 36, 131, 1)',
		},
		R: {
			background: 'rgba(66, 178, 98, 0.7)',
			boxShadow: ' 0px 0.3em 0.2em 1em rgba(66, 178, 98, 0.502)',
			_background: ' rgba(66, 178, 98, 0.2)',
			_boxShadow: '0px 0.3em 1.4em 1em rgba(66, 178, 98, 1)',
		},
		S: {
			background: 'rgba(209, 183, 68, 0.7)',
			_background: 'rgba(209, 183, 68, 0.2)',
			boxShadow: '0px 0.3em 0.2em 1em rgba(209, 183, 68, 0.502)',
			_boxShadow: '0px 0.3em 1.4em 1em rgba(209, 183, 68, 1)',
		},
		T: {
			background: 'rgba(209, 183, 68, 0.7)',
			_background: 'rgba(209, 183, 68, 0.2)',
			boxShadow: '0px 0.3em 0.2em 1em rgba(209, 183, 68, 0.502)',
			_boxShadow: '0px 0.3em 1.4em 1em rgba(209, 183, 68, 1)',
		},
		U: {
			background: 'rgba(18, 157, 221, 0.7)',
			_background: 'rgba(18, 157, 221, 0.2)',
			boxShadow: '0px 0.3em 0.2em 1em rgba(18, 157, 221, 0.502)',
			_boxShadow: '0px 0.3em 1.4em 1em rgba(18, 157, 221, 1)',
		},
		V: {
			background: 'rgba(240, 36, 131, 0.6)',
			_background: 'rgba(240, 36, 131, 0.2)',
			boxShadow: '0px 0.3em 0.2em 1em rgba(240, 36, 131, 0.502)',
			_boxShadow: '0px 0.3em 1.4em 1em rgba(240, 36, 131, 1)',
		},
		W: {
			background: 'rgba(18, 157, 221, 0.7)',
			_background: 'rgba(18, 157, 221, 0.2)',
			boxShadow: '0px 0.3em 0.2em 1em rgba(18, 157, 221, 0.502)',
			_boxShadow: '0px 0.3em 1.4em 1em rgba(18, 157, 221, 1)',
		},
		X: {
			background: 'rgba(209, 183, 68, 0.7)',
			_background: 'rgba(209, 183, 68, 0.2)',
			boxShadow: '0px 0.3em 0.2em 1em rgba(209, 183, 68, 0.502)',
			_boxShadow: '0px 0.3em 1.4em 1em rgba(209, 183, 68, 1)',
		},
		Y: {
			background: 'rgba(240, 36, 131, 0.6)',
			_background: 'rgba(240, 36, 131, 0.2)',
			boxShadow: '0px 0.3em 0.2em 1em rgba(240, 36, 131, 0.502)',
			_boxShadow: '0px 0.3em 1.4em 1em rgba(240, 36, 131, 1)',
		},
		Z: {
			background: 'rgba(240, 36, 131, 0.6)',
			_background: 'rgba(240, 36, 131, 0.2)',
			boxShadow: '0px 0.3em 0.2em 1em rgba(240, 36, 131, 0.502)',
			_boxShadow: '0px 0.3em 1.4em 1em rgba(240, 36, 131, 1)',
		},
	};

	const results = colorLookup[alpha];
	return (
		<li
			style={
				lightUp
					? { background: results._background, boxShadow: results._boxShadow }
					: null
			}
		>
			<div className='letter'>{alpha}</div>
		</li>
	);
}
export default Letter;
