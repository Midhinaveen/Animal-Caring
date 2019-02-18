import React, {Component} from 'react';
class Home extends Component{
    render(){
        return(
            <div>
                <div className="popular-wthree py-5" id="about">
		<div className="container py-xl-5 py-lg-3">
			<h3 className="tittle mb-sm-5 mb-4 text-bl text-center font-weight-bold">Welcome to Doggo Website</h3>
			<div className="row py-xl-4 text-center">
				<div className="col-sm-4 popular-wthree-grid">
					 <img className="img-fluid " src={require('../Assets/ab3.jpg')} alt="" />
					<div className="popular-wthree-text">
						<h5>Beautiful</h5>
					</div>
				</div>
				<div className="col-sm-4 popular-wthree-grid my-sm-0 my-4">
				 <img className="img-fluid " src={require('../Assets/ab2.jpg')} alt="" />
					<div className="popular-wthree-text">
						<h5>Love</h5>
					</div>
				</div>
				<div className="col-sm-4 popular-wthree-grid">
					 <img className="img-fluid " src={require('../Assets/ab1.jpg')} alt="" />
					<div className="popular-wthree-text">
						<h5>Care</h5>
					</div>
				</div>
			</div>
		</div>
	</div>
    <div className="wthree-about-bot-grid">
		<div className="container-fluid p-0">
			<div className="row">
				<div className="col-md-6 p-0">
                    	 <img className="img-fluid img-wid" src={require('../Assets/pexels-photo-573256.jpeg')} alt="" />
				</div>
				<div className="col-md-6 inner-sub bg-li">
					<div className="px-xl-5 px-sm-4">
						<h3>We really care about our dogs since their birth.</h3>
						<a href="#" className="link-w3l1  button-style mt-md-5 mt-4">Read More</a>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-md-6 inner-sub bg-li text-md-right mb-md-0 mb-5">
					<div className="px-xl-5 px-sm-4">
						<h3>We guarantee you and your dog's happiness.</h3>
						<a href="#" className="link-w3l1  button-style mt-md-5 mt-4">Read More</a>
					</div>
				</div>
				<div className="col-md-6 p-0">
                    <img className="img-fluid img-wid" src={require('../Assets/pets-kids-dogs-animal-161462.jpeg')} alt="" />
				</div>
			</div>
		</div>
	</div>
    <div className="serives-agile py-5" id="services">
		<div className="container py-xl-5 py-lg-3">
			<h3 className="tittle mb-sm-5 mb-4 text-bl text-center font-weight-bold">Our Services</h3>
			<div className="row welcome-bottom text-center pt-xl-4">
				<div className="col-md-4 welcome-grid">
					<i className="fa fa-paw"></i>
					<h4>Dog Walks</h4>
					<p className="para-sty">Ut enim ad minima veniam, quis nostrum ullam corporis suscipit laboriosam.</p>
				</div>
				<div className="col-md-4 welcome-grid my-md-0 my-sm-5 my-4">
					<i className="fa fa-heart"></i>
					<h4>Puppy Care</h4>
					<p className="para-sty">Ut enim ad minima veniam, quis nostrum ullam corporis suscipit laboriosam.</p>
				</div>
				<div className="col-md-4 welcome-grid">
					<i className="fa fa-thumbs-up"></i>
					<h4>Training</h4>
					<p className="para-sty">Ut enim ad minima veniam, quis nostrum ullam corporis suscipit laboriosam.</p>
				</div>
			</div>
		</div>
	</div>
    <div className="team py-5 text-center" id="trainers">
		<div className="container pb-xl-5 pb-lg-3">
			<h3 className="tittle mb-sm-5 mb-4 text-bl text-center font-weight-bold">Our Trainers</h3>
			<div className="row team-bottom pt-xl-4">
				<div className="col-lg-3 col-sm-6 team-grid">
				 <img className="img-fluid img-wid" src={require('../Assets/fhfjg.jpg')} alt="" />
					<div className="caption">
						<div className="team-text">
							<h4>Mack Joe</h4>
						</div>
						<ul>
							<li>
								<a href="#">
									<i className="fa fa-facebook f1" aria-hidden="true"></i>
								</a>
							</li>
							<li>
								<a href="#">
									<i className="fa fa-twitter f2" aria-hidden="true"></i>
								</a>
							</li>
							<li>
								<a href="#">
									<i className="fa fa-google-plus f3" aria-hidden="true"></i>
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="col-lg-3 col-sm-6 team-grid mt-sm-0 mt-5">
				 <img className="img-fluid img-wid" src={require('../Assets/fsfwe4.jpg')} alt="" />
					<div className="caption">
						<div className="team-text">
							<h4>Cruz Deo</h4>
						</div>
						<ul>
							<li>
								<a href="#">
									<i className="fa fa-facebook f1" aria-hidden="true"></i>
								</a>
							</li>
							<li>
								<a href="#">
									<i className="fa fa-twitter f2" aria-hidden="true"></i>
								</a>
							</li>
							<li>
								<a href="#">
									<i className="fa fa-google-plus f3" aria-hidden="true"></i>
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="col-lg-3 col-sm-6 team-grid mt-lg-0 mt-5">
				 <img className="img-fluid img-wid" src={require('../Assets/Rochy Jae.jpg')} alt="" />
					<div className="caption">
						<div className="team-text">
							<h4>Rochy Jae</h4>
						</div>
						<ul>
							<li>
								<a href="#">
									<i className="fa fa-facebook f1" aria-hidden="true"></i>
								</a>
							</li>
							<li>
								<a href="#">
									<i className="fa fa-twitter f2" aria-hidden="true"></i>
								</a>
							</li>
							<li>
								<a href="#">
									<i className="fa fa-google-plus f3" aria-hidden="true"></i>
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="col-lg-3 col-sm-6 team-grid  mt-lg-0 mt-5">
					 <img className="img-fluid img-wid" src={require('../Assets/sfreg.jpg')} alt="" />
					<div className="caption">
						<div className="team-text">
							<h4>Rojo Poy</h4>
						</div>
						<ul>
							<li>
								<a href="#">
									<i className="fa fa-facebook f1" aria-hidden="true"></i>
								</a>
							</li>
							<li>
								<a href="#">
									<i className="fa fa-twitter f2" aria-hidden="true"></i>
								</a>
							</li>
							<li>
								<a href="#">
									<i className="fa fa-google-plus f3" aria-hidden="true"></i>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="row team-bottom mt-5 pt-lg-4">
				<div className="col-lg-3 col-sm-6 team-grid">
				 <img className="img-fluid img-wid" src={require('../Assets/Cruz Doe.jpg')} alt="" />
					<div className="caption">
						<div className="team-text">
							<h4>Cruz Deo</h4>
						</div>
						<ul>
							<li>
								<a href="#">
									<i className="fa fa-facebook f1" aria-hidden="true"></i>
								</a>
							</li>
							<li>
								<a href="#">
									<i className="fa fa-twitter f2" aria-hidden="true"></i>
								</a>
							</li>
							<li>
								<a href="#">
									<i className="fa fa-google-plus f3" aria-hidden="true"></i>
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="col-lg-3 col-sm-6 team-grid mt-sm-0 mt-5">
				 <img className="img-fluid img-wid" src={require('../Assets/Mack joe.jpg')} alt="" />
					<div className="caption">
						<div className="team-text">
							<h4>Mack Joe</h4>
						</div>
						<ul>
							<li>
								<a href="#">
									<i className="fa fa-facebook f1" aria-hidden="true"></i>
								</a>
							</li>
							<li>
								<a href="#">
									<i className="fa fa-twitter f2" aria-hidden="true"></i>
								</a>
							</li>
							<li>
								<a href="#">
									<i className="fa fa-google-plus f3" aria-hidden="true"></i>
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="col-lg-3 col-sm-6 team-grid mt-lg-0 mt-5">
				 <img className="img-fluid img-wid" src={require('../Assets/Rojo Poy.jpg')} alt="" />
					<div className="caption">
						<div className="team-text">
							<h4>Rojo Poy</h4>
						</div>
						<ul>
							<li>
								<a href="#">
									<i className="fa fa-facebook f1" aria-hidden="true"></i>
								</a>
							</li>
							<li>
								<a href="#">
									<i className="fa fa-twitter f2" aria-hidden="true"></i>
								</a>
							</li>
							<li>
								<a href="#">
									<i className="fa fa-google-plus f3" aria-hidden="true"></i>
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="col-lg-3 col-sm-6 team-grid  mt-lg-0 mt-5">
					 <img className="img-fluid img-wid" src={require('../Assets/Rochy Jae.jpg')} alt="" />
					<div className="caption">
						<div className="team-text">
							<h4>Rochy Jae</h4>
						</div>
						<ul>
							<li>
								<a href="#">
									<i className="fa fa-facebook f1" aria-hidden="true"></i>
								</a>
							</li>
							<li>
								<a href="#">
									<i className="fa fa-twitter f2" aria-hidden="true"></i>
								</a>
							</li>
							<li>
								<a href="#">
									<i className="fa fa-google-plus f3" aria-hidden="true"></i>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
                </div>
        )
    }
}
export default  Home;