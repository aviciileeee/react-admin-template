import React, { memo, useEffect, useState } from 'react'
import { Button, Form, Table, Input, Select, Space } from 'antd'
import { User } from '@/types/api'
import { getPagingUserList } from '@/service/modules/user'
import { formatDate } from '@/utils'
import type { TableColumnsType } from 'antd'
const UserList = memo(() => {
  const [data, setData] = useState<User.UserItem[]>([])
  const [form] = Form.useForm()
  const [total, setTotal] = useState(0)
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 5
  })
  const handleGetUserList = async () => {
    const result = await getPagingUserList(
      pagination.current,
      pagination.pageSize,
      form.getFieldsValue()
    )
    setData(result.list)
    setTotal(result.total)
    setPagination({
      current: result.pageNum,
      pageSize: result.pageSize
    })
  }

  const handleSearch = () => {
    if (pagination.current === 1) {
      handleGetUserList()
    } else {
      setPagination({
        current: 1,
        pageSize: pagination.pageSize
      })
    }
  }

  const handleReset = () => {
    form.resetFields
  }

  useEffect(() => {
    handleGetUserList()
  }, [pagination.current, pagination.pageSize])

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
      <Form className='search-form' form={form} layout='inline' initialValues={{ state: 0 }}>
        <Form.Item label='用户id' name='userId'>
          <Input placeholder='请输入用户id' />
        </Form.Item>
        <Form.Item label='用户名称' name='username'>
          <Input placeholder='请输入用户名称' />
        </Form.Item>
        <Form.Item label='状态' name='state'>
          <Select>
            <Select.Option key={0} value={0}>
              所有
            </Select.Option>
            <Select.Option key={1} value={1}>
              在职
            </Select.Option>
            <Select.Option key={2} value={2}>
              试用期
            </Select.Option>
            <Select.Option key={3} value={3}>
              离职
            </Select.Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Space>
            <Button type='primary' onClick={handleSearch}>
              搜索
            </Button>
            <Button onClick={handleReset}>重置</Button>
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
        <Table
          bordered
          rowSelection={{ type: 'checkbox' }}
          rowKey={'id'}
          dataSource={data}
          columns={columns}
          pagination={{
            total: total,
            current: pagination.current,
            pageSize: pagination.pageSize,
            position: ['bottomRight'],
            onChange: (pageNum, pageSize) =>
              setPagination({
                current: pageNum,
                pageSize: pageSize
              }),
            showTotal: () => {
              return `总共${total}条`
            }
          }}
        />
      </div>
    </div>
  )
})

export default UserList
