const mongoose = require('mongoose')
const Scheme = mongoose.Schema

mongoose.connect('mongodb://localhost/user')

mongoose.set('useFindAndModify', false)

const userScheme = new Scheme({
    //邮箱账号
    email: {
        type: String,
        required: true
    },
    //密码
    psd: {
        type: String,
        required: true
    },
    //昵称
    name: {
        type: String,
        required: true
    },
    //头像
    head: {
        type: String,
        default: '/public/img/head.png'
    },
    //自我介绍
    introduce: {
        type: String,
        default: ''
    },
    //性别
    gender: {
        type: Number,
        //-1为保密   0 为男  1为女
        default: -1
    },
    //账号状态
    status: {
        type: Number,
        //0为账号正常    1为不能评论   2为无法登陆，被封号了
        default: 0
    },
    //注册时间
    register_time: {
        type: String,
        required: true
    },
    //最后一次修改账号信息时间
    last_modifyTime: {
        type: String,
        required: true
    },
    //收藏的话题文章id
    collections: {
        type: Array,
        default: [
            {
                dir_name: '默认文件夹',
                topics_list: []
            }
        ]
    },
    //关注的用户
    watch: {
        type: Array,
        default: []
    }
})

module.exports = mongoose.model('User', userScheme)


// user =  mongoose.model('User', userScheme)
// user.find({
//     name: 'Lpyexplore'
// }, (err, data) => {
//     if(err) {
//         console.log('查询失败')
//     }
//     else {
//         console.log('查询成功')
//         console.log(data)
//
//
//     }
// })



// user.findOneAndUpdate({
//     email: '1316219891@qq.com'
// },{
//     $set: {
//         name: '测试管理员'
//     }
// }, {}, (err, data) => {
//     console.log(data)
// })

