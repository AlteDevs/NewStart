import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	FormGroup,
	Label,
	Input,
	Button
} from 'reactstrap';
import { setAnswer } from 'store/userTest';

class UserTestItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			answer: null
		};
	}

	render() {
		let { question, setAnswer } = this.props;
		return (
			<div>
				<Card>
					<CardHeader>Вопрос №{question.id}</CardHeader>
					<CardBody>
						<h5>{question.title}</h5>
						{question.variants.map((item, index) => (
							<FormGroup check className="radio" key={index}>
								<Label check className="form-check-label">
									<Input
										className="form-check-input"
										type="radio"
										name="questionVariant"
										onChange={e =>
											this.setState({
												answer: {
													questionId: question.id,
													answerId: item.id
												}
											})
										}
									/>
									{item.title}
								</Label>
							</FormGroup>
						))}
					</CardBody>
				</Card>
				<Button
					color="success"
					onClick={() => {
						console.log(this.state.answer);
						setAnswer(this.state.answer);
						this.props.history.push(
							`/question${parseInt(this.props.question.id) + 1}`
						);
					}}
				>
					Следующий вопрос
				</Button>
			</div>
		);
	}
}

export default connect(
	null,
	dispatch => {
		return {
			setAnswer: answer => dispatch(setAnswer(answer))
		};
	}
)(UserTestItem);
