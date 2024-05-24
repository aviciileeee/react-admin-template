import React, { memo } from 'react'
import { Spin } from 'antd'
import './loading.scss'
const loading = memo(({ tip = 'loading' }: { tip?: string }) => {
  return <Spin tip={tip} fullscreen={true} size='large' className='request-loading' />
})

export default loading
