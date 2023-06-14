


import React from 'react'
import bg from "./../../../../assets/client-bg.jpg";
import styles from './client.module.css';
export default function Client() {

    return <div className='coantiner mx-auto md:px-16 px-8 lg:px-24 xl:px-32 py-32 bg-cover' style={{ backgroundImage: `url(${bg})` }}>
        <div className='sm:text-left text-center'>
            <img src={require("./../../../../assets/heading-img.png")} width={50} className='mx-auto sm:mx-0 object-cover' alt="" />
            <span className='font-black text-4xl mb-4 block'>What Says Our Customer</span>
            <p className='text-xl mb-6 sm:mb-12'>It is a long established fact that a reader will be distracted by the</p>
            <div className='flex '>
                <img src={require("./../../../../assets/client.png")} alt="Client" />
                <div className='px-8 py-2'>
                    <span className='text-2xl font-medium'>JACK MENGO</span>
                    <p className='text-lg'>It is a long established fact that a reader
                        will be distracted by
                        the readable cIt is a long established
                        fact that a reader will be distracted by the readable c
                    </p>
                </div>
                <div className='flex items-center' >
                    <button className={styles.btn + " mr-2 bg-color2 flex justify-center items-center"}>
                        <span class="material-symbols-outlined text-3xl">
                            navigate_before
                        </span>
                    </button>
                    <button className={styles.btn + " bg-color2 flex justify-center items-center "}>
                        <span class="material-symbols-outlined text-3xl">
                            navigate_next
                        </span>
                    </button>
                </div>
            </div>
        </div>
    </div>


}
