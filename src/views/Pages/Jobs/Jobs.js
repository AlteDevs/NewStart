import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import JobCard from '../../JobCard';

import jobsData from './JobsData';

class Jobs extends Component {
	render() {
		const { history } = this.props

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
								onClick={ () => history.push(`jobs/${ item.id }`) }
							/>
						))}
					</Col>
				</Row>
			</div>
		);
	}
}

export default withRouter(Jobs);
