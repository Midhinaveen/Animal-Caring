import React, { Component } from 'react';
class Home3 extends Component {
    render() {
        return (
            <div>
<div className="testimonials py-5" id="testimonials">
		<div className="container py-xl-5 py-lg-3">
			<h3 className="tittle2 mb-sm-5 mb-4 text-bl text-center font-weight-bold">What Clients Say</h3>
			<div className="w3_testimonials_grids pt-xl-4">
				<div className="row item-owl">
					<div className="col-md-3 col-sm-4 img-agile text-center">
					<img className="img-fluid ab3img " src={require('../Assets/onedog.jpeg')} alt="" />
						<h6>Michael Paul</h6>
					</div>
					<div className="col-md-9 col-sm-8 mt-sm-0 mt-4">
						<div className="test-review">
							<p>
								<i className="fa fa-quote-left" aria-hidden="true"></i> Consetetur sadipscing elitr, sed diam nonumy eirmod
								tempor
								invidunt ut labore et dolore magna aliquyam erat,
								sed diam voluptua.
								<i className="fa fa-quote-right" aria-hidden="true"></i>
							</p>
						</div>
					</div>
				</div>
				<div className="row item-owl my-5">
					<div className="col-md-9 col-sm-8 text-sm-right">
						<div className="test-review">
							<p>
								<i className="fa fa-quote-left" aria-hidden="true"></i> Consetetur sadipscing elitr, sed diam nonumy eirmod
								tempor
								invidunt ut labore et dolore magna aliquyam erat,
								sed diam voluptua.
								<i className="fa fa-quote-right" aria-hidden="true"></i>
							</p>
						</div>
					</div>
					<div className="col-md-3 col-sm-4 img-agile text-center mt-sm-0 mt-4">
					<img classNameName="img-fluid ab3img " src={require('../Assets/ab2.jpg')} alt="" />
						<h6>Michael Paul</h6>
					</div>
				</div>
				<div className="row item-owl">
					<div className="col-md-3 col-sm-4 img-agile text-center">
					<img classNameName="img-fluid ab3img " src={require('../Assets/fhfjg.jpg')} alt="" />
						<h6>Michael Paul</h6>
					</div>
					<div className="col-md-9 col-sm-8 mt-sm-0 mt-4">
						<div className="test-review">
							<p>
								<i className="fa fa-quote-left" aria-hidden="true"></i> Consetetur sadipscing elitr, sed diam nonumy eirmod
								tempor
								invidunt ut labore et dolore magna aliquyam erat,
								sed diam voluptua.
								<i className="fa fa-quote-right" aria-hidden="true"></i>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
    <div className="contact py-5" id="mail">
		<div className="container py-xl-5 py-lg-3">
			<h3 className="tittle mb-sm-5 mb-4 text-bl text-center font-weight-bold">Mail Us</h3>
			<form action="#" method="post" className="pt-xl-4">
				<div className="row">
					<div className="col-md-6 contact-left">
						<input type="text" name="Name"  className="inp-hei" placeholder="Your Name" />
						<input type="email"  className="inp-hei" name="Email" placeholder="Email" />
						<input type="text"   name="Mobile Number" placeholder="Mobile Number" />
					</div>
					<div className="col-md-6 contact-right mt-md-0 mt-4">
						<textarea name="Message" placeholder="Message" ></textarea>
						<button type="submit" className="btn btn-lg btn-primary button-submit mt-4">Submit</button>
					</div>
				</div>
			</form>
			<div className="row map-pos mt-5 pt-lg-5">
				<div className="col-lg-4 address-row">
					<div className="row">
						<div className="col-3 address-left text-center">
							<span className="fa fa-map-marker"></span>
						</div>
						<div className="col-9 address-right">
							<h5>Visit Us</h5>
							<p className="para-sty">Bmr St, Canada, New York, USA</p>
						</div>
					</div>
				</div>
				<div className="col-lg-4 address-row w3-agileits my-lg-0 my-4">
					<div className="row">
						<div className="col-3 address-left text-center">
							<span className="fa fa-envelope-o"></span>
						</div>
						<div className="col-9 address-right">
							<h5>Mail Us</h5>
							<p className="para-sty">
								<a href="mailto:info@example.com"> mail@example.com</a>
							</p>
						</div>
					</div>
				</div>
				<div className="col-lg-4 address-row">
					<div className="row">
						<div className="col-3 address-left text-center">
							<span className="fa fa-phone"></span>
						</div>
						<div className="col-9 address-right">
							<h5>Call Us</h5>
							<p className="para-sty">
							+01 222 333 4444</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
    <div className="footer-w3ls py-4">
		<div className="container py-xl-5 py-lg-3">
			<div className="agileits_w3layouts_logo logo2">
				<h2>
					<a href="index.html">Doggo</a>
				</h2>
				<div className="w3social-icons">
					<ul>
						<li>
							<a href="#">
								<i className="fa fa-facebook"></i>
							</a>
						</li>
						<li>
							<a href="#">
								<i className="fa fa-google-plus"></i>
							</a>
						</li>
						<li>
							<a href="#">
								<i className="fa fa-twitter"></i>
							</a>
						</li>
						<li>
							<a href="#">
								<i className="fa fa-dribbble"></i>
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="row agileits_w3layouts_footer_grids">
				<div className="col-lg-4 agileits_w3layouts_footer_grid">
					<h3>Call Us</h3>
					<ul>
						<li>
							<span>Office Phone :</span> (+123) 2302 232</li>
						<li>
							<span>Fax :</span> (+123) 123 456 455</li>
					</ul>
				</div>
				<div className="col-lg-4 agileits_w3layouts_footer_grid my-lg-0 my-5">
					<h3>Visit Us</h3>
					<p className="para-sty">132 New Lenox, 868 1st Avenue
						<i>4th Street NYC.</i>
					</p>
				</div>
				<div className="col-lg-4 agileits_w3layouts_footer_grid">
					<h3>Write Us</h3>
					<ul>
						<li>
							<span>Email :</span>
							<a href="mailto:info@example.com">info@example1.com</a>
						</li>
						<li>
							<span>Enquiry :</span>
							<a href="mailto:info@enquiry.com">info@enquiry.com</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
    <div className="wthree_copy_right">
		<div className="container">
			<p > © 2019 Doggo. All rights reserved | Design by
				<a href="http://w3layouts.com/">W3layouts</a>
			</p>
		</div>
	</div>
    </div>
        )
    }
}
    export default Home3;