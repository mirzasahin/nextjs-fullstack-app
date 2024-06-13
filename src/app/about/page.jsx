import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/Button/Button'

const About = () => {
  return (
    <div className={styles.container}>

      <div className={styles.imgContainer}>
        <Image fill={true} alt='' className={styles.img} src="https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />

        <div className={styles.imgText}>
          <h1>Digital Storytellers</h1>
          <h2>Handcrafting award winning digital experiences</h2>
        </div>
      </div>

      <div className={styles.textContainer}>

        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem quis minus dignissimos eius, dolor est qui, repudiandae, fuga voluptate aperiam deserunt id error vero quidem neque. Sit doloremque magnam doloribus!
            Deserunt distinctio nisi corporis, quia eius veniam est dignissimos? Quae nulla distinctio exercitationem facilis magnam, culpa minima provident consequatur, veritatis, blanditiis ab tempora?
            <br />
            <br />
            Porro libero optio repellendus dolorum maiores ullam?
            Nulla molestias ut quia itaque debitis fuga culpa totam error ipsum excepturi, vero quod voluptatem perferendis eius expedita numquam? Nam aspernatur debitis porro nemo eligendi labore laboriosam molestias laudantium eveniet.
          </p>
        </div>

        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab distinctio consequatur pariatur odit quasi cum quas incidunt at aliquam blanditiis expedita amet excepturi quia quidem, natus vero laborum soluta autem.
            <br />
            <br />
            - Creative Development
            <br />
            <br />
            - Dynamic Websites
            <br />
            <br />
            - Immersive Experiences
          </p>
          <Button text="Contact" url="/contact" />
        </div>
      </div>

    </div>
  )
}

export default About