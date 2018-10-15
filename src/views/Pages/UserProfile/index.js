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
import Loader from '../../../views/Loader'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUser } from '../../../store/user';

class UserProfile extends Component {
	componentDidMount() {
		const { fetchUserAction, userId } = this.props;

		fetchUserAction(userId);
	}

	render() {
		const { user, pending } = this.props

		return (
			<div className="animated fadeIn">
				<h1>Профиль пользователя</h1>
				<Loader isVisible={pending} />
				<Card>
					<CardHeader>Редактирование профиля</CardHeader>
					<CardBody>
						<Form>
							<img className="form-img" src={'assets/img/avatars/user.jpg'} alt=""/>
							<FormGroup>
								<Label for="userLastName">Фамилия</Label>
								<Input     
									type="text"
									name="userLastName"
									id="userLastName"
									placeholder="Фамилия"
									value={user.firstname}
								/>
							</FormGroup>
							<FormGroup>
								<Label for="userFirstName">Имя</Label>
								<Input
									type="text"
									name="userFirstName"
									id="userFirstName"
									placeholder="Имя"
									value={user.lastname}
								/>
							</FormGroup>
							<FormGroup>
								<Label for="userMiddleName">Отчество</Label>
								<Input
									type="text"
									name="userMiddleName"
									id="userMiddleName"
									placeholder="Отчество"
									value={user.middlename}
								/>
							</FormGroup>
							<FormGroup>
								<Label for="userEmail">E-mail</Label>
								<Input
									type="text"
									name="userEmail"
									id="userEmail"
									placeholder="E-mail"
									value={user.email}
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

export default connect(
	state => ({
		userId: state.auth.userId,
		user: state.user.data,
		pending: state.user.pending,
	}),
	dispatch => ({
		fetchUserAction: bindActionCreators(fetchUser, dispatch)
	})
)(UserProfile);
