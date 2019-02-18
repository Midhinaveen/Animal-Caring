

import React, { Component } from 'react';
class Home0 extends Component {
    render() {
        return (
            <div>
                <div id="demo" class="carousel slide" data-ride="carousel">
                    <ul class="carousel-indicators">
                        <li data-target="#demo" data-slide-to="0" class="active"></li>
                        <li data-target="#demo" data-slide-to="1"></li>
                        <li data-target="#demo" data-slide-to="2"></li>
                    </ul>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div className="text-center">
                                <img className="img-fluid " src={require('../Assets/dog3.jpeg')} alt="" />
                                <div className="carousel-caption">
                                    <h3 className="heading-sty">WE CARE FOR YOUR DOG</h3>
                                    <p className="para-sty">We always try to protect your dog the best services</p>
                                    <button className="btn btn-lg  btn-primary button-style  ">Read More</button>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div className="text-center">
                                <img className="img-fluid " src={require('../Assets/dog3.jpeg')} alt="" />
                                <div className="carousel-caption w3ls_banner_txt ">
                                    <h3 className="heading-sty ">WE STYLE YOUR BEST DOG</h3>
                                    <p className="para-sty">We always try to protect your dog the best services</p>
                                    <button className="btn btn-lg  btn-primary button-style  ">Read More</button>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div className="text-center">
                                    <img className="img-fluid " src={require('../Assets/dog4.jpeg')} alt="" />
                                    <div className="carousel-caption w3ls_banner_txt ">
                                        <h3 className="heading-sty ">EXCELLENT DOG TRAINING</h3>
                                        <p className="para-sty">We always try to protect your dog the best services</p>
                                        <button className="btn btn-lg  btn-primary button-style  ">Read More</button>

                                    </div>
                                </div>
                            </div>
                            <a class="carousel-control-prev" href="#demo" data-slide="prev">
                                <span class="carousel-control-prev-icon"></span>
                            </a>
                            <a class="carousel-control-next" href="#demo" data-slide="next">
                                <span class="carousel-control-next-icon"></span>
                            </a>
                        </div>
                    
                </div>
            </div>
        )
    }
}
export default Home0;