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
	Button,
	Form
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
		let { question, questionsCount, questionIndex, setAnswer } = this.props;
		return (
			<div className="animated fadeIn">
				<Form
					onSubmit={e => {
						e.preventDefault();
						setAnswer(this.state.answer);
						this.props.history.push(
							`/question${parseInt(this.props.question.id) + 1}`
						);
					}}
				>
					<Card>
						<CardHeader>Вопрос №{question.id}</CardHeader>
						<CardBody>
							<h5
								style={{
									marginBottom: 20
								}}
							>
								{question.title}
							</h5>
							{question.variants.map((item, index) => (
								<FormGroup
									check
									className="radio answer-form-group"
									key={index}
								>
									<Label className="form-check-label">
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
											required={true}
										/>
										{item.title}
									</Label>
								</FormGroup>
							))}
						</CardBody>
					</Card>
					<div className="d-flex align-items-center">
						<span
							style={{
								marginRight: 15
							}}
						>
							{questionIndex} / {questionsCount}
						</span>
						<Button color="success" type="submit">
							Следующий вопрос
						</Button>
					</div>
				</Form>
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
