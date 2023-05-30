



import React from 'react'
import styles from "./footer.module.css";

export default function Footer() {
    return <>
        <section className={styles.footer + ' pt-16 pb-12'}>
            <div className="container mx-auto px-8 sm:px-12 md:px-18 lg:px-24">
                <div className='grid lg:grid-cols-4 sm:grid-cols-2 gap-4'>
                    <div className={styles.item + ' '}>
                        <span className='block mb-4 font-bold text-xl'>CONTACT INFO</span>
                        <div className='flex items-center mb-1'>
                            <span className="material-symbols-outlined">perm_phone_msg</span>
                            <span className='mx-2 text-lg'> +01025481400</span>
                        </div>
                        <div className='flex items-center'>
                            <span className="material-symbols-outlined">mail</span>
                            <span className='mx-2 text-lg'> poda5371@gmail.com</span>
                        </div>
                    </div>
                    <div className={styles.item + ' '}>
                        <span className='block mb-4 font-bold text-xl'>OPENING HOURS SHOP</span>
                        <div className=' mb-1'>
                            <span className='text-md block mb-1'> MONDAY TO FRIDAY</span>
                            <span className='text-md block'> 07:00 AM TO 04:00 PM </span>
                        </div>
                    </div>
                    <div className={styles.item + ' '}>
                        <span className='block mb-4 font-bold text-xl'>SOCIAL MEDIA</span>
                        <div className='flex '>
                            <img src={require("./../../assets/fb.png")} className='mx-1 cursor-pointer' alt="facebook icon" />
                            <img src={require("./../../assets/twitter.png")} className='mx-1 cursor-pointer' alt="twitter icon" />
                            <img src={require("./../../assets/linkedin.png")} className='mx-1 cursor-pointer' alt="linkedin icon" />
                            <img src={require("./../../assets/instagram.png")} className='mx-1 cursor-pointer' alt="instagram icon" />
                        </div>
                    </div>
                    <div className={styles.item + ' '}>
                        <span className='block mb-4 font-bold text-xl'>NEWSLETTER</span>
                        <input type="email" className='w-full mb-3 px-4 py-2 border-0 outline-0' placeholder='Enter Your Email' />
                        <button className='py-2  bg-color2 w-full'>SUBSCRIBE</button>
                    </div>
                </div>
            </div>
        </section>
        <div className={styles.copyRight + ' py-6 text-center font-semibold'}>
            © 2023 All Rights Reserved. Design by Abdelrhman Khalifa
        </div>
    </>
}
