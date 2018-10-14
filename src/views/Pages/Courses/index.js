import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
	Card,
	CardImg,
	CardText,
	CardBody,
	CardTitle,
	CardSubtitle,
	Button,
	Col,
	Container,
	Row
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { fetchCourses } from 'store/courses';
import { apiUrl } from 'constants/api';
class Courses extends Component {
	async componentWillMount() {
		let { dispatch } = this.props;
		await dispatch(fetchCourses());
	}

	render() {
		let { courses } = this.props;
		return (
			<div className="animated fadeIn">
				<h1 className="d-flex align-items-center">
					Курсы
					<NavLink to="/courses/create">
						<Button color="success" className="add-course-button">
							Добавить курс
						</Button>
					</NavLink>
				</h1>
				<Row className="courses-body">
					{courses.map((item, index) => (
						<Col xs="4" key={index}>
							<Card>
								<CardImg
									top
									width="100%"
									src={`${apiUrl}/get_image?image=${item.picture}`}
									alt="Card image cap"
									className="course-image"
								/>
								<CardBody>
									<CardTitle>{item.title}</CardTitle>
									<CardSubtitle>10-дневный курс</CardSubtitle>
									<CardText>
										В этом курсе вы научитесь программировать на Java
									</CardText>
									<Row className="align-items-center justify-content-between">
										<Col xs="6">
											<NavLink to="/courses/1">
												<Button color="primary">Просмотреть</Button>
											</NavLink>
										</Col>
										<Col xs="6">
											<div className="course-status online">Онлайн курс</div>
										</Col>
									</Row>
								</CardBody>
							</Card>
						</Col>
					))}
				</Row>
			</div>
		);
	}
}

export default connect(state => ({
	courses: state.courses.items
}))(Courses);
