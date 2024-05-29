import React, { memo, useEffect, useState } from 'react'
import { Button, Form, Table, Input, Select, Space } from 'antd'
import { User } from '@/types/api'
import { getUserList } from '@/service/modules/user'
import { formatDate } from '@/utils'
import type { TableColumnsType } from 'antd'
const UserList = memo(() => {
  const [data, setData] = useState<User.UserItem[]>([])
  const handleGetUserList = async () => {
    const result = await getUserList()
    setData(result.list)
  }
  useEffect(() => {
    handleGetUserList()
  }, [])

  const columns: TableColumnsType<User.UserItem> = [
    {
      title: '用户id',
      dataIndex: 'id',
      key: 'id'
    },
    {
      title: '用户名称',
      dataIndex: 'userName',
      key: 'userName'
    },
    {
      title: '用户邮箱',
      dataIndex: 'email',
      key: 'email'
    },
    {
      title: '用户角色',
      dataIndex: 'role',
      key: 'role'
    },
    {
      title: '用户状态',
      dataIndex: 'state',
      key: 'state',
      render(state: number) {
        return {
          0: '所有',
          1: '在职',
          2: '试用期',
          3: '离职'
        }[state]
      }
    },
    {
      title: '注册时间',
      dataIndex: 'registerTime',
      key: 'registerTime',
      render(record: Date) {
        return formatDate(record)
      }
    },
    {
      title: '操作',
      render() {
        return (
          <Space>
            <Button type='text'>编辑</Button>
            <Button type='text' danger>
              删除
            </Button>
          </Space>
        )
      }
    }
  ]
  return (
    <div className='user-list'>
      <Form className='search-form' layout='inline' initialValues={{ state: 0 }}>
        <Form.Item label='用户id' name='userId'>
          <Input placeholder='请输入用户id' />
        </Form.Item>
        <Form.Item label='用户名称' name='username'>
          <Input placeholder='请输入用户名称' />
        </Form.Item>
        <Form.Item label='状态' name='state'>
          <Select>
            <Select.Option value={0}>所有</Select.Option>
            <Select.Option value={1}>在职</Select.Option>
            <Select.Option value={2}>试用期</Select.Option>
            <Select.Option value={3}>离职</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Space>
            <Button type='primary'>搜索</Button>
            <Button>重置</Button>
          </Space>
        </Form.Item>
      </Form>
      <div className='base-table'>
        <div className='header-wrapper'>
          <div className='title'>用户列表</div>
          <div className='action'>
            <Space>
              <Button type='primary'>新增</Button>
              <Button type='primary' danger>
                批量删除
              </Button>
            </Space>
          </div>
        </div>
        <Table bordered rowSelection={{ type: 'checkbox' }} dataSource={data} columns={columns} />;
      </div>
    </div>
  )
})

export default UserList
