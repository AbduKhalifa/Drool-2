



import React from 'react';
import styles from './animation.module.css';
import animalBg from "./../../../../assets/animal-bg.jpg";



export default function Animation() {

    return <section className={styles.animation + " py-32"} style={{ backgroundImage: `url(${animalBg})` }}>
        <div className="container md:px-32 sm:px-16 px-8 mx-auto">
            <div className={styles.animationContainer + " grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8"}>
                <div className={styles.item + " text-center"}>
                    <img src={require("./../../../../assets/dog.jpg")} alt="dog" className='block rounded-xl mb-3 mx-auto' />
                    <span className='block mb-3 text-xl font-bold'>Dog</span>
                    <p className='block text-lg font-normal'>
                        It is a long established fact that a reader will be distracted by
                    </p>
                </div>
                <div className={styles.item + " text-center"}>
                    <img src={require("./../../../../assets/bird.jpg")} alt="dog" className='block rounded-xl mb-3 mx-auto' />
                    <span className='block mb-3 text-xl font-bold'>Bird</span>
                    <p className='block text-lg font-normal'>
                        It is a long established fact that a reader will be distracted by
                    </p>
                </div>
                <div className={styles.item + " text-center"}>
                    <img src={require("./../../../../assets/cat.jpg")} alt="dog" className='block rounded-xl mb-3 mx-auto' />
                    <span className='block mb-3 text-xl font-bold'>Cat bite</span>
                    <p className='block text-lg font-normal'>
                        It is a long established fact that a reader will be distracted by
                    </p>
                </div>
                <div className={styles.item + " text-center"}>
                    <img src={require("./../../../../assets/fish.jpg")} alt="dog" className='block rounded-xl mb-3 mx-auto' />
                    <span className='block mb-3 text-xl font-bold'>Fish</span>
                    <p className='block text-lg font-normal'>
                        It is a long established fact that a reader will be distracted by
                    </p>
                </div>
            </div>
        </div>
    </section>
}
