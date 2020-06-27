import React from 'react'
import styles from './Title.module.css'
import web from './../../assets/images/web.svg'

const Title = ({activeCategoryTitle, activeClass, onHandleGetPost, postTitle}) => {

  const categoryTitle = postTitle && postTitle.map((post) => {
    if (!post) {
      return null
    }
    return (
      <div
        className={activeClass === post.id ? styles.activeTitle : styles.titleName}
        key={post.id} onClick={() => onHandleGetPost(post.id, post.slug)}>
        <img src={web} alt="icon_name"/><h3
        dangerouslySetInnerHTML={{__html: post.title.rendered}}></h3>
      </div>
    )
  })


  return (
    <>
      <h3
        className={styles.titleCategory}>{activeCategoryTitle || 'Category'}</h3>
      <div className={styles.title}>
        {categoryTitle}
      </div>
    </>
  );
}

export default Title