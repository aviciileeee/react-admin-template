import React, { memo } from 'react'
import { MenuFoldOutlined } from '@ant-design/icons'
import { Breadcrumb, Switch, Dropdown } from 'antd'
import type { MenuProps } from 'antd'
import styles from './index.module.scss'
const NavHeader = memo(() => {
  const breadList = [
    {
      title: '首页'
    },
    {
      title: '工作台'
    }
  ]
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: '邮箱: fanfannet.cn'
    },
    {
      key: '2',
      label: '退出'
    }
  ]
  return (
    <div className={styles.navHeader}>
      <div className={styles.left}>
        <MenuFoldOutlined />
        <Breadcrumb items={breadList} style={{ marginLeft: '10px' }} />
      </div>
      <div className='right'>
        <Switch checkedChildren='暗黑' unCheckedChildren='默认' style={{ marginRight: '10px' }} />
        <Dropdown menu={{ items: items }}>
          <span className={styles.nickName}>fanfannet</span>
        </Dropdown>
      </div>
    </div>
  )
})

export default NavHeader
