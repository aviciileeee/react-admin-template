import React, { memo } from 'react'
import { Form, Button, Input } from 'antd'
import styles from './index.module.scss'

type FiledType = {
  username?: string
  password?: string
}

// import
const Login = memo(() => {
  const onFinished = (values: FiledType) => {
    console.log('submit', values)
  }
  return (
    <div className={styles.login}>
      <div className={styles['login-wrapper']}>
        <div className={styles.title}>系统登录</div>
        <Form name='login' wrapperCol={{ span: 24 }} onFinish={onFinished} autoComplete='off'>
          <Form.Item<FiledType> name='username'>
            <Input />
          </Form.Item>
          <Form.Item<FiledType> name='password'>
            <Input.Password />
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

export default Login
