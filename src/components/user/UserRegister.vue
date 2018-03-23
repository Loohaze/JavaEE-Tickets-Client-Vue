<template>
  <div class="flex_center" style="height: 90%" >
    <el-card class="box-card">
      <el-input placeholder="请输入用户名" v-model="username">
        <template slot="prepend">用户名:</template>
      </el-input>

      <el-input placeholder="请输入邮箱" v-model="email">
        <template slot="prepend">邮&#12288;箱:</template>
      </el-input>

      <el-input type="password" placeholder="请输入密码" v-model="password">
        <template slot="prepend">密&#12288;码:</template>
      </el-input>
      <p></p>
      <el-button @click="onUserRegister" class="login-btn" type="primary" plain>注册</el-button>

    </el-card>
  </div>
</template>

<script>
  import {USER} from '../../api/apiurl'
  import {makePostRequest} from "../../api/request";

export default {
  name: 'user-register',
  data() {
    return {
      username : '',
      email: '',
      password: ''
    }
  },
  methods: {
    onUserRegister: function () {
      let data = {
        userName : this.username,
        userEmail: this.email,
        password: this.password
      }
      makePostRequest(
        USER.register,
        data,
        null,
        () => {
          this.$message({
            message: "注册成功,请登录邮箱验证！",
            type: 'success'
          })
          this.$router.push('/')
        },
        response => {
          if (response.status === 400) {
            let code = response.data
            console.log('Code ' ,code);
          }
        }
      )
    }
  }
}
</script>

<style>
  @import "../../assets/scss/general.scss";
  .box-card {
    width: 35%;
    height: auto;
  }
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
