import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import JobCard from '../../JobCard';

import jobsData from './JobsData';

class Jobs extends Component {
	render() {
		const userList = jobsData.filter(user => user.id < 10);

		return (
			<div className="animated fadeIn">
				<Row>
					<Col xl={12}>
						<h1>Вакансии</h1>
						{jobsData.map(item => (
							<JobCard
								key={item.id}
								imgPath={ item.imgPath }
								title={item.title}
								publicDate={item.publicDate}
								competence={item.competence}
								skills={item.skills}
								description={item.description}
								priceFrom={item.priceFrom}
								priceTo={item.priceTo}
							/>
						))}
					</Col>
				</Row>
			</div>
		);
	}
}

export default Jobs;
