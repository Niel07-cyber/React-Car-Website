import React from 'react';
import PropTypes from 'prop-types';

function detailSpecification (props){

        

        return <div className="specdetailRight">
            <h1 className="dtls_spec_heading">
                Detailed Specifications
            </h1>

            <h3 class="sub_heading">
                {props.title}
            </h3>
            <ul>
                <li>
                    {props.description}
                </li>
                <li>
                    {props.descripton}
                </li>
                 <li>
                  {props.description}
                </li>
                <li>
                    {props.description}
                </li>
            </ul>
        </div>;   

}

detailSpecification.propTypes = {

title: PropTypes.string,
description:PropTypes.string

}
export default detailSpecification;