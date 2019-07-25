<template>
  <div class="home">
     <el-form label-width="100px">
     <el-row :gutter="20">
          <el-col :span="8">
             <el-form-item label="用户名">
               <el-input type="text" v-model="login.name"/>
             </el-form-item>
          </el-col>
          <el-col :span="8">
             <el-form-item label="密码">
                <el-input type="text" v-model="login.passWord"/>
             </el-form-item>
          </el-col>
     </el-row>
     </el-form>
    <el-button @click='goHome'>登陆</el-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({

})
export default class Login extends Vue {
  private login:any = {
    name:'',
    passWord:''
  }
  private goHome(){
    this.$router.push({
      path:'/home',
      query: {
                user: JSON.stringify(this.login)
            }
    })
  }
}
</script>
