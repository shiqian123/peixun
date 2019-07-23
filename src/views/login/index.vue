<template>
  <div class="home">
    <el-button @click="goHome">登陆</el-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({

})
export default class Login extends Vue {
  private goHome(){
    this.$router.push({
      path:'/home',
    })
  }
}
</script>
