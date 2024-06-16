import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Blog = () => {
  return (
    <div className={styles.mainContainer}>

      <Link href="/blog/testId" className={styles.container}>
        <div className={styles.imgContainer}>
          <Image width={400} height={250} className={styles.img} src="https://images.pexels.com/photos/4613401/pexels-photo-4613401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt='' />
        </div>

        <div className={styles.content}>
          <h1 className={styles.title}>Lorem ipsum dolor sit amet.</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quisquam nostrum dolores reiciendis est incidunt, labore, quod ab autem ratione aspernatur accusamus repudiandae perspiciatis quo eius nulla nesciunt voluptatem quis.</p>
        </div>
      </Link>

      <Link href="/blog/testId" className={styles.container}>
        <div className={styles.imgContainer}>
          <Image width={400} height={250} className={styles.img} src="https://images.pexels.com/photos/4613401/pexels-photo-4613401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt='' />
        </div>

        <div className={styles.content}>
          <h1 className={styles.title}>Lorem ipsum dolor sit amet.</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quisquam nostrum dolores reiciendis est incidunt, labore, quod ab autem ratione aspernatur accusamus repudiandae perspiciatis quo eius nulla nesciunt voluptatem quis.</p>
        </div>
      </Link>

      <Link href="/blog/testId" className={styles.container}>
        <div className={styles.imgContainer}>
          <Image width={400} height={250} className={styles.img} src="https://images.pexels.com/photos/4613401/pexels-photo-4613401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt='' />
        </div>

        <div className={styles.content}>
          <h1 className={styles.title}>Lorem ipsum dolor sit amet.</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quisquam nostrum dolores reiciendis est incidunt, labore, quod ab autem ratione aspernatur accusamus repudiandae perspiciatis quo eius nulla nesciunt voluptatem quis.</p>
        </div>
      </Link>

    </div>
  )
}

export default Blog