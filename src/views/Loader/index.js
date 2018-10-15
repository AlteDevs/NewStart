import React, {Fragment} from 'react';

const Loader = (props) => {
	const {
		isVisible,
	} = props;
	return (
		<Fragment>
			{
				isVisible && <div styleName="loader">
					<svg className="circular" viewBox="25 25 50 50">
						<circle styleName="path" cx="50" cy="50" r="20" fill="none" strokeWidth="2" strokeMiterlimit="10"/>
					</svg>
				</div>
			}
		</Fragment>
	);
}

Loader.defaultProps = {
	isVisible: true,
	styleName: '',
};

export default Loader;
