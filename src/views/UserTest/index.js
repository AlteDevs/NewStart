import React, { Component, Fragment } from 'react';
import { MemoryRouter, Route, Switch } from 'react-router';
import { Alert } from 'reactstrap';
import UserTestItem from './UserTestItem';
import testData from './testData.js';

class UserTest extends Component {
	componentWillMount() {
		let { testId } = this.props.match.params;
		this.setState({
			questions: testData[testId] ? testData[testId].questions : []
		});
	}
	render() {
		let { questions } = this.state;
		return (
			<MemoryRouter>
				<Switch>
					{questions.map((item, index) => (
						<Route
							path={index === 0 ? '/' : `/question${item.id}`}
							exact
							key={index}
							component={props => (
								<UserTestItem
									{...props}
									question={item}
									questionsCount={questions.length}
									questionIndex={index + 1}
								/>
							)}
						/>
					))}
					<Route
						path="*"
						component={() => (
							<Alert color="success">
								<h4 className="alert-heading">Отлично!</h4>
								<p>Вы без каких-либо проблеб прошли данный тест !</p>
								<hr />
								<p className="mb-0">
									Продолжайте в том же духе и у вас все получится !
								</p>
							</Alert>
						)}
					/>
				</Switch>
			</MemoryRouter>
		);
	}
}

export default UserTest;
