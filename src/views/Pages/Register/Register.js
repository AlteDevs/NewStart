import React, { Component } from 'react';
import { Form as FormProvider, Field } from 'react-final-form';
import {
	Button,
	Card,
	CardBody,
	CardFooter,
	Col,
	Container,
	Form,
	Input,
	InputGroup,
	InputGroupAddon,
	InputGroupText,
	Row,
	TabContent
} from 'reactstrap';
import Nav from 'reactstrap/src/Nav';
import NavItem from 'reactstrap/src/NavItem';
import NavLink from 'reactstrap/src/NavLink';
import classnames from 'classnames';

class Register extends Component {
	state = {
		activeTab: '1',
	};

	onSubmit = (values) => {
		console.log(values)
	}

	formValidate = () => {

	}

	toggle(tab) {
		if (this.state.activeTab !== tab) {
			this.setState({
				activeTab: tab,
			});
		}
	}

	render() {
		return (
			<div className="app flex-row align-items-center">
				<Container>
					<Row className="justify-content-center">
						<Col md="6">
							<Card className="mx-4">
								<CardBody className="p-4">
									<FormProvider
										onSubmit={ this.onSubmit }
										// validate={ this.formValidate }
										render={({
															 handleSubmit,
															 form,
															 values,
														 }) => {
                      return (
												<Form>
													<h1>Регистрация</h1>
													<p className="text-muted">Создайте свой аккаунт</p>
													<Nav tabs>
														<NavItem>
															<NavLink
																className={classnames({ active: this.state.activeTab === '1' })}
																onClick={() => { this.toggle('1'); }}
															>
																Home
															</NavLink>
														</NavItem>
														<NavItem>
															<NavLink
																className={classnames({ active: this.state.activeTab === '2' })}
																onClick={() => { this.toggle('2'); }}
															>
																Profile
															</NavLink>
														</NavItem>
														<NavItem>
															<NavLink
																className={classnames({ active: this.state.activeTab === '3' })}
																onClick={() => { this.toggle('3'); }}
															>
																Messages
															</NavLink>
														</NavItem>
													</Nav>
													<InputGroup className="mb-3">
														<Field name="lastName">
															{({ input, meta }) => (
																<Input
																	type="text"
																	placeholder="Фамилия"
																	autoComplete="Николаев"
																	{...input}
																/>
															)}
														</Field>
													</InputGroup>
													<InputGroup className="mb-3">
														<Field name="firstName">
															{({ input, meta }) => (
																<Input
																	type="text"
																	placeholder="Имя"
																	autoComplete="Владимир"
																	{...input}
																/>
															)}
														</Field>
													</InputGroup>
													<InputGroup className="mb-3">
														<Field name="middleName">
															{({ input, meta }) => (
																<Input
																	type="text"
																	placeholder="Отчество"
																	autoComplete="Петрович"
																	{...input}
																/>
															)}
														</Field>
													</InputGroup>
													<InputGroup className="mb-3">
														<Field name="email">
															{({ input, meta }) => (
																<Input
																	type="text"
																	placeholder="E-Mail"
																	autoComplete="test@example.ru"
																	{...input}
																/>
															)}
														</Field>
													</InputGroup>
													<InputGroup className="mb-3">
														<Field name="password">
															{({ input, meta }) => (
																<Input
																	type="password"
																	placeholder="Пароль"
																	{...input}
																/>
															)}
														</Field>
													</InputGroup>
													<InputGroup className="mb-3">
														<Field name="repeatPassword">
															{({ input, meta }) => (
																<Input
																	type="password"
																	placeholder="Повторите пароль"
																	{...input}
																/>
															)}
														</Field>
													</InputGroup>
													<Button
														onClick={handleSubmit}
														color="success"
														block>
														Создать аккаунт
													</Button>
												</Form>
                      )
                    }}
                  />
								</CardBody>
							</Card>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default Register;
