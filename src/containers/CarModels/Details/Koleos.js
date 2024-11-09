import React from 'react';
import Slide from '../../../components/UI/FullPageSlider/Slide/Slide';
import FullPageSlider from '../../../components/UI/FullPageSlider/FullPageSlider';

class Koleos extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            slides: [
                {
                    anchor: 'Overview',
                    tooltip: 'Overview',
                    image: 'koleos/koleos_1.png',
                    header: ' Camry',
                    description: 'Elevate your luxury',
                    details: {
                        element: () => {
                            return <div className="hero_slide_single_dtls_bottom width_reset_57">
                            <div className="hero_slide_single_dtls_bottom_flex">
                                <div className="dtls_list">
                                    <p>
                                        Engine type
                                    </p>
                                    <h2>
                                        2.5L
                                    </h2>
                                </div>

                                <div className="dtls_list">
                                    <p>
                                        Transmission
                                    </p>
                                    <h2>
                                        X-Tronic <small>CVT</small>
                                    </h2>
                                    <br/>
                                </div>

                                <div className="dtls_list">
                                    <p>
                                        Boot space
                                    </p>
                                    <h2>
                                        1,690<small>L</small>
                                    </h2>
                                </div>
                            </div>

                            <div className="text-center center_btn">
                                <a href="javascript:;" className="button btn_white_border btn_rounded btn_more learn_more_btn" data-target="">
                                    More
                                </a>
                            </div>
                        </div>;

                        }
                    }        
                },
                {
                    anchor: 'Exterior',
                    tooltip: 'Exterior',
                    image: 'koleos/koleos_2.png',
                    header: 'Koleos',
                    description: ' Elevate your luxury',
                    details: {
                        element: () => {
                            return <div className="hero_slide_single_dtls_bottom">
                            <div className="hero_slide_single_dtls_bottom_flex_2">
                                <div className="dtls_list">
                                    <h2>
                                        Bigger. Bolder. Better.
                                    </h2>

                                    <p>
                                        A bold step forward in automotive design and  technology.
                                        With space that exceeds expectations and levels of comfort
                                        and finish that make every journey a pleasure.
                                    </p>
                                </div>

                                <div className="dtls_list">
                                    <h2>
                                        Powerful design
                                    </h2>

                                    <p>
                                        An athletic profile, robust front end, taut lines underscored
                                        with chrome, Pure Vision Full LED headlights with C-shape
                                        signature DRLs, it is sure to comand attention.
                                    </p>
                                </div>
                            </div>

                            <div className="text-center center_btn">
                                <a href="javascript:;" className="button btn_white_border btn_rounded btn_more learn_more_btn" data-target="#Exterior_more">
                                    More
                                </a>
                            </div>
                        </div>;

                        }

                    }
                },
                {
                    anchor: 'Interior',
                    tooltip: 'Interior',
                    image: 'koleos/koleos_3.png',
                    header: 'Koleos',
                    description: 'Elevate your luxury',
                    details: {
                      element:()=>{
                          return <div className="hero_slide_single_dtls_bottom">
                          <div className="hero_slide_single_dtls_bottom_flex_2">
                              <div className="dtls_list">
                                  <h2>
                                      Travel first-class
                                  </h2>

                                  <p>
                                     From offering a generous amount of legroom to a front compartment just for keeping your drinks cold, welcome to comfort that goes the extra mile.
                                  </p>
                              </div>

                              <div className="dtls_list">
                                  <h2>
                                      Total comfort
                                  </h2>

                                  <p>
                                      Meticulously designed for comfort with luxurious leather seats, deal rear air-cond vents, USB charging ports and more.
                                  </p>
                              </div>
                          </div>

                          <div className="text-center center_btn">
                              <a href="javascript:;" class="button btn_white_border btn_rounded btn_more learn_more_btn" data-target="#Interior_more">
                                  More
                              </a>
                          </div>
                      </div>;

                      }

                    }
                },

                {
                    anchor: 'Technology',
                    tooltip: 'Technology',
                    image: 'koleos/koleos_4.png',
                    header: 'Koleos',
                    description: 'Elevate your luxury',
                    details:{
                        element: ()=> {
                          return <div className="hero_slide_single_dtls_bottom">
                          <div className="hero_slide_single_dtls_bottom_flex_2">
                              <div className="dtls_list">
                                  <h2>
                                      Power
                                  </h2>

                                  <p>
                                     The Koleos is equipped with a 2.5L engine that offers rapid acceleration, responsiveness and fluidity. 
                                  </p>
                              </div>

                              <div className="dtls_list">
                                  <h2>
                                      Responsiveness
                                  </h2>

                                  <p>
                                      The X-Tronic CVT automatic transmission offers fluid, responsive driving and can also simulate gear shifts, producing even more powerful acceleration.
                                  </p>
                              </div>
                          </div>

                          <div className="text-center center_btn">
                              <a href="javascript:;" className="button btn_white_border btn_rounded btn_more learn_more_btn" data-target="#Technology_more">
                                  More
                              </a>
                          </div>
                      </div>;

                        }

                    }
                },

                {
                    anchor: 'Safety',
                    tooltip: 'Safety',
                    image: 'koleos/koleos_5.png',
                    header: 'Koleos',
                    description: 'Elevate your luxury',
                     details:{
                        element: ()=>{
                            return  <div className="hero_slide_single_dtls_bottom">
                            <div className="hero_slide_single_dtls_bottom_flex_2">
                                <div className="dtls_list">
                                    <h2>
                                        <span className="star_rat">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </span>
                                        Safety Rating
                                    </h2>

                                    <p>
                                        Koleos scored five stars in the  passive safety crash tests carried out by the independent body Euro NCAP.
                                    </p>
                                </div>

                                <div className="dtls_list ">
                                    <h2>
                                        6 Airbags
                                    </h2>
                                    <p>
                                        The Koleos protects occupants with multi-stage, variable force deployment airbags.
                                    </p>
                                </div>
                            </div>

                            <div className="text-center center_btn">
                                <a href="javascript:;" class="button btn_white_border btn_rounded btn_more learn_more_btn" data-target="#Safety_more">
                                    More
                                </a>
                            </div>
                        </div>;

                        }

                     }

                },    

                {
                    anchor: 'PriceAndSpecifications',
                    tooltip: 'PriceAndSpecifications',
                    image: 'captur/captur_6.jpg',
                    header: 'Captur',
                    description: 'Europe’s best-selling crossover in its segment',
                    details:{
                        element:()=> {

                           return <div className="hero_slide_single_dtls_bottom">
                            <div className="dtls_list price_spec_dtls">
                                <h2 className="text-center">
                                    Price & Specifications
                                </h2>
                            </div>


                            <div className="text-center center_btn">
                                <a href="javascript:;" className="button btn_white_border btn_rounded btn_more learn_more_btn" data-target="#price_spec">
                                    More
                                </a>
                            </div>
                        </div>;
                        }
                    }
                },

                {
                    anchor: 'Review',
                    tooltip: 'Review',
                    image: 'hero_2.jpg',
                    header: 'Test drive on your terms',
                    description: ' Enjoy 3-hour pressure test drive'
                },

                
            ]
        }
    }

    render() {

        const slidesEl =  this.state.slides.map((slide, index) => {
            return <Slide 
                key={index} 
                anchor={slide.anchor}
                image={slide.image}
                header={slide.header}
                description={slide.description} 
                details={slide.details}
            />;
        });
        const anchors = this.state.slides.map(slide => slide.anchor);
        const tooltips = this.state.slides.map(slide => slide.tooltip);

        return <div className="hero">
            <div className="wrapper">
                <FullPageSlider anchors={anchors} tooltips={tooltips}>
                    { slidesEl }
                </FullPageSlider>
            </div>
        </div>;
    }
}

export default Koleos;