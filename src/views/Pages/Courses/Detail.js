import React, { Component } from 'react';
import { Jumbotron, Button } from 'reactstrap';
class Detail extends Component {
	render() {
		return (
			<div className="animated fadeIn">
				<Jumbotron
					style={{
						backgroundColor: 'transparent'
					}}
				>
					<h1 className="display-3">Уроки Javascript</h1>
					<p>
						<img
							src="https://www.jsexpert.net/wp-content/uploads/2018/08/choose-course.jpg"
							alt=""
							style={{ maxWidth: '100%' }}
						/>
					</p>
					<p>
						<ul>
							<li>aaa</li>
							<li>aaa</li>
							<li>aaa</li>
						</ul>
					</p>
					<p className="lead">
						Научитесь правильно верстать под разные устройства, используя
						медиа-выражения. Узнаете о тонкостях вёрстки под iOS и другие
						мобильные операционные системы. Изучите подходы к решению задач и
						варианты практического использования
					</p>
					<hr className="my-2" />
					<p>
						It uses utility classes for typography and spacing to space content
						out within the larger container.
					</p>
					<p className="lead">
						<Button color="primary">Learn More</Button>
					</p>
				</Jumbotron>
			</div>
		);
	}
}

export default Detail;
