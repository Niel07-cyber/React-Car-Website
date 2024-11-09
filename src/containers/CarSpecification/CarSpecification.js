import React from 'react';
import CarDimension from '../../components/Car/Specifications/CarDimension';
//import KeySpecification from '../components/Car/Specification/KeySpecification';
//import DetailSpecification from '../components/Car/Specification/DetailSpecification';

const keySpecification = [
    {
        id: 1,
        header: 'Engine',
        description: '1.2 L turbocharged'
    },
    {
        id: 2,
        header: 'Gearbox',
        description: '6-speed Efficient Dual Clutch (EDC) automatic'
    },
    {
        id: 3,
        header: 'Maximum torque',
        description: '205 Nm @ 2,000 rpm'
    },
    {
        id: 4,
        header: 'Maximum power',
        description: '120 PS @ 5,000 rpm'
    },
    {
        id: 5,
        header: 'Seating',
        description: '5 adults'
    },
    {
        id: 6,
        header: 'Fuel efficiency',
        description: '5.9 L/100km*'
    },
    {
        id: 7,
        header: 'Stop-start function',
        description: 'Yes'
    },
    {
        id: 8,
        header: 'Displays',
        description: '7” touchscreen with online & offiline navigation'
    }
];

class CarSpecification extends React.Component {
    
    
    /*const cardItemsElement = cardItems.map(item => {
        return <Card 
            key={ item.id} 
            image={ item.image } 
            header={item.header} 
            description={item.description}
        />;
    });*/
    
    constructor(props) {
        super(props);
        this.state = {
            specification: {
                carDimension: {
                    image: 'captur/price_spec_car.png',
                    length: '4,122mm',
                    breadth: '4,122mm',
                    wheelbase: ['Wheelbase', '2606mm']
                },
                keySpecifications: keySpecification
            }
        }
    }

    render() {
        return <h2>Car Specs</h2>;
    }

}

export default CarSpecification;