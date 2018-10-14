import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
// import { Form as FormProvider, Field } from 'react-final-form';
import {
	Button,
	Card,
	CardBody,
	Col,
	Container,
	Form,
	Input,
	InputGroup,
	Row
} from 'reactstrap';
import objectToFormData from 'object-to-formdata';
import { createCourse } from 'store/courses';

class AddCourse extends Component {
	constructor(props) {
		super(props);
	}
	onSubmit = async e => {
		e.preventDefault();
		const formData = new FormData(e.nativeEvent.target);
		formData.append('author_id', 1);
		let { createCourse } = this.props;
		await createCourse(formData);
		this.props.history.push('/courses');
	};

	formValidate = () => {};

	render() {
		return (
			<div className="app flex-row align-items-center animated fadeIn">
				<Container>
					<Row className="justify-content-center">
						<Col md="8">
							<Card className="mx-4">
								<CardBody className="p-4">
									<h1>Создание курса</h1>
									<Form onSubmit={this.onSubmit}>
										<InputGroup className="mb-3">
											<Input
												type="text"
												name="title"
												placeholder="Название курса"
												required
											/>
										</InputGroup>
										<InputGroup className="mb-3">
											<Input
												type="text"
												placeholder="Название сервиса"
												required
												name="service_name"
											/>
										</InputGroup>
										<InputGroup className="mb-3">
											<Input
												type="text"
												placeholder="Тип проведения курса"
												required
												name="status"
											/>
										</InputGroup>
										<InputGroup className="mb-3">
											<Input
												type="textarea"
												placeholder="Описание"
												required
												name="description"
											/>
										</InputGroup>
										<InputGroup className="mb-3">
											<Input
												type="textarea"
												placeholder="Полное описание"
												required
												name="detail_desc"
											/>
										</InputGroup>
										<InputGroup className="mb-3">
											<Input
												type="date"
												placeholder="Дата начала курса"
												required
												name="timing_start"
											/>
										</InputGroup>
										<InputGroup className="mb-3">
											<Input
												type="date"
												placeholder="Дата окончания курса"
												required
												name="timing_end"
											/>
										</InputGroup>
										<InputGroup className="mb-3">
											<Input
												type="text"
												placeholder="Местоположение (если в оффлайне)"
												required
												name="geo"
											/>
										</InputGroup>
										<InputGroup className="mb-3">
											<Input
												type="text"
												placeholder="Ссылка на курс"
												required
												name="url_course"
											/>
										</InputGroup>
										<InputGroup className="mb-3">
											<Input
												type="file"
												placeholder="Изображение курса"
												required
												name="picture"
											/>
										</InputGroup>
										<Button type="submit" color="success" block>
											Создать курс
										</Button>
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

export default connect(
	null,
	dispatch => {
		return {
			createCourse: formData => dispatch(createCourse(formData))
		};
	}
)(AddCourse);
