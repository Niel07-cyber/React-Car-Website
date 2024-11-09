import React from 'react';
import Slide from '../../../components/UI/FullPageSlider/Slide/Slide';
import FullPageSlider from '../../../components/UI/FullPageSlider/FullPageSlider';

class Megane extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            slides: [
                {
                    anchor: 'Overview',
                    tooltip: 'Overview',
                    image: 'megane/megane_1.png',
                    header: ' Toyota V8',
                    description: 'Conquer Every Corner',
                    details: {
                      element:() => {
                      return <div className="hero_slide_single_dtls_bottom width_reset_53">
                      <div className="hero_slide_single_dtls_bottom_flex">
                          <div className="dtls_list">
                              <p>
                                  Max Torque
                              </p>
                              <h2>
                                  490 Nm
                              </h2>
                          </div>

                          <div className="dtls_list">
                              <p>
                                  Acceleration
                              </p>
                              <h2>
                                  9.8 sec
                              </h2>
                              <p>
                                  (0 – 100km/h)
                              </p>
                              <br/>
                          </div>

                          <div className="dtls_list">
                              <p>
                                  4CONTROL
                              </p>
                              <h2>
                                  4
                              </h2>
                            
                              <p>
                                  wheel steer  
                              </p>
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
                    image:  'megane/megane_2.png',
                    header: 'Megane R.S.',
                    description: 'Conquer Every Corner',
                    details:{
                        element: ()=> {
                            return <div className="hero_slide_single_dtls_bottom width_reset_74">
                            <div className="hero_slide_single_dtls_bottom_flex_2">
                                <div className="dtls_list">
                                    <h2>
                                        Wider front with F1 style blade
                                    </h2>

                                    <p>
                                        The new wider bumper includes an F1 style blade to channel the airflow, feed the exchangers and cool the engine. Its beehive grille and specific R.S. Vision lighting draws attention.
                                    </p>
                                </div>

                                <div className="dtls_list">
                                    <h2>
                                        Pure Vision full LED headlights
                                    </h2>

                                    <p>
                                        The MEGANE R.S.' headlights provide consistent visibility for both day and night. The C-shaped Daytime Running Lights (DRL) that is constantly illuminated is integrated with the C-shaped turn signal.
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
                    image: 'megane/megane_3.png',
                    header: 'Megane R.S.' ,
                    description: 'Conquer Every Corner',
                    details:{
                        element: ()=> {
                            return <div className="hero_slide_single_dtls_bottom">
                            <div className="hero_slide_single_dtls_bottom_flex_2">
                                <div className="dtls_list">
                                    <h2>
                                        A sporty cockpit
                                    </h2>

                                    <p>
                                       The New MEGANE R.S. introduces a drive focused sport cockpit with sport seats designed for support, a leather steering wheel and personable dashboard.
                                    </p>
                                </div>

                                <div className="dtls_list">
                                    <h2>
                                        Fiery red detailing 
                                    </h2>

                                    <p>
                                        Carbon grey interior with red touches throughout the interior will get your heart racing behind the wheel.
                                    </p>
                                </div>
                            </div>

                            <div className="text-center center_btn">
                                <a href="javascript:;" className="button btn_white_border btn_rounded btn_more learn_more_btn" data-target="#Interior_more">
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
                    image: 'megane/megane_4.png',
                    header: 'Technology',
                    description: 'Conquer Every Corner',
                    details:{
                        element: () => {
                            return <div className="hero_slide_single_dtls_bottom width_reset_74">
                            <div className="hero_slide_single_dtls_bottom_flex_2">
                                <div className="dtls_list">
                                    <h2>
                                        4CONTROL 4-wheel drive system
                                    </h2>

                                    <p>
                                       It offers better agility on tight bends and exceptional stability in high-speed curves. At low speeds, the system turns the rear wheels in the opposite direction to the front wheels.
                                    </p>
                                </div>

                                <div className="dtls_list">
                                    <h2>
                                        Hydraulic compression stops
                                    </h2>

                                    <p>
                                        The integration of 4 hydraulic compression stops, the shock absorbers absorb impact better. This technology delivers spectacular results in terms of progressive control, comfort and performance at any road conditions.
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
                    image: 'megane/megane_5.png',
                    header: 'Safety',
                    description: 'Conquer Every Corner',
                    details:{
                        element: ()=> {
                            return <div className="hero_slide_single_dtls_bottom width_reset_68">
                            <div className="hero_slide_single_dtls_bottom_flex_2">
                                <div className="dtls_list">
                                    <h2>
                                        Brembo<sup>®</sup> brakes and bi-material brake disc
                                    </h2>

                                    <p>
                                        The New Megane R.S. is equipped with Brembo® brake callipers with the new 355mm bi-material discs in cast iron and aluminium. The bi-material discs decreases 1.8kg weight per wheel and improve cooling.
                                    </p>
                                </div>

                                <div className="dtls_list ">
                                    <h2>
                                        Anti-Lock Braking System (ABS)
                                    </h2>
                                    <p>
                                        Keep control of the trajectory when braking sharply with ABS and  Electronic Brakeforce Distribution System (EBD).
                                    </p>
                                </div>
                            </div>

                            <div className="text-center center_btn">
                                <a href="javascript:;" className="button btn_white_border btn_rounded btn_more learn_more_btn" data-target="#Safety_more">
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
                    image: 'megane/megane_3.png',
                    header: 'Megane R.S.',
                    description: 'Conquer Every Corner',
                    details:{
                        element:()=> {
                            return  <div className="hero_slide_single_dtls_bottom">
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
                    image: 'megane/megane_4.png',
                    header: 'Test drive on your terms',
                    description: ' Enjoy 3-hour pressure test drive',
                    details: {
                        element: () => {
                            return <a href="" className="button btn_white_border btn_rounded">
                                Discover more
                            </a>
                        }
                    }
                }
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

export default Megane;