<template>
  <div>
    <Input v-model="seekData" placeholder="Enter something..." size="large" >
      <Button slot="append" icon="ios-search" style="font-size:24px;margin: -7px 15px -7px -7px ;width:100px;height:40px;background-color: #57a3f3!important;color:#fff" @click="getMakeReport"></Button>
      <Button slot="append" icon="md-paw" style="font-size:24px;margin: -7px -7px;width:100px;height:40px;background-color: #57a3f3!important;color:#fff" @click="getMakeReport"></Button>
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
    }
  }
}
</script>

<style scoped>

</style>
