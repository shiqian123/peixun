<template>
  <div class="home">
    <el-button @click="goHome"></el-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({

})
export default class Login extends Vue {
  private goHome(){
    this.$router.push({
      path:'/',
    })
  }
}
</script>
