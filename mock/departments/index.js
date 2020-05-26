const Mock = require('mockjs')

const data = Mock.mock({
  list: {
    'content|1-40': [
      {
        'id|+1': 1,
        'departmentName': '查询',
        'departmentStatus|0-4': 0,
        createTime: '@datetime("yyyy-MM-dd HH:mm:ss")', // 创建日期
        'subDepartment|1-20': {
          'id|+1': 1,
          'departmentName': '查询',
          'departmentStatus|0-4': 0,
          createTime: '@datetime("yyyy-MM-dd HH:mm:ss")', // 创建日期
        }
      },
    ],
    'total|1-100': 1,
  },
  'detail': {
    "id|+1": 1,
    "parentId|0-100": 0,
    'parentName': 'ss',
    "department": "权限管理",
    "departmentStatus|0-1": 0,
    "orderNum|0-100": 1,
    createTime: '@datetime("yyyy-MM-dd HH:mm:ss")', // 创建日期
  }
})

module.exports = data
