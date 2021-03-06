import React from 'react';
import HomePageTitle from '../HomePageTitle/homePageTitle';
import {Card,Row,Col,Image,Carousel} from 'react-bootstrap';
import './platform.scss';
import { graphql, useStaticQuery } from 'gatsby';
import MoreButton from '../MoreButton/MoreButton';
const query = graphql`
{
	prismicPlatform {
	  data {
		backgroundimage {
			localFile {
				childImageSharp {
				  fluid(quality: 100) {
					src
				  }
				}
			}
		}
		images {
		  id
		  image {
			localFile {
				childImageSharp {
				  fluid(quality: 100) {
					src
				  }
				}
			}
		  }
		}
		platformdescription {
		  text
		}
		platformname {
		  text
		}
		title {
		  text
		}
	  }
	}
  }
`;
const Platform = () => {
	const data = useStaticQuery(query);
	const {
		prismicPlatform: { data: platform },
	} = data;
	return (
		<div className="platformSection" >
			<HomePageTitle sectionTitle="旗下平台" sectionSubTitle="Platform" link="/platform" display="none"/>
			<Card className="mb-3" style={{borderRadius:'0px', paddingLeft: '10%', paddingRight:'6%',border:'none',backgroundImage: `url(${platform.backgroundimage.localFile.childImageSharp.fluid.src})`}}>
				<Row className="no-gutters" style={{paddingTop:'6vw',paddingBottom:'4vw'}}>
					<Col sm={12} md={6} lg={6}  style={{marginTop:'auto',marginBottom:'auto'}}>
						<Carousel indicators={false}  nextIcon={<span aria-hidden="true" className="nextIconStyle"/>} prevIcon={<span aria-hidden="true" className="prevIconStyle"/>}>
							{platform.images.map((image)=>{
								return(<Carousel.Item key={image.id}>
									<Image src={image.image.localFile.childImageSharp.fluid.src} style={{width:'100%', paddingTop:'0',paddingBottom:'0'}}/>
								</Carousel.Item>);
							})}
						</Carousel>
					</Col>
					<Col md={1} lg={1}></Col>
					<Col md={5} xs={12} lg={4} sm={12} style={{backgroundColor:'white', paddingLeft:'4%',paddingRight:'3%'}}>
						<p style={{fontSize:'calc(10px + 0.2vw)',color:'rgb(90,90,90)', paddingTop:'2.5vw',paddingBottom:'3px'}}>{platform.title.text}</p>
						<h3 style={{fontSize:'calc(14px + 0.6vw)', fontWeight:'500'}}>{platform.platformname.text}</h3>
						<br className="brPlatformDisplay1"/>
						<p style={{fontSize:'calc(10px + 0.2vw)', color:'rgb(90,90,90)'}}>
							{platform.platformdescription.text}
						</p>
						<br/>
						<br/>
						<br className="brPlatformDisplay2"/>
						<MoreButton path="/platform" className="stickToLeft"/>
					</Col>
				</Row>
			</Card>
		</div>
	);
};

export default Platform;
