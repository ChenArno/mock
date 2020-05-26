const Mock = require('mockjs')

const data = Mock.mock({
  list: {
    'content|1-40': [
      {
        'id|+1': 1,
        'roleName': '查询',
        'roleCode|0-1': 0,
        'roleStatus|0-1': 0,
        createTime: '@datetime("yyyy-MM-dd HH:mm:ss")', // 创建日期
      },
    ],
    'total|1-100': 1,
  },
  'detail': {
    "id|+1": 1,
    "roleName": 'sss',
    'roleCode': 's',
    "departmentId|0-100": 0,
    "departmentName": "新增",
    'companyId|0-100': 0,
    'companyName': 'ss',
    createTime: '@datetime("yyyy-MM-dd HH:mm:ss")', // 创建日期
  }
})

module.exports = data
