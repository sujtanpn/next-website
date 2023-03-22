import React from 'react'
import styles from '../styles/About.module.css'
import m from '../public/images/m.png'

const Message = () => {
  return (
    <div className={styles.message}>
        <div className={styles.left}>
            <img src="https://www.message.org.uk/wp-content/uploads/2020/10/MessageBubble_Logo_black_HIRES.png" />
        </div>
        <div className={styles.right}>
            <h1>A Message From</h1><h2>Managing Director</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum nemo, ipsa quos libero culpa, perspiciatis commodi optio iste provident ipsam animi? Error assumenda minus aliquam nobis cumque dolor at quam?</p>
            
        </div>
      
    </div>
  )
}

export default Message
