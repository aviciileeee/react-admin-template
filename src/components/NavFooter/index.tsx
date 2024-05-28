import React, { memo } from 'react'
import styles from './index.module.scss'
const NavFooter = memo(() => {
  return (
    <div className={styles.footer}>
      <div>Copyright &copy; fanfannet.cn All Rights Reserved</div>
    </div>
  )
})

export default NavFooter
