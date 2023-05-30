


import React from 'react'
import styles from './about.module.css';
import Header from '../Header/Header';

export default function About({head}) {
  if(head == undefined)
    head = true;
    
  return <>
    <Header body={false} head={head}/>
    <section className={styles.about}>
      <div className='py-32 text-center'>
        <img src={require("./../../assets/heading-img.png")} width={60} className='mx-auto' alt="dog" />
        <span className='text-3xl font-bold block mb-4'>About Us</span>
        <p className='sm:w-7/12 mx-auto font-semibold w-full px-4 mb-3'>
          It is a long established fact that
          a reader will be distracted by the readable content of a page when looking at its layout.
          The point of using Lorem Ipsum is that it has a
          -or-less normal distribution of letters,
        </p>
        <button className='color2 flex items-center mx-auto text-xl'>
          <span className='mr-1'>Read More</span>
          <span className="material-symbols-outlined">send</span>
        </button>
      </div>
    </section>
  </>
}
