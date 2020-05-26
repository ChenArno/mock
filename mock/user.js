const Mock = require('mockjs')

const data = Mock.mock({
  'list|1-10': [
    {
      'id|+1': 1,
      'user_id|100-200': 1,
      'status|1': true, // 状态
      avatarUrl: "@image('150x150', '#4A7BF7', 'img', 'png', 'Tiger')", // 头像
      'birthday|140034234-14220323': 1,
      'checkDate|140034234-14220323': 1,
      'createTime|140034234-14220323': 1,
      creator: '@cname', // 名称
      userName: '@cname',
      'userCode|1-4': 'a',
      'userAccount|1-4': 'a',
      email: '@email',
      'gender|0-1': 1,
      handphone: 1,
      'isActive|0-1': 1,
    },
  ],
  queryById: {
    avatarUrl: "@image('150x150', '#4A7BF7', 'img', 'png', 'Tiger')", // 头像
    email: '@email',
    'gender|0-1': 1,
    'userAccount|1-4': 'a',
    userName: '@cname',
    'id|+1': 1,
    userRoles: [
      {
        'id|+1': 1,
        roleName: '@cname',
        roleType: 1,
      },
    ],
  },
})

module.exports = data
