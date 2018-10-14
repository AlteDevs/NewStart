import React, { Component, Fragment } from 'react';
import {
	Card,
	CardHeader,
	CardBody,
	Button,
	Form,
	FormGroup,
	Label,
	Input,
	FormText
} from 'reactstrap';

class UserProfile extends Component {
	render() {
		return (
			<div className="animated fadeIn">
				<h1>Профиль пользователя</h1>
				<Card>
					<CardHeader>Редактирование профиля</CardHeader>
					<CardBody>
						<Form>
							<FormGroup>
								<Label for="userLastName">Фамилия</Label>
								<Input     
									type="text"
									name="userLastName"
									id="userLastName"
									placeholder="Фамилия"
									value="Пупкин"
								/>
							</FormGroup>
							<FormGroup>
								<Label for="userFirstName">Имя</Label>
								<Input
									type="text"
									name="userFirstName"
									id="userFirstName"
									placeholder="Имя"
									value="Василий"
								/>
							</FormGroup>
							<FormGroup>
								<Label for="userMiddleName">Отчество</Label>
								<Input
									type="text"
									name="userMiddleName"
									id="userMiddleName"
									placeholder="Отчество"
									value="Епифанович"
								/>
							</FormGroup>
							<FormGroup>
								<Label for="userEmail">E-mail</Label>
								<Input
									type="text"
									name="userEmail"
									id="userEmail"
									placeholder="E-mail"
									value="example@mail.ru"
								/>
							</FormGroup>
							<Button color="success">Сохранить</Button>
						</Form>
					</CardBody>
				</Card>
			</div>
		);
	}
}

export default UserProfile;
