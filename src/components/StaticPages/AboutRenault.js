import React, { Fragment } from 'react';
import Card from '../Card/Card';

function aboutRenault() {
    const cardItems = [
        {
            id: 1,
            image: 'captur/product/camry.jpg' ,
            header: 'Elegant Design',
            description: 'The 2021 Toyota Camry boasts a sophisticated palette of colors, including the elegant Ash Gray and other striking tones that elevate its sleek, modern design. These stylish options enhance its premium appeal, perfectly complementing the cars dynamic lines and bold aesthetics'
        },
        {
            id: 2,
            image: 'captur/product/pp.png' ,
            header: 'Advanced Dashboard',
            description: 'Our Toyota interior dashboard offers seamless control for music, video, and AC settings. With 5 showrooms in the Central region, Penang, and Johor Bharu, plus 20 service centers nationwide, we ensure quality support'
        },
        {
            id: 3,
            image: 'captur/product/ot.jpg' ,
            header: 'Sleek Tyres and Rims',
            description: 'The Toyota Camry features high-performance tyres paired with stylish alloy rims, designed to enhance its bold aesthetic and deliver exceptional road grip and stability. These premium details combine durability with elegance, ensuring a smooth and confident driving experience.'
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
            <img 
  src={`${process.env.PUBLIC_URL}/assets/image/about/banner.jpg`} 
  alt="" 
  style={{ borderRadius: '60px' }} 
/>

                <div className="interior_box_text">
                    <div>
                        <h1>
                            {/* <span className="font-weight-bold" style={{ color: "#fece2b" }}>Motosports</span> */}
                            <br />
                            <span className="font-weight-light">Innovation, our passion</span>
                        </h1>
                        <button
  type="Submit"
  className="button red"
  style={{ backgroundColor: 'red', color: 'white', marginLeft: '-30px', borderRadius: '60px', }}
>
  More
</button>



                    </div>
                </div>
            </div>
        </div>
    </Fragment>;       

}

export default aboutRenault;
