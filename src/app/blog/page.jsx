import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Link from 'next/link'

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', { cache: 'no-store' })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

const Blog = async () => {

  const data = await getData();

  return (
    <div className={styles.mainContainer}>

      {data.map((item) => (
        <Link href={`blog/${item.id}`} className={styles.container} key={item.id}>
          <div className={styles.imgContainer}>
            <Image width={400} height={250} className={styles.img} src="https://images.pexels.com/photos/4613401/pexels-photo-4613401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt='' />
          </div>

          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.body}</p>
          </div>
        </Link>
      ))}

    </div>
  )
}

export default Blog