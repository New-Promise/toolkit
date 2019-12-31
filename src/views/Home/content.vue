<template>
  <div style="text-align: center">
    <Col v-for="(item, index) in iconData" :key="index" style="margin:30px;width: 1020px;display: inline-block;box-shadow:0 0 5px #607D8B;border-radius: 10px;">
      <Card>
        <p slot="title" class="title">
          <span>{{item.title}}</span>
          <Button type="dashed" ghost @click="addToolFn" icon="md-add" style="float: right;margin-right: 10px;color:#2c3e50;">
          </Button>
        </p>
        <ul class="mainBox">
          <li class="li" v-for="(item, index) in item.children" :key="index" :title="item.describe" @click="onClick(item)">
            <div v-if="item.icon" class="iconBg" :style="`background: url('${item.icon}') no-repeat; background-position: center;`"></div>
            <div v-if="!item.icon" class="iconBg" style="font-size: 40px;line-height: 64px;font-weight: 600;">{{item.title.slice(0, 1)}}</div>
            <span class="iconTitle">{{item.title}}</span>
          </li>
        </ul>
      </Card>
    </Col>
    <layerModal :modalData="modalData">
      <addTool ref="addTool" slot="addTool" :show="modalData.show" v-if="modalData.type === 'addTool'"></addTool>
      <textContrast ref="textContrast" slot="textContrast" :show="modalData.show"  v-if="modalData.type === 'textContrast'"></textContrast>
    </layerModal>
  </div>
</template>

<script>
import Json from './layerModal/mockJson'
export default {
  name: 'contentBox',
  components: {
    layerModal: require('$c/layerModal').default,
    addTool: require('./layerModal/addTool').default,
    textContrast: require('./layerModal/textContrast').default
  },
  data () {
    return {
      iconData: Json,
      modalData: {
        width: 600,
        show: false,
        type: 'add',
        modalLoading: true,
        title: '新增',
        onOk: () => {},
        onCancel: () => {}
      }
    }
  },
  methods: {
    onClick (item) {
      console.log(item)
      if (item.type === '1') { // 工具图标按钮事件
        // Object.assign(this.modalData, {
        //   show: true,
        //   width: 1020,
        //   type: 'textContrast',
        //   title: item.title,
        //   onOk: this.onOk
        // })
        this.$router.push({ name: 'fileCompare' })
      } else {
        window.open(item.toolUrl, '_blank')
      }
    },
    onOk () {
      this.modalData.modalLoading = false
      this.modalData.show = false
    },
    addToolFn () { // 添加工具按钮事件
      Object.assign(this.modalData, {
        show: true,
        type: 'addTool',
        title: '添加',
        width: 600,
        onOk: this.addToolClick
      })
    },
    addToolClick () {
      console.log(this.$refs.addTool)
      this.$refs.addTool.handleSubmit().then(res => {
        setTimeout(() => {
          this.modalData.modalLoading = false
          this.modalData.show = false
        }, 2000)
      }).catch(() => {
        this.modalData.modalLoading = false
      })
    }
  }
}
</script>

<style scoped>
  li{
    list-style:none;
  }
  .title{
    text-align: left;
    font-weight: 600;
    height: 35px;
    line-height: 35px;
  }
  .mainBox{
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
  .li{
    width: 64px;
    height: 80px;
    margin: 5px;
  }
  .iconBg{
    width: 64px;
    height:64px;
    background-size: 100% 100%;
    box-shadow:0 0 5px #607D8B;
    border-radius: 5px;
    background-color: transparent;
    cursor: pointer;
  }
  .iconTitle{
    display: inline-block;
    text-align: center;
    overflow: hidden;
    text-overflow:ellipsis;
    width: 64px;
    height: 24px;
    line-height: 24px;
  }
</style>
