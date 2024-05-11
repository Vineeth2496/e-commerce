import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCarosalData } from './MainCarosalData';

// const responsive = {
//     0: { items: 1 },
//     568: { items: 2 },
//     1024: { items: 3 },
// };



const MainCarosal = () => {
    //const navigate=useNaviga
    const items = mainCarosalData.map((item)=> <img className='cursor-pointer' role='presentation' src={item.image} alt=""/>)
    
    return (
    <AliceCarousel
    items={items}
    />
)
}

export default MainCarosal;