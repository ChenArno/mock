const Mock = require('mockjs')

const data = Mock.mock({
  list: {
    'content|1-40': [
      {
        'id|+1': 1,
        'productName': '查询',
        'productCode': 's',
        'productStatus|0-1': 0,
        createTime: '@datetime("yyyy-MM-dd HH:mm:ss")', // 创建日期
      },
    ],
    'total|1-100': 1,
  },
  'detail': {
    "id|+1": 1,
    "productName": "权限管理",
    "productStatus|0-1": 0,
    "productCode": "create",
    'companyId|0': 0,
    'companyName': 'sss',
    "parentId": 0,
    'productUrl': '@emial',
    createTime: '@datetime("yyyy-MM-dd HH:mm:ss")', // 创建日期
  }
})

module.exports = data
