import React from 'react';

import PropTypes from 'prop-types';

function card(props){
    return <div className="col-md-4">
        <div className="product_box">
            <div className="product_box_img">
                <img src={`${process.env.PUBLIC_URL}/assets/image/${props.image}`} alt=""/> 
            </div>
            <div className="product_box_details">
                <h3>
                   {props.header}
                </h3>
                <p>
                   {props.description}
                </p>
            </div>
        </div>
    </div>;   
}

card.propTypes = {
    image:PropTypes.string,
    header: PropTypes.string,
    description:PropTypes.string

}

export default card;



















