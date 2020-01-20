<template>
  <div style="position: absolute;left: 30%;margin-top: 20px;background-color: #fff;width:680px;height:30px;">
    <Input v-model="seekData" placeholder="Enter something..." size="large" >
      <Button slot="append" icon="ios-search" style="font-size:24px;margin: -7px 15px -7px -7px ;width:60px;height:40px;background-color: #57a3f3!important;color:#fff" @click="getMakeReport"></Button>
      <Button slot="append" icon="md-paw" style="font-size:24px;margin: -7px -7px;width:60px;height:40px;background-color: #57a3f3!important;color:#fff" @click="getMakeReport"></Button>
    </Input>
  </div>
</template>

<script>
export default {
  name: 'seekBox',
  data () {
    return {
      seekData: ''
    }
  },
  methods: {
    getMakeReport () {
      console.log(this.seekData)
      // this.$router.push({ name: 'main' })
      // 先检查浏览器是否支持
      if (!('Notification' in window)) {
        alert('此浏览器不支持桌面通知')
      }

      // 检查用户是否同意接受通知
      else if (Notification.permission === 'granted') {
        // If it's okay let's create a notification
        let notification = new Notification('Hi there!')
      }

      // 否则我们需要向用户获取权限
      else if (Notification.permission !== 'denied') {
        Notification.requestPermission(function (permission) {
          // 如果用户同意，就可以向他们发送通知
          if (permission === 'granted') {
            let notification = new Notification('Hi there!')
          }
        })
      }
    }
  }
}
</script>

<style scoped>

</style>
