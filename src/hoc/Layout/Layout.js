import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';

import Navbar from '../../components/Navigation/Navbar';
import Footer from '../../components/Footer/Footer';
import Banner from '../../components/Banner/Banner';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

const bannerMapWithRoute = {
    'test-drive': {
        classes: ['banner_style_2'],
        backgroundImage: 'test-drive/test_drive_banner.png',
        childEl: () => {
            return <div className="banner_bottom with_button align-items-end">
                <div>
                    <h1>
                        Test Drive
                    </h1>
                </div>
            </div>;
        }
    },
    'legal': {
        classes: [],
        backgroundImage: 'page_banner/Banner_Legal.jpg',
        childEl: () => {
            return <h1>
                Legal Info
            </h1>;
        }
    },
    'about': {
        classes: [],
        backgroundImage: 'captur/Exterior_banner.png',
        childEl: () => {
            return <Fragment>
                <h1 className="mb-15">
                    Captur
                </h1>
                <p className="text-white">
                    Europe’s best-selling crossover in its segment
                </p>
            </Fragment>;
        }
    }
};

class Layout extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showSideDrawer: false,
            pathname: ''
        };
    }

    sideDrawerToggledHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        });
    }

    componentDidUpdate(prevProps) {
        if(prevProps.location.pathname !== this.props.location.pathname) {
            let pathname = this.props.location.pathname;
            pathname = pathname.replace('/', '');
            this.setState({ pathname: pathname });
        }
    }

    render() {
        let bannerEl = null;
        let footerEl = null;
        if(bannerMapWithRoute[this.state.pathname]){
            const { childEl,  ...bannerObject } = bannerMapWithRoute[this.state.pathname];
            bannerEl = (<Banner { ...bannerObject }>
                { childEl() }
            </Banner>);
            footerEl = <Footer />;
        }

        return (
            <div className="has_section_bg">
                <Navbar drawerToggleClicked={this.sideDrawerToggledHandler} />
                <SideDrawer 
                    closed={this.sideDrawerToggledHandler} 
                    isOpen={this.state.showSideDrawer}
                />
                { bannerEl }
                <main>
                    { this.props.children }
                </main>
               { footerEl }
            </div>
        );
    }
}

const layoutWithRouter = withRouter(Layout);

export default layoutWithRouter;