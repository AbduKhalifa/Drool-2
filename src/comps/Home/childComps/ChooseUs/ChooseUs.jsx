


import React from 'react';
import styles from './choose.module.css';
import bg from "./../../../../assets/pet-bg.png"

export default function ChooseUs() {
    return <>
        <section className={styles.choose + " py-32 px-8 sm:px-16 "}>
            <div className="container mx-auto">
                <div className="grid gap-y-6 md:gap-y-0 md:gap-x-8  md:grid-cols-2 grid-cols-1">
                    <div style={{ backgroundImage: `url(${bg})` }} className="bg-cover bg-no-repeat bg-right-top">
                        <img src={require("./../../../../assets/pet-img.png")} alt="dog photo" />
                    </div>
                    <div className='h-full flex flex-col justify-center'>
                        <img src={require("./../../../../assets/heading-img.png")} alt="dog" width={50} className='block' />
                        <span className='block text-2xl font-black mb-6'>Caring for your pets</span>
                        <p className='text-lg mb-6'>
                            It is a long established fact that a
                            reader will be distracted by the readable c
                            ontent of a page when looking at its layout. The point of using Lorem
                            Ipsum is that it has a more-or-less normal distribution of letters,
                        </p>
                        <button className='text-left color2 text-lg flex items-center'>
                            <span className='mr-2'>Read More</span>
                            <span className="material-symbols-outlined">send</span>
                        </button>
                    </div>
                </div>
                <div className='pt-32'>
                    <img src={require("./../../../../assets/heading-img.png")} className='block' width={50} alt="dog" />
                    <span className='mb-4 block font-black text-2xl'>Why Choose Us</span>
                    <p className='block text-lg'>It is a long established fact that a reader will be distracted by the readable content of a</p>
                    <div className={styles.choices + ' relative flex justify-between lg:px-32 md:flex-row flex-col mb-4'}>
                        <div className={styles.item + " py-12 flex flex-col justify-between"}>
                            <div>
                                <img src={require("./../../../../assets/pet1.png")} alt="pet animal" className='block mb-14 mx-auto' />
                            </div>
                            <div>
                                <img src={require("./../../../../assets/omega.png")} alt="omega" className='block mx-auto mb-4' />
                                <span className='block font-bold text-xl text-center'>PET NUTRITIONISTS</span>
                            </div>
                        </div>
                        <div className={styles.item + " py-12 "}>
                            <div>
                                <img src={require("./../../../../assets/pet2.png")} alt="pet animal" className='block mb-14 mx-auto' />
                            </div>
                            <div>
                                <img src={require("./../../../../assets/dog.png")} alt="omega" className='block mx-auto mb-4' />
                                <span className='block font-bold text-xl text-center'>STANDARDS</span>
                            </div>
                        </div>
                        <div className={styles.item + " py-12 "}>
                            <div>
                                <img src={require("./../../../../assets/pet2.png")} alt="pet animal" className='block mb-14 mx-auto' />
                            </div>
                            <div>
                                <img src={require("./../../../../assets/shield.png")} alt="omega" className='block mx-auto mb-4' />
                                <span className='block font-bold text-xl text-center'>QUALITY & SAFETY</span>
                            </div>
                        </div>
                    </div>
                    <button className='mx-auto flex items-center color2'>
                        <span className='mr-2'>Read More</span>
                        <span className="material-symbols-outlined">send</span>
                    </button>
                </div>
            </div>
        </section>
    </>
}
