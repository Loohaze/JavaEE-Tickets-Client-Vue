<template>
  <div class="flex_center" style="height: 90%">
    <el-card class="box-card">
      <p></p>
    </el-card>
  </div>
</template>

<script>

  import {USER} from "../../api/apiurl";
  import {makeGetRequest} from "../../api/request";

  export default {
    name: 'verify-email',
    data() {
      return {}
    },
    created() {
      let data = {
        userName: this.$route.params.username,
        token: this.$route.params.token
      }
      makeGetRequest(
        '/user/verifyEmail?username=' + data.userName + '&token=' + data.token,
        data,
        null,
        () => {
          this.$message({
            message: "验证成功",
            type: 'success'
          })
          this.$router.push('/')
        },
        response => {
          if (response.status === 400) {
            let code = response.data
            this.$message.error('验证失败')
          }
        }
      )
    }


  }

</script>

<style>
  @import "../../assets/scss/general.scss";

  .login-btn {
    width: auto;
  }

  .box-card {
    width: 35%;
    height: auto;
  }

</style>
