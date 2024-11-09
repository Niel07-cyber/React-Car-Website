import React from 'react';
import fullpage from 'fullpage.js';

class FullPageSlider extends React.Component {

    constructor(props) {
        super(props);
        this.sliderRef = React.createRef();
        this.fullPage = null;
        this.state = {
            defaultSliderConfig: {
                showActiveTooltip: true,
                autoScrolling:true,
                scrollHorizontally: false,
                fitToSection:true,
                navigation: true,
                navigationPosition: 'left',
                responsiveHeight: true,
                slidesNavigation: true,
                slidesNavPosition: 'bottom',
                scrollOverflow: true,
                slideSelector:'slide'
            }
        }
    }

    componentWillUnmount() {
        this.fullPage.destroy('all');
    }

    componentDidMount() {
        const sliderDomNode = this.sliderRef.current;
        this.fullPage = new fullpage(sliderDomNode, {
            anchors: this.props.anchors,
            navigationTooltips: this.props.tooltips,
            ...this.state.defaultSliderConfig
        });
    }

    render() {
        return <div className="capture_slider" ref={this.sliderRef}>
            { this.props.children }
        </div>;
    }

}

export default FullPageSlider;