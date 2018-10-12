import React, { Component, Fragment } from 'react';
import { MemoryRouter, Route, Switch } from 'react-router';
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
							component={props => <UserTestItem {...props} question={item} />}
						/>
					))}
					<Route path="*" component={() => <div>Данный тест не найден</div>} />
				</Switch>
			</MemoryRouter>
		);
	}
}

export default UserTest;
