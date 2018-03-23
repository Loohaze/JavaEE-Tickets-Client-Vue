<template>
  <div class="flex_center" style="height: 90%">
    <el-card class="box-card">
      <el-input placeholder="请输入用户名" v-model="username">
        <template slot="prepend">用户名:</template>
      </el-input>

      <el-input type="password" placeholder="请输入密码" v-model="password">
        <template slot="prepend">密&#12288;码:</template>
      </el-input>
      <p></p>
      <el-button @click="onLogin" class="login-btn" type="primary" plain>登 录</el-button>
      <el-button @click="onUserRegister" class="login-btn" type="primary" plain>注册会员</el-button>
      <el-button @click="onVenueRegister" class="login-btn" type="primary" plain>注册场馆</el-button>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data() {
      return {
        username: this.$cookies.isKey('username') ? this.$cookies.get('username') : '',
        password: ''
      }
    },
    methods: {
      onLogin : function () {
        let data = {
          username : this.username,
          password : this.password,
          cookies : this.$cookies
        }
        this.$store.dispatch('user/onLogin',data)
          .then(
            () =>{
              console.log('Cookies ',this.$cookies.get('authorization'));
              this.$message({
                message : '登录成功',
                type : 'success'
              })
          })
          .catch(
            (response =>{
              if (response.status === 400) {
                let result = response.data
                if (result === 'password_error') {
                  this.$message.error('密码错误')
                }
              }
            })
          )
      },
      onUserRegister : function () {
        this.$router.push('user-register')
      },
      onVenueRegister : function () {
        this.$router.push('venue-register')
      }
    }
  }
</script>

<style lang="scss" scoped>
@import "../../assets/scss/general";
  .login-btn {
    width: auto;
  }
  .box-card {
   width: 35%;
   height: auto;
 }

</style>
