const Mock = require('mockjs')

const data = Mock.mock({
  list: {
    'content|1-40': [
      {
        'id|+1': 1,
        'companyName': '对方对方的',
        'companyCode': 'select',
        'companyShortName': 'sss',
        'englishName': 'ss',
        'contact': '@name',
        'contactPhone': '@phone',
        'companyStatus|0-4': 0,
        createTime: '@datetime("yyyy-MM-dd HH:mm:ss")', // 创建日期
      },
    ]
  },
  'detail': {
    "id|+1": 1,
    "companyName": "权限管理",
    "companyCode": "新增",
    'companyShortName': 'companyShortName',
    'englishName': 'englishName',
    "contact": "@name",
    "contactPhone": 'contactPhone',
    createTime: '@datetime("yyyy-MM-dd HH:mm:ss")', // 创建日期
  }
})

module.exports = data
