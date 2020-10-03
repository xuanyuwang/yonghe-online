import React from 'react';
import AboutUSMiddle from '../about-us-middle/about-us-middle';
import OurTeam from '../about-us-ourteam/ourTeam';
import AboutUSTop from '../about-us-top/about-us-top';
import './about-us-page-layout.scss';
class AboutUSPageLayout extends React.Component {
	render() {
		return (
			<div>
				<AboutUSTop></AboutUSTop>
				<AboutUSMiddle></AboutUSMiddle>
				<OurTeam />
			</div>
		);
	}
}

export default AboutUSPageLayout;
