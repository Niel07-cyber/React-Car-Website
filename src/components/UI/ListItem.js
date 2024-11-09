import React from 'react';

function listItem(props) {
    let el = <a href="#">{props.title}</a>;
    if(props.children) {
        el = props.children;
    }
    return <li className={props.classes}>
        { el }
    </li>;
}

export default listItem; 