import React, { memo, useEffect } from 'react'
import { Descriptions, Card, Button } from 'antd'
import { useUserStore } from '@/store/user'
import styles from './index.module.scss'
import * as echarts from 'echarts'

const Dashboard = memo(() => {
  const userStore = useUserStore()
  useEffect(() => {
    const lineChartDom = document.getElementById('lineChart')
    const cahrtInstance = echarts.init(lineChartDom!)
    cahrtInstance.setOption({
      legend: {
        data: ['订单数', '流水']
      },
      xAxis: {
        type: 'category',
        data: [
          '2024-05-21',
          '2024-05-22',
          '2024-05-23',
          '2024-05-24',
          '2024-05-25',
          '2024-05-26',
          '2024-05-27'
        ]
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: '订单数',
          data: [150, 230, 224, 218, 135, 147, 260],
          type: 'line'
        },
        {
          name: '流水',
          data: [1500, 1111, 111, 222, 222, 2222, 2],
          type: 'line'
        }
      ]
    })
  }, [])
  return (
    <div className={styles.dashboard}>
      <div className={styles.userInfo}>
        <img
          src='https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
          alt=''
          className={styles.userAvatar}
        />
        <Descriptions title={`欢迎 ${userStore.userInfo.username}!`}>
          <Descriptions.Item label='用户id'>{userStore.userInfo.userId}</Descriptions.Item>
          <Descriptions.Item label='角色'>开发</Descriptions.Item>
          <Descriptions.Item label='部门'>研发部</Descriptions.Item>
        </Descriptions>
      </div>
      <div className={styles.report}>
        <div className={styles.card}>
          <div className={styles.title}>用户数量</div>
          <div className={styles.data}>100</div>
        </div>
        <div className={styles.card}>
          <div className={styles.title}>日活</div>
          <div className={styles.data}>20</div>
        </div>
        <div className={styles.card}>
          <div className={styles.title}>订单</div>
          <div className={styles.data}>39</div>
        </div>
        <div className={styles.card}>
          <div className={styles.title}>流水</div>
          <div className={styles.data}>100</div>
        </div>
      </div>
      <div className={styles.chart}>
        <Card title='近一周订单流水走势' extra={<Button type='primary'>刷新</Button>}>
          <div id='lineChart' className={styles.itemLine}></div>
        </Card>
      </div>
      {/* <div className={styles.chart}>
        <Card title='日活数量统计' extra={<Button type='primary'>刷新</Button>}></Card>
      </div>
      <div className={styles.chart}>
        <Card title='功能使用趋势' extra={<Button type='primary'>刷新</Button>}></Card>
      </div> */}
    </div>
  )
})

export default Dashboard
