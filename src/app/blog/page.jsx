import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

async function getData() {
  const res = await fetch('http://localhost:3000/api/posts', { cache: 'no-store' })

  if (!res.ok) {
    return notFound()
  } 
  return res.json()
}

const Blog = async () => {

  const data = await getData();

  return (
    <div className={styles.mainContainer}>
      {data.map((item) => (
        <Link href={`/blog/${item._id}`} className={styles.container} key={item.id}>
          <div className={styles.imgContainer}>
            <Image width={400} height={250} className={styles.img} src={item.postImg} alt='' />
          </div>

          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
          </div>
        </Link>
      ))}

    </div>
  )
}

export default Blog