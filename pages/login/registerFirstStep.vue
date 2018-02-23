<template>
  <section class="container">
    <div class="login">
      <h2 class="login_join">Hi 欢迎加入</h2>
      <Form ref="formInline" :model="formInline" :rules="ruleInline">
        <FormItem prop="mobile">
          <Input type="text" v-model="formInline.mobile" placeholder="手机号">
            <Icon type="ios-person-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem prop="code">
          <Input type="text" v-model="formInline.code" placeholder="验证码">
            <Icon type="ios-locked-outline" slot="prepend"></Icon>
            <span slot="append" @click="sendCode">{{initialStatus}}</span>
          </Input>
        </FormItem>
        <p class="login_tip">密码由6-20位英文字母和数字组成</p>
        <FormItem>
          <Button class="login_next" @click="handleNextStep('formInline')">下一步</Button>
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
      code: '',
      msg: '',
      initialStatus: '点击获取验证码',
      formInline: {
        mobile: '',
        code: ''
      },
      ruleInline: {
        mobile: [
          { required: true, message: '请输入手机号码', trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' }
          // { type: 'string', min: 6, message: '验证码输入错误', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    sendCode () {
      const { formInline } = this
      const mobile = formInline.mobile.trim()
      if (mobile) {
        console.info(mobile)
        axios.post('/api/sendCode', {
          mobile
        })
          .then((res) => {
            console.info('res', res)
            return {
              code: res.data.code,
              msg: res.data.msg
            }
          })
          .catch((error) => {
            // error({ statusCode: 404, message: 'User not found' })
            console.info('error', error)
          })
      }
    },
    handleNextStep (name) {
      const { formInline } = this
      const mobile = formInline.mobile.trim()
      const code = formInline.code.trim()
      this.$refs[name].validate((valid) => {
        if (valid) {
          axios.get('/api/nextStep', {
            params: {
              mobile,
              code
            }
          })
            .then((res) => {
              console.info('res', res)
              localStorage.setItem('mobile', mobile)
              this.$router.push({path: '/login/registerSecondStep'})
            })
            .catch((error) => {
              // error({ statusCode: 404, message: 'User not found' })
              console.info('error', error)
            })
          this.$Message.success('Success!')
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