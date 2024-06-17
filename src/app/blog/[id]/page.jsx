import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { cache: 'no-store' })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

const BlogPost = async ({params}) => {
  const data = await getData(params.id)

  return (
    <div className={styles.mainContainer}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>{data.desc}</p>

          <div className={styles.author}>
            <Image width={40} height={40} className={styles.avatar} src="https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
            <span className={styles.username}>Micheal Odie</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image fill={true} alt='' className={styles.image} src="https://images.pexels.com/photos/2468773/pexels-photo-2468773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo eaque numquam labore libero? Molestias veritatis, omnis iusto aspernatur eos ex nesciunt saepe sit inventore. Libero blanditiis iusto rerum sunt veritatis.
        Voluptas nostrum quia harum delectus magnam ratione commodi itaque est. Ex, praesentium cum vel id illum dolores ipsa eaque quae vero quas nulla. Accusamus consectetur, fugiat nisi laudantium ducimus reprehenderit.
        Dolore iusto amet iste modi facere et, sapiente dolores voluptatibus ea sed, maiores perferendis recusandae veniam iure, laboriosam aspernatur suscipit consequuntur laudantium sint porro officia delectus minus nemo tempora! Quisquam!
        Maxime voluptates magni quas, ratione voluptas perferendis reprehenderit, ullam temporibus at quis assumenda recusandae quasi architecto nihil neque minima fugit rem illum, harum adipisci non dolore laboriosam. Numquam, nisi inventore!
        Ad optio sequi eius quidem ullam voluptatibus blanditiis placeat incidunt corrupti delectus excepturi, non voluptatum ipsum voluptas obcaecati rerum at odit beatae! Quod vero commodi porro accusantium, non reiciendis nemo.
        Magnam debitis id accusantium est ut iusto temporibus dolore neque voluptas laudantium quisquam, impedit atque dolores officiis ipsum! Fuga amet modi nihil fugiat ratione necessitatibus eaque quasi optio explicabo non!
        Nemo libero est optio aliquid asperiores, aut molestiae ea. Animi, dignissimos in. Magni ea quibusdam similique quae inventore vero cumque, numquam harum tempore libero incidunt voluptate laboriosam magnam. Facilis, rerum.
        Eveniet laudantium reiciendis excepturi eum. Deleniti aspernatur commodi, ex voluptatibus soluta esse laudantium similique aliquid, illum eius atque repudiandae, quaerat inventore fugit suscipit! Quis veniam exercitationem in officiis sunt suscipit!</p>
      </div>
    </div>
  )
}

export default BlogPost 