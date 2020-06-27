import React from 'react'
import styles from './Ctegory.module.css'
import arrow from './../../assets/images/arrow.svg'

const Category = ({handleClickCategory, showChildCategory, categories, handleShowTitle}) => {

  const category = categories && categories.map((item) => {
    let child = categories.filter(i => i.parent === item.id)
    let childCategory = child.length > 0 && child.map(i => {
      return (
        <li onClick={() => handleShowTitle(i.id, i.name)} key={i.id}>
          <span></span>{i.name}</li>
      )
    })

    if (item.parent !== 0) {
      return null
    }

    return (
      <div
        className={`${styles.category_item} ${showChildCategory === item.id && styles.category_item_active}`}
        key={item.id}>
        <h2 className={styles.parent_category}
            onClick={() => handleClickCategory(item.id)}>{item.name} <img
          src={arrow} alt="arrow"/></h2>
        {showChildCategory === item.id && <ul>{childCategory}</ul>}
      </div>
    )
  })

  return (
    <div className={styles.categories}>
      {category}
    </div>
  )
}

export default Category

