import React, { useState, useEffect, useRef } from 'react';
import Sweater from './Sweater';
import axios from 'axios';

export default props => {
	let [phrase, setPhrase] = useState('HO HO HO');
	let [letterIndex, setLetterIndex] = useState(0);

	useInterval(async () => {
		const {
			data: { msg },
		} = await axios.get('https://sweater.jonathan-ray.com/msg');
		setPhrase(msg.toUpperCase());
		console.log(msg);
	}, phrase.length * 750);
	useInterval(async () => {
		if (letterIndex > phrase.length - 1) return setLetterIndex(0);
		return setLetterIndex(letterIndex + 1);
	}, 750);
	return <Sweater lightUp={phrase[letterIndex]} />;
};

function useInterval(callback, delay) {
	const savedCallback = useRef();

	// Remember the latest callback.
	useEffect(() => {
		savedCallback.current = callback;
	}, [callback]);

	// Set up the interval.
	useEffect(() => {
		function tick() {
			savedCallback.current();
		}
		if (delay !== null) {
			let id = setInterval(tick, delay);
			return () => clearInterval(id);
		}
	}, [delay]);
}
