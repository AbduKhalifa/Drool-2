


import React from 'react'
import bg from "./../../../../assets/client-bg.jpg";
export default function Client() {

    return <div className='coantiner mx-auto md:px-16 px-8 lg:px-24 py-32' style={{ backgroundImage: `url(${bg})` }}>
        <div className='sm:text-left text-center'>
            <img src={require("./../../../../assets/heading-img.png")} width={50} className='mx-auto sm:mx-0 object-cover' alt="" />
            <span className='font-black text-4xl mb-4 block'>What Says Our Customer</span>
            <p className='text-xl mb-6 sm:mb-12'>It is a long established fact that a reader will be distracted by the</p>
        </div>
    </div>

}
