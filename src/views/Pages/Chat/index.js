import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import ReactBotUI from '../../../containers/Bot';

class Chat extends Component {
	render() {
		return (
			<Row className="bot-container">
				<ReactBotUI
					dialogflow={null}
					dialogHeightMax={700}
					isUserHidden={true}
					isVisible={true}
					title="Бот"
				/>
			</Row>
		);
	}
}

export default Chat;
