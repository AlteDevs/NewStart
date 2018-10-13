import React, { Component, Fragment } from 'react';
import {
	Button,
	Card,
	CardBody,
	CardGroup,
	Col,
	Container,
	Form,
	Input,
	InputGroup,
	Row,
  Nav,
  NavItem,
  TabPane,
  TabContent,
  NavLink
} from 'reactstrap';
import { Form as FormProvider, Field } from 'react-final-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { signIn } from '../../../store/auth';
import classnames from 'classnames';

class Login extends Component {
	state = {
		activeTab: '1'
	};

	getRoleType = () => {
		const { activeTab } = this.state;

		switch (activeTab) {
			case '1': {
				return 0;
			}
			case '2': {
				return 1;
			}
			case '3': {
				return 2;
			}
			default:
				return 0;
		}
	};

	onSubmit = values => {
		const { signInAction } = this.props;

		signInAction({
			role: this.getRoleType(),
			...values
		});
	};

	toggle(tab) {
		if (this.state.activeTab !== tab) {
			this.setState({
				activeTab: tab
			});
		}
	}

	renderForm = () => (
		<FormProvider
			onSubmit={this.onSubmit}
			// validate={ this.formValidate }
			render={({ handleSubmit, form, values }) => {
				return (
					<Fragment>
						<InputGroup className="mb-3">
							<Field name="email">
								{({ input, meta }) => (
									<Input type="text" placeholder="E-Mail" {...input} />
								)}
							</Field>
						</InputGroup>
						<InputGroup className="mb-3">
							<Field name="password">
								{({ input, meta }) => (
									<Input type="password" placeholder="Пароль" {...input} />
								)}
							</Field>
						</InputGroup>
						<Row>
							<Col xs="6">
								<Button onClick={handleSubmit} color="primary" className="px-4">
									Авторизация
								</Button>
							</Col>
							<Col xs="6" className="text-right">
								<Button color="link" className="px-0">
									Забыли пароль ?
								</Button>
							</Col>
						</Row>
					</Fragment>
				);
			}}
		/>
	);

	render() {
		return (
			<div className="app flex-row align-items-center">
				<Container>
					<Row className="justify-content-center">
						<Col md="12">
							<CardGroup>
								<Card className="p-4">
									<CardBody>
										<Form>
											<h1>Авторизация</h1>
											<p className="text-muted">Войдите как</p>
											<Nav tabs>
												<NavItem>
													<NavLink
														className={classnames({
															active: this.state.activeTab === '1'
														})}
														onClick={() => {
															this.toggle('1');
														}}
													>
														Профессионал
													</NavLink>
												</NavItem>
												<NavItem>
													<NavLink
														className={classnames({
															active: this.state.activeTab === '2'
														})}
														onClick={() => {
															this.toggle('2');
														}}
													>
														HR - специалист
													</NavLink>
												</NavItem>
												<NavItem>
													<NavLink
														className={classnames({
															active: this.state.activeTab === '3'
														})}
														onClick={() => {
															this.toggle('3');
														}}
													>
														Образовательный сервис
													</NavLink>
												</NavItem>
											</Nav>
											<TabContent activeTab={this.state.activeTab}>
												<TabPane tabId="1">{this.renderForm()}</TabPane>
												<TabPane tabId="2"> {this.renderForm()}</TabPane>
												<TabPane tabId="3"> {this.renderForm()}</TabPane>
											</TabContent>
										</Form>
									</CardBody>
								</Card>
								<Card
									className="text-white bg-primary py-5 d-md-down-none"
									style={{ width: 44 + '%' }}
								>
									<CardBody className="text-center">
										<div>
											<h2>Регистрация</h2>
											<p>
												В случае если у вас нет аккаунта, вы можете
												зарегестрировать его на платформе.
											</p>
											<Button
												onClick={() => this.props.history.push('/signup')}
												color="primary"
												className="mt-3"
												active
											>
												Зарегистрироваться сейчас !
											</Button>
										</div>
									</CardBody>
								</Card>
							</CardGroup>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	signInAction: bindActionCreators(signIn, dispatch)
});

export default connect(
	null,
	mapDispatchToProps
)(Login);
