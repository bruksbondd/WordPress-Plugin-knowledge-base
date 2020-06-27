import React from 'react'
import styles from './Post.module.css'
import Loader from 'react-loader-spinner'

const Post = ({activePost}) => {

  const Content = () => {
    return (
      <div className={styles.post}
           dangerouslySetInnerHTML={{__html: activePost.content.rendered}}></div>
    )
  }

  if (!activePost) {
    return (
      <div className={styles.center}>
        <Loader
          type="Puff"
          color="#3890C6"
          height={100}
          width={100}
        />
      </div>
    )
  }
  return (
    <>
      <h3 className={styles.titlePost}>{activePost.title.rendered}</h3>
      <Content/>
    </>
  )
}

export default Post