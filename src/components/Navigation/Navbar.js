import React from 'react';
import Logo from '../Logo/Logo';
import NavigationItems from './NavigationItems/NavigationItems';

function navbar(props) {
    return <header>
        <div className="renault_nav">
            <a 
                href="javascript:void(0);" 
                className="nav_toggle"
                onClick={props.drawerToggleClicked}>
                <span></span>
            </a>
            <nav className="menu_desktop">
                <NavigationItems />
            </nav>
            <Logo />
        </div>
    </header>;
}

export default navbar;