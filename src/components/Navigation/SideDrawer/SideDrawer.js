import React from 'react';
import SideDrawerItems from './SideDrawerItems/SideDrawerItems';

function sideDrawer(props){
    let classList = ['navbar-collapse', 'offcanvas-collapse'];
    if(props.isOpen) {
        classList.push('open');
    }
    classList = classList.join(' ');
    
    return (
        <div className="side_nav">
            <div className={classList}>
                <a
                    href="javascript:void(0);"
                    className="nav_toggle"
                    onClick={props.closed}>
                    <span></span>
                </a>
                <SideDrawerItems />
            </div>
        </div>
    );
}

export default sideDrawer;