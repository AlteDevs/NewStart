import React, {Component} from 'react';
import ApiAiClient from './lib/dialogflow';
import { withRouter } from 'react-router-dom';
import Header from './components/Header';
import Dialog from './components/Dialog';
import Input from './components/Input';
import mockData from './mockData'
import '../../scss/bot.scss';

const BOT_DELAY = 4000;
const BOT_SPEED = 0.03;
const BOT_MAX_CHARS = 150;

function getBotDelay(msg, isQuick = false) {
  let delay = isQuick ? BOT_DELAY / 2 : BOT_DELAY;
  let speed = isQuick ? BOT_SPEED * 2 : BOT_SPEED;
  return msg.length > BOT_MAX_CHARS ? delay : Math.floor(msg.length / speed);
}

class ReactBotUI extends Component {
  constructor(props) {
    super(props);
    if (props.dialogflow) {
      this.dialogflow = new ApiAiClient(props.dialogflow);
    }
    this.botQueue = mockData
    this.isProcessingQueue = false;
    this.state = {
      title: props.title || 'React Bot UI',
      messages: [],
      isBotTyping: false,
      isOpen: props.isOpen !== undefined ? props.isOpen : true,
      isVisible: props.isVisible !== undefined ? props.isVisible : true
    };

    this.appendMessage = this.appendMessage.bind(this);
    this.processBotQueue = this.processBotQueue.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.handleSubmitText = this.handleSubmitText.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  appendMessage(text, isUser = false, next = () => {}) {
    let messages = this.state.messages.slice();
    messages.push({isUser, text});
    this.setState({messages, isBotTyping: false}, next);
  }

  processBotQueue = (isQuick = false) => {
    if (!this.isProcessingQueue && this.botQueue.length) {
      this.isProcessingQueue = true;
      const nextMsg = this.botQueue.shift();
      if(!this.botQueue.length) {
				setTimeout(() => {
					this.isProcessingQueue = false;
					this.appendMessage(nextMsg, false);
					setTimeout(() => {
					  this.props.history.push('/courses')
          }, 1000)
				}, getBotDelay(nextMsg, isQuick));
      } else {
				setTimeout(() => {  
					this.isProcessingQueue = false;
					this.appendMessage(nextMsg, false);
				}, getBotDelay(nextMsg, isQuick));
      }
    }
  }

  handleSubmitText(text) {
    // append user text
    this.appendMessage(text, true);
    this.processBotQueue()
  }

  handleResize(e) {
    const window = e.target || e;
    const y = window.innerHeight;
    // const header = document.querySelector('.bot-container header');
    const input = document.querySelector('.bot-container .text-form');
    let dialogHeight = y - input.offsetHeight;
    if (dialogHeight < 0 || !dialogHeight) {
      dialogHeight = 0;
    } else if (this.props.dialogHeightMax && dialogHeight > this.props.dialogHeightMax) {
      dialogHeight = this.props.dialogHeightMax;
    }
    this.setState({dialogHeight});
  }
  
  handleToggle() {
    if (this.state.isVisible) {
      this.setState({isOpen: !this.state.isOpen});
    } else {
      this.setState({isVisible: true});
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize(window);
		const nextMsg = this.botQueue.shift();
		setTimeout(() => {
			this.isProcessingQueue = false;
			this.appendMessage(nextMsg, false);
		}, getBotDelay(nextMsg, true));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  render() {
    return (
      <div className="bot-container__body" style={this.state.isVisible ? {display: 'block'} : {display: 'none'}}>
        <div style={this.state.isOpen ? {minHeight: `${this.state.dialogHeight}px`} : {maxHeight: 0, overflow: 'hidden'}}>
          <Dialog messages={this.state.messages}
                  isBotTyping={this.state.isBotTyping}
                  isUserHidden={this.props.isUserHidden}
                  dialogHeight={this.state.dialogHeight} />
          <Input onSubmit={this.handleSubmitText} />
        </div>
      </div>
    );
  }
}

export default withRouter(ReactBotUI)
