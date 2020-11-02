import React from 'react';
import PropTypes from 'prop-types';

import HomePageLayoutStyle from './homePageLayout.module.scss';
import Cooperators from './cooperators/cooperators';
import NewsCenter from './newsCenter/newsCenter';
import Navbar from '../Navbar/navbar';
import Footer from '../Footer/footer';
import TopSection from './topSection/topSection';
import AboutUS from './aboutus/aboutus';
import Platform from './platform/platform';

class HomePageLayout extends React.Component {
	render() {
		return (
			<>
				<Navbar/>
				<TopSection/>
				<div className={HomePageLayoutStyle.yongheOnlineHomePage}>
					{this.props.children}
				</div>
				<AboutUS/>
				<NewsCenter />
				<Platform/>
				<Cooperators/>
				<Footer/>
			</>
		);
	}
}

HomePageLayout.propTypes = {
	children: PropTypes.node,
};

export default HomePageLayout;
