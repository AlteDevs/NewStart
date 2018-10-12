import React, { Component } from 'react';
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

class UserTestItem extends Component {
	render() {
		let { question } = this.props;
		return (
			<div>
				<Card>
					<CardHeader>Вопрос №{question.id}</CardHeader>
					<CardBody>
						<h5>{question.title}</h5>
						{question.variants.map((item, index) => (
							<FormGroup check className="radio">
								<Label check className="form-check-label">
									<Input
										className="form-check-input"
										type="radio"
										name="questionVariant"
										value={item.id}
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

export default UserTestItem;
