import React, { useState } from 'react';
import useTimeout from '../hooks/useTimeout';
export default props => {
	const [contents, setContents] = useState(
		<div className='loader-fade-in'></div>,
	);
	useTimeout(async () => {
		return setContents(null);
	}, 6000);
	return contents;
};
