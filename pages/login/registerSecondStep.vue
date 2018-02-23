<template>
  <section class="container">
    <div class="login">
      <h2 class="login_join">Hi 欢迎加入</h2>
      <Form ref="formInline" :model="formInline" :rules="ruleInline">
        <FormItem prop="password">
          <Input type="text" v-model="formInline.password" placeholder="请输入密码">
            <Icon type="ios-person-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem prop="inviteCode">
          <Input type="text" v-model="formInline.inviteCode" placeholder="请输入邀请码">
            <Icon type="ios-locked-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <p class="login_tip">密码由6-20位英文字母和数字组成</p>
        <FormItem>
          <Button class="login_next" @click="handleRegister('formInline')">注册</Button>
        </FormItem>
      </Form>
    </div>
  </section>
</template>
<script>
import { Form, FormItem, Input, Icon } from 'iview'
import axios from '~/plugins/axios'
export default {
  components: {
    Form,
    FormItem,
    Input,
    Icon
  },
  data () {
    return {
      initialStatus: '点击获取验证码',
      formInline: {
        password: '',
        inviteCode: ''
      },
      ruleInline: {
        password: [
          { required: true, message: '请输入登录密码', trigger: 'blur' }
        ],
        inviteCode: [
          // { required: true, message: 'Please fill in the password.', trigger: 'blur' },
          // { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleRegister (name) {
      const { formInline } = this
      const password = formInline.password.trim()
      const inviteCode = formInline.inviteCode.trim()
      const mobile = localStorage.getItem('mobile')
      console.log(password, inviteCode, mobile)
      console.log(this.$refs)
      this.$refs[name].validate((valid) => {
        if (valid) {
          axios.post('/api/register', {
            mobile,
            password,
            inviteCode
          })
            .then((res) => {
              console.info('res', res)
              this.$Message.success('Success!')
              sessionStorage.setItem('token', res.data.token)
            })
            .catch((error) => {
              // error({ statusCode: 404, message: 'User not found' })
              console.info('error', error)
              sessionStorage.setItem('token', null)
            })
        } else {
          this.$Message.error('Fail!')
        }
      })
    }
  },
  mounted () {}
}
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  .login{
    background-color: white;
    padding: 0 0.2rem;
    overflow: hidden;
    text-align: center;
    .login_join{
      color: aqua;
      font-size: 0.16rem;
      line-height: 0.16rem;
      margin: 0.2rem 0;
    }
    .login_tip{
      color: #cececc;
      font-size: 0.12rem;
      text-align: left;
    }
    .login_next{
      width: 100%;
      font-size: 0.14rem;
      background-color: blue;
    }
  }
}
</style>