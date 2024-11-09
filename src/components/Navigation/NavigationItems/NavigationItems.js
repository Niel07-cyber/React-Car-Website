import React, { Fragment } from 'react';
import ListItem from '../../UI/ListItem';
import { NavLink } from 'react-router-dom';

function navigationItems() {
    const carModels = [
        {
            id: 1,
            title: 'RAV4',
            to: '/captur'
        },
        {
            id: 2,
            title: 'Camry',
            to: '/koleos'
        },
        {
            id: 3,
            title: 'V8',
            to: '/megane'
        }
    ];

    const features = [
        {
            id: 4,
            title: 'About',
            to: '/about'
        },
        {
            id: 5,
            title: 'Legal Info',
            to: '/legal'
        },
        {
            id: 6,
            title: 'Test Drive',
            to: '/test-drive'
        }
    ];

    const carModelMenuItems = carModels.map(model => {
        return <ListItem key={ model.id} title={ model.title }>
            <NavLink to={ model.to } activeClassName="active">
                { model.title }
            </NavLink>
        </ListItem>;
    });

    const featureMenuItems = features.map(feature => {
        return <ListItem key={ feature.id} >
            <NavLink to={ feature.to } activeClassName="active">
                { feature.title }
            </NavLink>
        </ListItem>;
    });

    return <Fragment>
        <ul>
            { carModelMenuItems }
        </ul>
        <ul>
            { featureMenuItems }
        </ul>
    </Fragment>;

}

export default navigationItems;