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
							src="https://i.ytimg.com/vi/ch7eVYUvb_w/maxresdefault.jpg"
							alt=""
							style={{ maxWidth: '100%' }}
						/>
					</p>
					<p className="lead">
						Эта часть позволит вам изучить JavaScript с нуля или упорядочить и
						дополнить существующие знания. <br />
						Мы будем использовать браузер в качестве окружения, но основное
						внимание будет уделяться именно самому языку JavaScript.
					</p>
					<hr className="my-2" />
					<p className="lead">
						<a href="https://learn.javascript.ru/first-steps" target="_blank">
							<Button color="primary">Перейти на курс</Button>
						</a>
					</p>
				</Jumbotron>
			</div>
		);
	}
}

export default Detail;
