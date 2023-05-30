


import React from 'react'
import styles from "./ourfood.module.css";

export default function OurFood() {
    return <>
        <section className={styles.ourFood + " py-32"}>
            <div className="container mx-auto px-8 sm:px-16 lg:px-24 xl:px-32">
                <div>
                    <img src={require("./../../../../assets/heading-img.png")} width={50} alt="" className='mx-auto' />
                    <span className='block text-center text-3xl font-bold mb-3'>Our Dog Food</span>
                    <p className='text-center mb-24'>It is a long established fact that a reader will be distracted by the readable content of a</p>
                </div>
                <div className='grid md:grid-cols-3 gap-6'>
                    <div className='mt-auto'>
                        <img src={require("./../../../../assets/f1.png")} alt="dog's food" className='mx-auto' />
                        <div className='flex flex-col'>
                            <span className='block text-center text-xl font-normal mb-2 color2'>BASIC</span>
                            <span className='block text-center text-2xl font-black mb-3 color2'><i className='color3'> $ </i>100</span>
                            <button className='py-2 px-12 bg-color3 w-max mx-auto color2'>Buy Now</button>
                        </div>
                    </div>
                    <div className='mt-auto'>
                        <img src={require("./../../../../assets/f2.png")} alt="dog's food" className='mx-auto' />
                        <div className='flex flex-col'>
                            <span className='block text-center text-xl font-normal mb-2 color2'>BASIC</span>
                            <span className='block text-center text-2xl font-black mb-3 color2'><i className='color3'> $ </i>100</span>
                            <button className='py-2 px-12 bg-color3 w-max mx-auto color2'>Buy Now</button>
                        </div>
                    </div>
                    <div className='mt-auto'>
                        <img src={require("./../../../../assets/f3.png")} alt="dog's food" className='mx-auto' />
                        <div className='flex flex-col'>
                            <span className='block text-center text-xl font-normal mb-2 color2'>BASIC</span>
                            <span className='block text-center text-2xl font-black mb-3 color2'><i className='color3'> $ </i>100</span>
                            <button className='py-2 px-12 bg-color3 w-max mx-auto color2'>Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}
