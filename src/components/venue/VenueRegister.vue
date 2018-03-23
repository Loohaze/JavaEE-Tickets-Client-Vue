<template>
  <div class="flex_center" style="height: 90%">
    <el-card class="box-card">
      <el-input placeholder="请输入场馆名称" v-model="venueName">
        <template slot="prepend">场馆名称:</template>
      </el-input>


      <el-select v-model="location" placeholder="请选择地理位置">

        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>

      <el-input placeholder="请输入座位数量" v-model="seatsNum">
        <template slot="prepend">座位数量:</template>
      </el-input>
      <p></p>
      <el-button @click="onVenueRegister" class="login-btn" type="primary" plain>注册</el-button>

    </el-card>
  </div>
</template>

<script>

  export default {
    name: 'venue-register',
    data() {
      return {
        venueName:'',
        location:'',
        seatsNum:''
      }
    },
    methods:{
      onVenueRegister: function () {

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
</style>
