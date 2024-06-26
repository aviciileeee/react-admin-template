import React, { useEffect, useState } from 'react'

import { Outlet } from 'react-router-dom'
import NavHeader from '@/components/NavHeader'
import NavFooter from '@/components/NavFooter'
import SideMenu from '@/components/SideMenu'
import { Layout, theme, Watermark } from 'antd'
import { getUserInfo } from '@/service/modules/user'
import { useUserStore } from '@/store/user'
import styles from './index.module.scss'
const { Header, Sider, Content } = Layout

const App: React.FC = () => {
  const userStore = useUserStore()
  useEffect(() => {
    const fetchData = async () => {
      const result = await getUserInfo()
      userStore.updateUserInfo(result)
    }
    fetchData()
  }, [])
  const [collapsed, setCollapsed] = useState(false)
  const {
    token: { colorBgContainer, borderRadiusLG }
  } = theme.useToken()

  return (
    <Watermark content={'fanfannet'}>
      <Layout className={styles.layout}>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <SideMenu />
        </Sider>
        <Layout>
          <Header style={{ padding: 0, background: colorBgContainer }}>
            <NavHeader />
          </Header>
          <Content className={styles.content}>
            <div className={styles.wrapper}>
              <Outlet />
            </div>
            <NavFooter />
          </Content>
        </Layout>
      </Layout>
    </Watermark>
  )
}

export default App
