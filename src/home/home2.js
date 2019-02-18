import React, { Component } from 'react';
class Home2 extends Component {
    render() {
        return (
            <div>
                <div className="stats py-5">
                    					 

                    <div className="container-fluid py-xl-5 py-lg-3">
                     
                       
                        <div className="row stats-agile text-center py-4">
                           
                            <div className="col-lg-2 col-md-3 stats-grid">
                                <i className="fa fa-smile-o" aria-hidden="true"></i>
                                <h4 className="numscroller">85</h4>
                                <p>Happy Customers</p><p>
                                </p></div>
                            <div className="col-lg-2 col-md-3 stats-grid my-md-0 my-4">
                                <i className="fa fa-trophy" aria-hidden="true"></i>
                                <h4 className="numscroller">95</h4>
                                <p>Awards Won</p>
                            </div>
                            <div className="col-lg-2 col-md-3 stats-grid">
                                <i className="fa fa-bullhorn" aria-hidden="true"></i>
                                <h4 className="numscroller">80</h4>
                                <p>Popularity</p>
                            </div>
                            <div className="col-lg-6 col-md-3 stats-grid"></div>
                        </div>
                        </div>
                    </div>
                    <div className="news py-5" id="news">
		<div className="container py-xl-5 py-lg-3">
			<h3 className="tittle mb-sm-5 mb-4 text-bl text-center font-weight-bold">Latest News</h3>
			<div className="row news-grids pt-xl-4">
				<div className="col-lg-5 text-lg-left text-center">
				<img className="img-fluid " src={require('../Assets/blog1.jpg')} alt="" />
				</div>
				<div className="col-lg-7 news-wthreegrid mt-lg-0 mt-5">
					<div className="news-grid-left">
						<h6>March 7th 2018</h6>
						<a href="#" className="text-news-st">Adipiscing elit sed do eiusmod tempor</a>
						<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Sed ut
							perspiciatis
							unde doloremque laudantium.</p>
						<a href="#" className="news-button btn">Read More</a>
					</div>
					<div className="news-grid-left mt-xl-5 mt-lg-4 mt-5">
						<h6>March 12th 2018</h6>
						<a href="#" className="text-news-st">Minima veniam, quis nostrum ullam</a>
						<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Sed ut
							perspiciatis
							unde doloremque laudantium.</p>
						<div className="news-button">
							<a href="#" className="news-button btn">Read More</a>
						</div>
					</div>
				</div>
			</div>
		</div>
        <div className="gallery py-5" id="gallery">
		<div className="container pb-xl-5 pb-lg-3">
			<h3 className="tittle mb-sm-5 mb-4 text-bl text-center font-weight-bold">Dog Breeds</h3>
			<div className="news-grids pb-lg-5 text-center p-0 ">
				<div className="row">
					<div className="col-md-4 gal-img">
					<img className="img-fluid ab3img " src={require('../Assets/ab3.jpg')} alt="" />
					</div>
					<div className="col-md-4 gal-img my-md-0 my-4">
					<img className="img-fluid " src={require('../Assets/g2.jpg')} alt="" />
					</div>
					<div className="col-md-4 gal-img">
							<img className="img-fluid " src={require('../Assets/g3.jpg')} alt="" />
					</div>
				</div>
				<div className="row my-4 p-0">
					<div className="col-md-4 gal-img">
							<img className="img-fluid " src={require('../Assets/g4.jpg')} alt="" />
					</div>
					<div className="col-md-4 gal-img my-md-0 my-4">
						<img className="img-fluid " src={require('../Assets/g5.jpg')} alt="" />
					</div>	<img className="img-fluid  g6img" src={require('../Assets/g6.jpg')} alt="" />
					</div>
				</div>
				<div className="row my-md-0 my-4 ">
					<div className="col-md-4 gal-img">
						<img className="img-fluid " src={require('../Assets/g7.jpg')} alt="" />
					</div>
					<div className="col-md-4 gal-img my-md-0 my-4">
						<img className="img-fluid " src={require('../Assets/g8.jpg')} alt="" />
					</div>
					<div className="col-md-4 gal-img">
						<img className="img-fluid " src={require('../Assets/g9.jpg')} alt="" />
					</div>
				</div>
			</div>
		</div>
	</div>
 </div>
        )
    }
}
export default Home2;