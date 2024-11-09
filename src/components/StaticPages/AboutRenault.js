import React, { Fragment } from 'react';
import Card from '../Card/Card';

function aboutRenault() {
    const cardItems = [
        {
            id: 1,
            image: 'captur/product/product_box_img_1.png' ,
            header: 'Stylish two-tone colours',
            description: 'Established in 2004, TC Euro Cars Sdn Bhd - is part of the Tan Chong Group. We are the official distributor of Renault vehicles in Malaysia, including the assembly, distribution and after-sales support.'
        },
        {
            id: 2,
            image: 'captur/product/product_box_img_2.png' ,
            header: 'C-shaped LED DRL',
            description: 'We have 5 Renault showrooms in Central region, Penang and Johor Bharu, and a wide network of 20 authorized Service Centres nationwide.'
        },
        {
            id: 3,
            image: 'captur/product/product_box_img_3.png' ,
            header: 'Hands-free Power Tailgate',
            description: 'We are constantly looking for talented and passionate individuals to join our team. If you have a passion for vehicles, drop your resume with us.'
        }
    ];

   const cardItemsElement = cardItems.map(item => {
        return <Card 
            key={ item.id} 
            image={ item.image } 
            header={item.header} 
            description={item.description}
        />;
   });


    return <Fragment>
        <div className="container pt-70">
            <div className="row">
                {cardItemsElement}
            </div>
        </div>
        <div className="container">
            <div className="interior_box about_banner_box mb-100">
                <img src={`${process.env.PUBLIC_URL}/assets/image/about/about_banner.png`} alt="" />
                <div className="interior_box_text">
                    <div>
                        <h1>
                            <span className="font-weight-bold" style={{ color: "#fece2b" }}>Motosports</span>
                            <br />
                            <span className="font-weight-light">Innovation, our passion</span>
                        </h1>
                        <button type="Submit" className="button yellow">
                            More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>;       

}

export default aboutRenault;
