import React from 'react';

function carModel(props) {

    let description = null;
    if(props.description !== '') {
        description = <p>( { props.description } )</p>;
    } 

    return (
        <div className="col-md-3">
            <div className="test_drive_box">
                <div className="test_drive_img_box">
                    <a href="test-form_1.html">
                        <img src={`${process.env.PUBLIC_URL}/assets/image/${props.image}`} alt="" />
                        <div className="check"><i className="icon icon-check"></i></div>
                    </a>
                </div>
                <div className="test_drive_details_box">
                    <h4>{ props.title }</h4>
                    { description }
                </div>
            </div>
        </div>
    );
}

export default carModel;