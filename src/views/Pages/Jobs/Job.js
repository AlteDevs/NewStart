import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

import jobsData from './JobsData';

class Job extends Component {
	constructor(props) {
		super(props);
		this.id = this.props.match.params.id;
	}

	render() {
		const job = jobsData.find(
			user => user.id.toString() === this.id
		);

		return (
			<div className="animated fadeIn">
				<Row>
					<Col lg={6}>
						<Card>
							<CardHeader>
								<strong>
									<i className="icon-info pr-1" />
									Job id: {this.id}
								</strong>
							</CardHeader>
						</Card>
					</Col>
				</Row>
			</div>
		);
	}
}

export default Job;
