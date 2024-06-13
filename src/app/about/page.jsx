import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image width={500} height={500} src="https://images.pexels.com/photos/18820290/pexels-photo-18820290/free-photo-of-doga-orman-gol-iskele.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
      </div>
    </div>
  )
}

export default About