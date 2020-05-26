const Mock = require('mockjs')

const data = Mock.mock({
  list: {
    'content|1-40': [
      {
        'id|+1': 1,
        'userName': '@name',
        'userStatus|0-1': 0,
        'roleName': 'sss',
        'departmentId|0-100': 0,
        'departmentName': 'sss',
        'gender|0-1': 0,
        'phone': '@phone',
        createTime: '@datetime("yyyy-MM-dd HH:mm:ss")', // 创建日期
      },
    ],
    'total|1-100': 1,
  },
  'detail': {
    "id|+1": 1,
    "loginid": 'sss',
    'name': '@name',
    'phone': '@phone',
    "gender|0-1": 0,
    'userStatus|-1-1': -1,
    "email": "@email",
    'idType|0-1': 0,
    'idNumber': '4534534543543',
    'userNumber': 'ss',
    nation: 'sss'
  }
})

module.exports = data
