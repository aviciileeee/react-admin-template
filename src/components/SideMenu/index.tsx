import React, { memo } from 'react'
import { Menu } from 'antd'
import type { MenuProps } from 'antd'
import { DesktopOutlined, SettingOutlined, TeamOutlined } from '@ant-design/icons'
import styles from './index.module.scss'
import { useNavigate } from 'react-router-dom'
type MenuItem = Required<MenuProps>['items'][number]

const SideMenu = memo(() => {
  const navigate = useNavigate()
  const items: MenuItem[] = [
    {
      label: '工作台',
      key: '1',
      icon: <DesktopOutlined />
    },
    {
      label: '系统管理',
      key: '2',
      icon: <SettingOutlined />,
      children: [
        {
          label: '用户管理',
          key: '3',
          icon: <TeamOutlined />
        }
      ]
    }
  ]
  const handleClickLogo = () => {
    navigate('/')
  }
  return (
    <div>
      <div className={styles.logo} onClick={handleClickLogo}>
        <img className={styles.img}></img>
        <span>后台管理系统</span>
      </div>
      <Menu theme='dark' mode='inline' defaultSelectedKeys={['1']} items={items} />
    </div>
  )
})

export default SideMenu
