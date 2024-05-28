import React, { memo } from 'react'
import styles from './index.module.scss'
const Welcome = memo(() => {
  return (
    <div className={styles.welcome}>
      <div className={styles.content}>
        <div className={styles.subTitle}>欢迎体验</div>
        <div className={styles.title}>React通用后台管理系统</div>
        <div className={styles.desc}>React18、React Router6、AntDesign5、Vite5</div>
      </div>
      <div className={styles.img}></div>
    </div>
  )
})

export default Welcome
