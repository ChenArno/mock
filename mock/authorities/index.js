const Mock = require('mockjs')

const data = Mock.mock({
  list: {
    'content|1-40': [
      {
        'id|+1': 1,
        'authorityName': '查询',
        'authorityCode': 'select',
        'authorityType|0-4': 0,
        createTime: '@datetime("yyyy-MM-dd HH:mm:ss")', // 创建日期
        'subAuthorities|1-20': {
          'id|+1': 1,
          'authorityName': '查询',
          'authorityCode': 'select',
          'authorityType|0-4': 0,
          createTime: '@datetime("yyyy-MM-dd HH:mm:ss")', // 创建日期
        }
      },
    ],
    'total|1-100': 1,
  },
  'detail': {
    "id|+1": 1,
    "parentId|0-100": 0,
    "parentName": "权限管理",
    "authorityName": "新增",
    "authorityCode": "create",
    "authorityType|0-4": 0,
    "productId": 0,
    "orderNum|0-100": 1
  }
})

module.exports = data
