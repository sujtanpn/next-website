import React , {useState } from 'react'
import styles from '../styles/About.module.css'
import {Data } from '../components/Data'

const Services = ( ) => {
    const[item , setItems] = useState(Data);

    return(
        <div className={styles.service}>
        <div className={styles.card}>
                    {
                        item.map((elem) => {
                            const { id, image , desc } = elem;
    
                            return (
                                <div className={styles.card1}>
    
                                            <img src={image}  className='img-fluid'/>
                                            <h3>{desc}</h3>
                                     
                                </div>
                            )
                        } )
                    }
                    
                </div>
    </div>
    )

   
}

export default Services
