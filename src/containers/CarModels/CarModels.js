import React from 'react';
import CarModel from './CarModel';

class CarModels extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            carModels: [
                {
                    id:1,
                    image:"test-drive/image_1.png",
                    title:'Toyota Highlander',
                    description: 'Test drive at showroom'
                },
                {
                    id:2,
                    image:"test-drive/image_2.png",
                    title:'Toyota Tundra',
                    description: 'Test drive through GoCar with 3 Hours FREE promo code'
                },
                {
                    id:3,
                    image:"test-drive/image_3.png",
                    title:'Toyota Camry',
                    description: ''
                },
                {
                    id:4,
                    image:"test-drive/image_4.png",
                    title:'Toyota RAV4',
                    description: ''
                },
                {
                    id:5,
                    image:"test-drive/image_5.png",
                    title:'Toyota Corolla',
                    description: ''
                },
                {
                    id:6,
                    image:"test-drive/image_6.png",
                    title:'Toyota Prius',
                    description: ''
                },
                {
                    id:7,
                    image:"test-drive/image_7.png",
                    title:'Toyota Land Cruiser',
                    description: ''
                },
                {
                    id:8,
                    image:"test-drive/image_8.png",
                    title:'Toyota Supra',
                    description: ''
                },
                {
                    id:9,
                    image:"test-drive/image_9.png",
                    title:'Toyota 4Runner',
                    description: ''
                },
                {
                    id:10,
                    image:"test-drive/image_10.png",
                    title:'Toyota Avalon',
                    description: ''
                },
                {
                    id:11,
                    image:"test-drive/image_11.png",
                    title:'Toyota Sienna',
                    description: ''
                },
                {
                    id:12,
                    image:"test-drive/image_12.png",
                    title:'Toyota C-HR',
                    description: ''
                }
            ]
        };
    }

    render() {
        const carModelItems = this.state.carModels.map(model => {
            return <CarModel 
                key={ model.id } 
                title={ model.title } 
                description={ model.description } 
                image={ model.image }
            />;
        });
        return <div className="pt-70 sec_gray_bg">
            <div className="container">
                <div className="test_drive_container">
                    <h3 className="heading_01 mb-70">Choose model</h3>
                </div>
                <div className="row row_with_small_padding">
                    { carModelItems }
                </div>
            </div>
        </div>;
    }
}

export default CarModels;
