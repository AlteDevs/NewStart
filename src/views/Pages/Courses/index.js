import React, { Component, Fragment } from 'react';
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
class Courses extends Component {
	render() {
		return (
			<div className="animated fadeIn">
				<h1 className="d-flex align-items-center">
					Курсы
					<NavLink to="/courses/create">
						<Button color="success" className="add-course-button">
							Создать курс
						</Button>
					</NavLink>
				</h1>
				<Row className="courses-body">
					<Col xs="4">
						<Card>
							<CardImg
								top
								width="100%"
								src="assets/img/courses/js.png"
								alt="Card image cap"
								className="course-image"
							/>
							<CardBody>
								<CardTitle>Уроки Javascript</CardTitle>
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
					<Col xs="4">
						<Card>
							<CardImg
								top
								width="100%"
								src="assets/img/courses/js.png"
								alt="Card image cap"
								className="course-image"
							/>
							<CardBody>
								<CardTitle>Уроки Javascript</CardTitle>
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
					<Col xs="4">
						<Card>
							<CardImg
								top
								width="100%"
								src="assets/img/courses/scala.png"
								alt="Scala"
								className="course-image"
							/>
							<CardBody>
								<CardTitle>Уроки Scala</CardTitle>
								<CardSubtitle>10-дневный курс</CardSubtitle>
								<CardText>
									В этом курсе вы научитесь программировать на Scala
								</CardText>
								<Row className="align-items-center justify-content-between">
									<Col xs="6">
										<NavLink to="/courses/1">
											<Button color="primary">Просмотреть</Button>
										</NavLink>
									</Col>
									<Col xs="6">
										<div className="course-status offline">Оффлайн курс</div>
									</Col>
								</Row>
							</CardBody>
						</Card>
					</Col>
					<Col xs="4">
						<Card>
							<CardImg
								top
								width="100%"
								src="assets/img/courses/js.png"
								alt="Card image cap"
								className="course-image"
							/>
							<CardBody>
								<CardTitle>Уроки Javascript</CardTitle>
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
					<Col xs="4">
						<Card>
							<CardImg
								top
								width="100%"
								src="assets/img/courses/scala.png"
								alt="Scala"
								className="course-image"
							/>
							<CardBody>
								<CardTitle>Уроки Scala</CardTitle>
								<CardSubtitle>10-дневный курс</CardSubtitle>
								<CardText>
									В этом курсе вы научитесь программировать на Scala
								</CardText>
								<Row className="align-items-center justify-content-between">
									<Col xs="6">
										<NavLink to="/courses/1">
											<Button color="primary">Просмотреть</Button>
										</NavLink>
									</Col>
									<Col xs="6">
										<div className="course-status offline">Оффлайн курс</div>
									</Col>
								</Row>
							</CardBody>
						</Card>
					</Col>
					<Col xs="4">
						<Card>
							<CardImg
								top
								width="100%"
								src="assets/img/courses/js.png"
								alt="Card image cap"
								className="course-image"
							/>
							<CardBody>
								<CardTitle>Уроки Javascript</CardTitle>
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
					<Col xs="4">
						<Card>
							<CardImg
								top
								width="100%"
								src="assets/img/courses/scala.png"
								alt="Scala"
								className="course-image"
							/>
							<CardBody>
								<CardTitle>Уроки Scala</CardTitle>
								<CardSubtitle>10-дневный курс</CardSubtitle>
								<CardText>
									В этом курсе вы научитесь программировать на Scala
								</CardText>
								<Row className="align-items-center justify-content-between">
									<Col xs="6">
										<NavLink to="/courses/1">
											<Button color="primary">Просмотреть</Button>
										</NavLink>
									</Col>
									<Col xs="6">
										<div className="course-status offline">Оффлайн курс</div>
									</Col>
								</Row>
							</CardBody>
						</Card>
					</Col>
					<Col xs="4">
						<Card>
							<CardImg
								top
								width="100%"
								src="assets/img/courses/js.png"
								alt="Card image cap"
								className="course-image"
							/>
							<CardBody>
								<CardTitle>Уроки Javascript</CardTitle>
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
					<Col xs="4">
						<Card>
							<CardImg
								top
								width="100%"
								src="assets/img/courses/scala.png"
								alt="Scala"
								className="course-image"
							/>
							<CardBody>
								<CardTitle>Уроки Scala</CardTitle>
								<CardSubtitle>10-дневный курс</CardSubtitle>
								<CardText>
									В этом курсе вы научитесь программировать на Scala
								</CardText>
								<Row className="align-items-center justify-content-between">
									<Col xs="6">
										<NavLink to="/courses/1">
											<Button color="primary">Просмотреть</Button>
										</NavLink>
									</Col>
									<Col xs="6">
										<div className="course-status offline">Оффлайн курс</div>
									</Col>
								</Row>
							</CardBody>
						</Card>
					</Col>
					<Col xs="4">
						<Card>
							<CardImg
								top
								width="100%"
								src="assets/img/courses/js.png"
								alt="Card image cap"
								className="course-image"
							/>
							<CardBody>
								<CardTitle>Уроки Javascript</CardTitle>
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
				</Row>
			</div>
		);
	}
}

export default Courses;
