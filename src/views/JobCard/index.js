import React from 'react';
import { Badge } from 'reactstrap';

const JobCard = ({
	title,
	imgPath,
	publicDate,
	competence,
	skills,
	description,
	priceFrom,
	priceTo,
	onClick
}) => (
	<div className="job-card" onClick={ onClick }>
		<img className="job-card__img" src={ imgPath } alt="" />
		<div className="job-card__body">
			<div className="job-card__header">
				<h1 className="job-card__body__title card-title text-primary">
					{title}
				</h1>
				<span className="job-card__body__date text-info">{publicDate}</span>
			</div>
			<span className="job-card__body__skill">{competence}</span>
			<div className="job-card__body__tags">
				<span className="job-card__body__label">Требуемые навыки:</span>
				<ul className="tags-list">
					{skills.map(item => (
						<li className="tags-list__item">
							<Badge color="dark" pill>
								{item.name}
							</Badge>
						</li>
					))}
				</ul>
			</div>
			<div className="job-card__body__descr">
				<span className="job-card__body__label">Описание:</span>
				<p>{description}</p>
			</div>
			<div className="job-card__body__price">
				<span className="price-meta text-info">от</span>
				<span className="price-el">{priceFrom}</span>
				<span className="price-meta text-info">до</span>
				<span className="price-el">{priceTo}</span>
			</div>
		</div>
	</div>
);

export default JobCard;
