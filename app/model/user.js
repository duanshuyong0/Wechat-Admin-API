module.exports = app => {
  const mongoose = app.mongoose
  const UserSchema = new mongoose.Schema({
    username: { type: String, unique: true, required: true }, //帐号,
    password: { type: String, required: true }, //密码
    realname: { type: String , default:''}, //真名姓名
    role: { type: mongoose.Schema.Types.ObjectId, ref: 'Role' }, //权限
    phone: { type: String , default:'' },  //手机号码
    email: { type: String , default:'' }, //邮箱
    sex: { type: Number , default:0 }, //性别(0:男,1:女)
    locked: { type: Number,default: 0 }, //(0:正常,1:锁定)
    avatar: { type: String , default:'' }, //头像
    ctime: { type: Date, default: Date.now } //创建时间
  })
  return mongoose.model('User', UserSchema)
}
