


import React from 'react';
import styles from "./header.module.css";
import bg1 from "./../../assets/hero-bg.jpg";
import { Link } from 'react-router-dom';

export default function Header({ body, head }) {

    const styleOfSection = {
        backgroundImage: `url(${bg1})`,
    }


    const openMenu = () => {
        const element = document.querySelector("#menu");
        element.classList.add(styles.active);
    }
    const closeMenu = () => {
        const element = document.querySelector("#menu");
        element.classList.remove(styles.active);
    }


    return <>
        {head ? <div className={styles.header + " p-4 relative w-full "} style={styleOfSection}>
            <header className='flex justify-between'>
                <div>
                    <img src={require("./../../assets/logo.png")} width={60} alt="Logo" />
                </div>
                <div>
                    <div className={styles.icons + " flex justify-center h-full cursor-pointer "}
                        onClick={openMenu}
                    >
                        <button className='z-10'>
                            <span className='block rounded mb-1 bg-white'></span>
                            <span className='block rounded mb-1 bg-white'></span>
                            <span className='block rounded mb-1 bg-white'></span>
                        </button>
                    </div>
                </div>
            </header>
            {
                body ? <div className={styles.body + " py-8 z-10 relative"}>
                    <div className="container mx-auto sm:px-0 md:px-4 lg:px-12">
                        <div className='grid sm:grid-cols-2 gap-3'>
                            <div className='h-full flex items-center'>
                                <div className='text-center sm:text-left'>
                                    <span className='block text-5xl md:text-6xl mb-3'>Drool</span>
                                    <span className='block text-5xl md:text-6xl color2 mb-6'>Pet And Animal</span>
                                    <p className='mb-6 text-md'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                    </p>
                                    <div>
                                        <button className={styles.readMore + " border-2 px-6 py-2 mx-1.5 bg-color3 mb-2 md:mb-0"}>Read More</button>
                                        <button className={styles.contactUs + " border-2 px-6 py-2 mx-1.5 bg-color2"}>Conact Us</button>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <img src={require("./../../assets/slider-img.png")} alt="dog's photo" />
                            </div>
                        </div>
                    </div>
                </div>
                    :
                    null
            }
            <div id='menu' className={styles.navigate + " bg-white fixed top-0 z-50"}>
                <div className='flex justify-center w-screen'>
                    <div className='flex flex-col h-screen justify-center items-center grow'>
                        <Link className='text-2xl mb-2' to={"/"}>HOME</Link>
                        <Link className='text-2xl mb-2' to={"/about"}>ABOUT</Link>
                        <Link className='text-2xl mb-2' to={"/contact"}>CONTACT US</Link>
                    </div>
                    <div className='sm:px-12 pr-4 py-8 text-xl'>
                        <button onClick={closeMenu}> x </button>
                    </div>
                </div>
            </div>
        </div>
    :
    null    
    }
    </>
}
