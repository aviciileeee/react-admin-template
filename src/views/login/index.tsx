import React, { memo } from 'react'
import { Form, Button, Input } from 'antd'
import styles from './index.module.scss'
import { login } from '@/service/modules/user'
import { Login } from '@/types/api'
import { App } from 'antd'
import { useUserStore } from '@/store/user'

// import
const LoginFc = memo(() => {
  const userStore = useUserStore()
  const { message } = App.useApp()
  const onFinished = async (values: Login.params) => {
    const data = await login(values)
    userStore.updateToken(data.data)
    message.success('登录成功')
    const params = new URLSearchParams(location.search)
    location.href = params.get('callback') || '/'
  }
  return (
    <div className={styles.login}>
      <div className={styles['login-wrapper']}>
        <div className={styles.title}>系统登录</div>
        <Form name='login' wrapperCol={{ span: 24 }} onFinish={onFinished} autoComplete='off'>
          <Form.Item<Login.params> name='username'>
            <Input placeholder='用户名' />
          </Form.Item>
          <Form.Item<Login.params> name='password'>
            <Input.Password placeholder='密码' />
          </Form.Item>
          <Form.Item>
            <Button block type='primary' htmlType='submit'>
              登 录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
})

export default LoginFc
