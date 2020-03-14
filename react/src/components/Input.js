import React from 'react';
import axios from 'axios';
import './Input.css';
class Input extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			msg: '',
		};
		this.inputRef = React.createRef();
		this.buttonRef = React.createRef();
	}

	render() {
		return (
			<form className='input' onSubmit={this.submitSweater}>
				<input
					ref={this.inputRef}
					style={{ zIndex: 1 }}
					onChange={this.updateMsg}
				/>
				<button className='submit' ref={this.buttonRef}></button>
			</form>
		);
	}
	updateMsg = e => {
		this.setState({ msg: e.target.value });
	};
	submitSweater = async e => {
		e.preventDefault();
		this.buttonRef.current.className = 'submit bonus';
		const {
			data: { msg },
		} = await axios.post(`https://strangersweater.com/?msg=${this.state.msg}`);
		console.log(msg);
		if (msg === this.state.msg) {
			this.inputRef.current.value = '';
			this.setState({ msg: '' }, () => {
				setTimeout(() => {
					this.buttonRef.current.className = 'submit';
				}, 2000);
			});
		}
		// otherwise it failed
	};
}
export default Input;
