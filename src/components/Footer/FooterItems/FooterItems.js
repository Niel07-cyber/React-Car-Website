// import React, { Fragment } from 'react';
import React from 'react';
import ListItem from '../../UI/ListItem';

function footerItems() {
    const footerItems = [
        {
            id: 1,
            title: 'Legal'
        },
        {
            id: 2,
            title: 'Contact'
        },
        {
            id: 3,
            title: 'Career'
        },

        {
            id: 4,
            title: 'Newsletter'
        },
        {
            id: 5,
            title: 'Showroom & Service'
        },

    ];

    const socialLinks = [
        {
            id: 'facebook',
            icon: 'fa fa-facebook'
        },
        {
            id: 'instagram',
            icon: 'fa fa-instagram'
        },
        {
            id: 'youtube',
            icon: 'fa fa-youtube'
        }
    ];

    const footerMenuItems = footerItems.map(item => {
        return <ListItem key={ item.id} title={ item.title } />;
    });

    const socialMenuItems = socialLinks.map(link => {
        return <ListItem key={ link.id } classes="social_list">
            <a href="" className="social">
                <i className={ link.icon }></i>
            </a>
        </ListItem>;
    })

    return <ul>
        { footerMenuItems }
        { socialMenuItems }  
    </ul>;
}

export default footerItems;