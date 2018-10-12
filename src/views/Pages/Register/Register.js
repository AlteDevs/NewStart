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
	Row
} from 'reactstrap';

class Register extends Component {
	render() {
		return (
			<div className="app flex-row align-items-center">
				<Container>
					<Row className="justify-content-center">
						<Col md="6">
							<Card className="mx-4">
								<CardBody className="p-4">
									<FormProvider
                    render={() => {

                      return (
												<Form>
													<h1>Регистрация</h1>
													<p className="text-muted">Создайте свой аккаунт</p>
													<InputGroup className="mb-3">
														<Input
															type="text"
															placeholder="Username"
															autoComplete="username"
														/>
													</InputGroup>
													<InputGroup className="mb-3">
														<Input
															type="text"
															placeholder="Email"
															autoComplete="email"
														/>
													</InputGroup>
													<InputGroup className="mb-3">
														<Input
															type="password"
															placeholder="Password"
															autoComplete="new-password"
														/>
													</InputGroup>
													<InputGroup className="mb-4">
														<Input
															type="password"
															placeholder="Repeat password"
															autoComplete="new-password"
														/>
													</InputGroup>
													<Button color="success" block>
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
