import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import { notFound } from 'next/navigation'

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { cache: 'no-store' })

  if (!res.ok) {
    return notFound()
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
          <p className={styles.desc}>{data.body}</p>

          <div className={styles.author}>
            <Image width={40} height={40} className={styles.avatar} alt='' src="https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
            <span className={styles.username}>Micheal Odie</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image fill={true} alt='' className={styles.image} src="https://images.pexels.com/photos/2468773/pexels-photo-2468773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum fugit, minus laboriosam neque tempore voluptates deserunt quo vitae earum rerum enim sit, asperiores accusamus quis facilis officiis alias exercitationem repellat.
        Temporibus nemo laboriosam magnam accusamus sapiente saepe nihil quibusdam repellat cupiditate repellendus ex, dignissimos placeat dicta beatae inventore libero dolor, qui recusandae nobis? Accusamus dicta laboriosam fuga voluptatum aliquam natus?
        Porro facere quibusdam ea eum voluptates molestias expedita officia quo cum, nisi assumenda dolores inventore, eaque doloremque ipsam dolore officiis iste quis laudantium voluptatem earum sunt amet. Illum, quaerat consectetur.
        Consequuntur accusantium ullam delectus non veniam! Perferendis fuga similique quia consequuntur veritatis inventore illum itaque dolorum quas nesciunt magnam, quibusdam enim assumenda corporis! Fugiat qui omnis ut, est odio earum?
        Rem, unde officiis. Neque porro vero optio ad et. Numquam accusantium at sapiente iusto voluptates dignissimos! Aspernatur odit pariatur sequi vitae quidem ex, quasi quisquam, eligendi doloremque non qui dicta.
        Harum suscipit quos quidem doloribus repudiandae, iure voluptatum? Rem est vero ipsa placeat veritatis! Eaque at officiis odit magni corrupti, autem explicabo, molestias iure dolorem odio corporis doloremque enim consequatur!</p>
      </div>
    </div>
  )
}

export default BlogPost 