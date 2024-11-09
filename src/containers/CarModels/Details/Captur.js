import React  from 'react';
import Slide from '../../../components/UI/FullPageSlider/Slide/Slide';
import FullPageSlider from '../../../components/UI/FullPageSlider/FullPageSlider';

class Captur extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            slides: [
                {
                    anchor: 'Overview',
                    tooltip: 'Overview',
                    image: 'captur/captur_1.jpg',
                    header: 'RAV 4',
                    description: 'Europe’s best-selling crossover in its segment',
                    details: {
                        element: () => {
                            return <div className="hero_slide_single_dtls_bottom width_reset_53">
                                <div className="hero_slide_single_dtls_bottom_flex">
                                    <div className="dtls_list">
                                        <p>
                                            Max Torque
                                        </p>
                                        <h2>
                                            210<small>Nm</small>
                                        </h2>
                                    </div>
                                    <div className="dtls_list">
                                        <p>
                                            Fuel efficiency
                                        </p>
                                        <h2>
                                            5.9<small>L/100 km</small>
                                        </h2>
                                        <span className="three_text">
                                            * Based on NEDC test
                                        </span>
                                    </div>
                                    <div className="dtls_list">
                                        <p>
                                            Boot space
                                        </p>
                                        <h2>
                                            455<small>L</small>
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
                    image: 'captur/captur_4.jpg',
                    header: 'Captur',
                    description: 'Europe’s best-selling crossover in its segment',
                    details: {
                        element: () => {
                            return <div className="hero_slide_single_dtls_bottom">
                                <div className="hero_slide_single_dtls_bottom_flex_2">
                                    <div className="dtls_list">
                                        <h2>
                                            Europe’s Best-Selling Crossover
                                        </h2>
                                        <p>
                                            Since it’s introduction, the Captur has<br />
                                            captivated many and has continued <br />
                                            to top it’s category.<br />
                                        </p>
                                    </div>

                                    <div className="dtls_list">
                                        <h2>
                                            Europe’s Best-Selling Crossover
                                        </h2>

                                        <p>
                                            Since it’s introduction, the Captur has<br />
                                            captivated many and has continued <br />
                                            to top it’s category.<br />
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
                    image: 'captur/captur_3.jpg',
                    header: 'A Smart Interior',
                    description: 'Europe’s best-selling crossover in its segment',
                    details: {
                        element: () => {
                            return <div className="hero_slide_single_dtls_bottom">
                                <div className="hero_slide_single_dtls_bottom_flex_2">
                                    <div className="dtls_list">
                                        <h2>
                                            A Smart Interior
                                        </h2>

                                        <p>
                                            Designed with clean and modern lines,<br />
                                            the Captur offers smart functions and <br />
                                            features today’s drivers need.<br />
                                        </p>
                                    </div>
                                    <div className="dtls_list">
                                        <h2>
                                            Compact Design
                                        </h2>

                                        <p>
                                            The Captur is designed for the city. Compact <br />
                                            and easy to maneuver, park and zip through <br />
                                            high traffic areas easily.
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
                    image: 'captur/captur_4.jpg',
                    header: 'Captur',
                    description: 'Europe’s best-selling crossover in its segment',
                    details: {
                        element: () => {
                            return <div className="hero_slide_single_dtls_bottom">
                            <div className="hero_slide_single_dtls_bottom_flex_2">
                                <div className="dtls_list">
                                    <h2>
                                        Technology Derived from Formula 1 
                                    </h2>

                                    <p>
                                        The Captur benefits from  Renault’s experience in F1,<br/>
                                        delivering performance, fuel consumption <br/>
                                        and quality. <br/>
                                    </p>
                                </div>

                                <div className="dtls_list">
                                    <h2>
                                        Turbocharged Engine
                                    </h2>

                                    <p>
                                        Power and excellent fuel efficiency, the turbocharged <br/>
                                        TCe 120 engine mated to a 6-speed Efficient Dual <br/>
                                        Clutch (EDC) transmission.<br/>
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
                    image: 'captur/captur_5.jpg',
                    header: 'Captur',
                    description: 'Europe’s best-selling crossover in its segment',
                    details: {
                       element: () => {
                        return <div className="hero_slide_single_dtls_bottom">
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
                                            Captur scored five stars in the  passive safety<br />
                                            crash tests carried out by the independent<br />
                                            body Euro NCAP.<br />
                                        </p>
                                    </div>

                                    <div className="dtls_list news_style">
                                        <div>
                                             {/* <p className="mb-0 float-left">4</p>
                                            <h2>
                                                High Efficiency Airbags
                                            </h2> */}

                                            <h2>
                                                <span>4</span>
                                                High Efficiency Airbags
                                                <p>
                                                    In the event of Impact, the Captur is front <br />
                                                    airbags, head/thorax side airbags and efficient<br />
                                                    pressure sensors to detect impact.<br /> 
                                                </p>
                                            </h2>
                                        </div>
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
                    image: 'captur/captur_6.jpg',
                    header: 'Captur',
                    description: 'Europe’s best-selling crossover in its segment',
                    details: {
                        element: () =>{
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

export default Captur;