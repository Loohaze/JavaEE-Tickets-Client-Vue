<template>
  <div>
    <ul v-if="posts && posts.length">
    <li v-for="data in posts">
      <p><strong>{{data.userName}}</strong></p>
      <p>{{post.userEmail}}</p>
    </li>
  </ul>

    <ul v-if="errors && errors.length">
      <li v-for="error in errors">
        {{error.message}}
      </li>
    </ul>
  </div>

</template>

<script>
  import axios from 'axios';

  export default {
    name:'test',
    data() {
      return {
        posts: [],
        errors: []
      }
    },

    // Fetches posts when the component is created.
    created() {
      http.get('/user/loohaze')
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
