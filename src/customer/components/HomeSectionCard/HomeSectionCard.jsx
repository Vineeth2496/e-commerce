import React from "react";

const HomeSectionCard = () => {
    return (
        <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3'>
            <div className='h-[13rem] w-[10rem]'>
                <img className='object-cover object-top w-full h-full' src="https://m.media-amazon.com/images/I/61qcnAHZP3L._SX679_.jpg" alt=""/>

            </div>
            <div className='p-4'>
                <h3 className='text-lg front-medium text-gray-900'>Dennis Lingo</h3>
                <p className='mt-2 text-sm text-gray-500'>Dennis Lingo Men's Solid Slim Fit Casual Shirt, Full Sleeve Shirt for Casual Wear & Formal Wear (Also Available in Plus Size)</p>

            </div>

        </div>
    )
}
export default HomeSectionCard
