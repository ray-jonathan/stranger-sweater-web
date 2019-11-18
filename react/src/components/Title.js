import React from 'react';
import './Title.css';
function Title(props) {
	return (
		<>
			<div className='title'>
				<div className='st'>
					<div className='st-bound st-bound-full'></div>
					<p className='st-stranger'>
						<span className='st-drop st-stranger-s'>S</span>
						<span className='st-stranger-t'>t</span>
						<span className='st-stranger-r'>r</span>
						<span className='st-stranger-a'>a</span>
						<span className='st-stranger-n'>n</span>
						<span className='st-stranger-g'>g</span>
						<span className='st-stranger-e'>e</span>
						<span className='st-drop st-stranger-r-2'>r</span>
					</p>
					<div className='st-bottom'>
						<div className='left-bound'>
							<div className='st-bound st-bound-mini st-bound-left'></div>
						</div>
						<p>
							<span className='st-things-s'>S</span>
							<span className='st-things-w'>w</span>
							<span className='st-things-e'>e</span>
							<span className='st-things-a'>a</span>
							<span className='st-things-t'>t</span>
							<span className='st-things-e'>e</span>
							<span className='st-things-r'>r</span>
						</p>
						<div className='right-bound'>
							<div className='st-bound st-bound-mini st-bound-right'></div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
export default Title;
