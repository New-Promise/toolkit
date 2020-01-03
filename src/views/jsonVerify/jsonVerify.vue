<template>
  <div style="width: 100%;height:100%;position: relative;">
    <div style="width:45%;float: left;height: 100%;position:relative;">
      <JsonTool ref="JsonTool"></JsonTool>
    </div>
    <div style="width: 10%; height:100%; background-color: #000;float: left">
      <Button type="success" @click="onClick">Success</Button>
    </div>
    <div style="width:45%;float: left;height:100%;background-color: #f08047"></div>
  </div>
</template>

<script>
export default {
  name: 'jsonVerify',
  components: {
    JsonTool: require('./jsonTool/jsonTool').default
  },
  methods: {
    onClick () {
      console.log(this.$refs.JsonTool.getLine(2).split(''))
    }
  }
}
</script>

<style scoped>

</style>
