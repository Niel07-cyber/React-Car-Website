import React from 'react';
import PropTypes from 'prop-types';


function keySpecification(props) {

   return <div className="space_adjust">
        <h1 className="dtls_spec_heading">
            Key Specifications
        </h1>

    <table className="spec_table">
        <tr>
            <td>
                <h3>{props.header}</h3>
                <p>
                    {props.description}
                </p>
            </td>
        </tr>    
    </table>
    <table className="spec_table w-100 price_list_table last_bottom_space_adjst">
      <tr>
         <td>
            <h3>{props.description}</h3>
        </td>
     </tr>    
    </table> 
</div>;         
}

keySpecification.propTypes = {

    header: PropTypes.string,
    description:PropTypes.string

}

export default keySpecification;