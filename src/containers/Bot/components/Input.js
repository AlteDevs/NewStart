import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sendMessage } from '../../../store/bot'
import { EntypoPaperPlane, EntypoMic } from 'react-entypo';
//import Audio from './Audio';

class Input extends Component {
	constructor(props) {
		super(props);
		this.state = { value: '' };

		//this.handleAudio = this.handleAudio.bind(this);
		this.handleChange = this.handleChange.bind(this);
		//this.handleListen = this.handleListen.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	/*handleAudio(e) {
		const last = e.results.length - 1;
		const value = this.state.value + e.results[last][0].transcript;
		this.setState({value});
	}*/

	handleChange(e) {
		const value = e.target.value;
		if (value.length >= 256) {
			alert('You have reached 256 character limit!');
		}
		this.setState({ value });
	}

	/*handleListen() {
		this.audio.listen();
	}*/

	handleSubmit(e) {
		const { sendMessageAction } = this.props
		e.preventDefault();
		this.props.onSubmit(this.state.value)
		sendMessageAction({
			answer: this.state.value,
		})
		this.setState({ value: '' });
	}

	componentDidMount() {
		const { sendMessageAction } = this.props
		sendMessageAction({
			answer: null
		})
		this._text.focus();
		//this.audio = new Audio(this.handleAudioStart, this.handleAudio, this.handleAudioError);
	}

	render() {
		return (
			<form className="text-form" onSubmit={this.handleSubmit}>
				<input
					className="text-input"
					type="text"
					name="inputText"
					placeholder="Введите сообщение"
					value={this.state.value}
					ref={input => (this._text = input)}
					onChange={this.handleChange}
					autoComplete={'false'}
					required
				/>
				{/* <button className="btn-voice"
								type="button"
								value="Voice"
								onClick={this.handleListen}>
					<EntypoMic/>
				</button> */}
				<button className="button-send btn btn-success" type="submit" value="Send">
					<span>Отправить</span> <EntypoPaperPlane />
				</button>
			</form>
		);
	}
}
export default connect(null, (dispatch) => ({
	sendMessageAction: bindActionCreators(sendMessage, dispatch)
}))(Input);
