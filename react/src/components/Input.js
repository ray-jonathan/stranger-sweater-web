import React from 'react';
import axios from 'axios';
class Input extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			msg: '',
		};
		this.inputRef = React.createRef();
	}

	render() {
		return (
			<form onSubmit={this.submitSweater} style={{ position: 'relative' }}>
				<input
					ref={this.inputRef}
					style={{ zIndex: 1 }}
					onChange={this.updateMsg}
				/>
				<button>Submit</button>
			</form>
		);
	}
	updateMsg = e => {
		this.setState({ msg: e.target.value });
	};
	submitSweater = async e => {
		e.preventDefault();
		const {
			data: { msg },
		} = await axios.post(
			`https://sweater.jonathan-ray.com/?msg=${this.state.msg}`,
		);
		console.log(msg);
		if (msg === this.state.msg) {
			this.inputRef.current.value = '';
			this.setState({ msg: '' });
		}
		// otherwise it failed
	};
}
export default Input;