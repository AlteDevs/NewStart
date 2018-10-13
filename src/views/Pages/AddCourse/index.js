import React, { Component, Fragment } from 'react';
import { Form as FormProvider, Field } from 'react-final-form';
import {
	Button,
	Card,
	CardBody,
	Col,
	Container,
	Form,
	Input,
	InputGroup,
	Row,
} from 'reactstrap';

class AddCourse extends Component {
	onSubmit = (values) => {
		console.log(values)
	}

	formValidate = () => {

	}

	render() {
		return (
			<div className="app flex-row align-items-center">
				<Container>
					<Row className="justify-content-center">
						<Col md="8">
							<Card className="mx-4">
								<CardBody className="p-4">
									<Form>
										<h1>Создание курса</h1>
										<FormProvider
											onSubmit={ this.onSubmit }
											// validate={ this.formValidate }
											render={({
																 handleSubmit,
															 }) => {
												return (
													<Fragment>
														<InputGroup className="mb-3">
															<Field name="name">
																{({ input, meta }) => (
																	<Input
																		type="text"
																		placeholder="Название курса"
																		{...input}
																	/>
																)}
															</Field>
														</InputGroup>
														<InputGroup className="mb-3">
															<Field name="type">
																{({ input, meta }) => (
																	<Input
																		type="text"
																		placeholder="Тип проведения курса"
																		{...input}
																	/>
																)}
															</Field>
														</InputGroup>
														<InputGroup className="mb-3">
															<Field name="description">
																{({ input, meta }) => (
																	<Input
																		type="text"
																		placeholder="Описание"
																		{...input}
																	/>
																)}
															</Field>
														</InputGroup>
														<InputGroup className="mb-3">
															<Field name="time">
																{({ input, meta }) => (
																	<Input
																		type="text"
																		placeholder="Время курса"
																		{...input}
																	/>
																)}
															</Field>
														</InputGroup>
														<InputGroup className="mb-3">
															<Field name="detailDescription">
																{({ input, meta }) => (
																	<Input
																		type="text"
																		placeholder="Детальное описание"
																		{...input}
																	/>
																)}
															</Field>
														</InputGroup>
														<InputGroup className="mb-3">
															<Field name="geo">
																{({ input, meta }) => (
																	<Input
																		type="text"
																		placeholder="Геолокация"
																		{...input}
																	/>
																)}
															</Field>
														</InputGroup>
														<InputGroup className="mb-3">
															<Field name="reference">
																{({ input, meta }) => (
																	<Input
																		type="text"
																		placeholder="Ссылка на курс"
																		{...input}
																	/>
																)}
															</Field>
														</InputGroup>
														<Button
															onClick={handleSubmit}
															color="success"
															block>
															Создать курс
														</Button>
													</Fragment>
												)
											}}
										/>
									</Form>
								</CardBody>
							</Card>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default AddCourse;
