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
import classNames from 'classnames';
import { fetchCourses } from 'store/courses';
import { apiUrl } from 'constants/api';
class Courses extends Component {
	async componentDidMount() {
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
								<div
									className="course-image"
									style={{
										backgroundImage: `url(${apiUrl}/get_image?image=${
											item.picture
										})`
									}}
								/>

								<CardBody>
									<CardTitle>{item.title}</CardTitle>
									<CardSubtitle>10-дневный курс</CardSubtitle>
									<CardText>{item.description}</CardText>
									<Row className="align-items-center justify-content-between">
										<Col xs="6">
											<NavLink to={`/courses/${item.id}`}>
												<Button color="primary">Просмотреть</Button>
											</NavLink>
										</Col>
										<Col xs="6">
											<div
												className={classNames({
													'course-status': true,
													online: !!item.status.toLowerCase() === 'онлайн',
													offline: !!item.status.toLowerCase() === 'оффлайн'
												})}
											>
												{item.status}
											</div>
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
	courses: state.courses.items.reverse()
}))(Courses);
