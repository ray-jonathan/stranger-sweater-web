import React from 'react';
import './Letter.css';
function Letter({ alpha, lightUp = null }) {
	return (
		<li>
			<div className={`letter`}>{alpha}</div>
		</li>
	);
}
export default Letter;
