<template>
  <div style="text-align: center">
    <Col v-for="(item, index) in iconData" :key="index" style="margin:30px;width: 1020px;display: inline-block;box-shadow:0 0 5px #607D8B;border-radius: 10px;">
      <Card>
        <p slot="title" class="title">
          <span>{{item.title}}</span>
          <Button type="primary" @click="addToolFn" shape="circle" icon="md-add" style="float: right;margin-right: 10px;">
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
export default {
  name: 'contentBox',
  components: {
    layerModal: require('../../components/layerModal').default,
    addTool: require('./layerModal/addTool').default,
    textContrast: require('./layerModal/textContrast').default
  },
  data () {
    return {
      iconData: [
        {
          title: 'API',
          children: [
            {
              title: '百度',
              icon: 'https://www.baidu.com/favicon.ico',
              describe: '我也不知道说点啥,这里就放简单的描述吧',
              toolUrl: 'https://www.baidu.com',
              type: '0' // type 为 0 表示 此书签为 跳转链接, 为 1 表示 为小工具
            },
            {
              icon: 'https://res.wx.qq.com/a/wx_fed/assets/res/NTI4MWU5.ico',
              title: '微信支付',
              describe: '莫得描述',
              toolUrl: 'https://www.baidu.com',
              type: '0' // type 为 0 表示 此书签为 跳转链接, 为 1 表示 为小工具
            },
            {
              icon: 'https://www.elastic.co/favicon.ico',
              title: 'elastic',
              describe: '我也不知道说点啥,这里就放简单的描述吧',
              toolUrl: 'https://www.baidu.com',
              type: '0' // type 为 0 表示 此书签为 跳转链接, 为 1 表示 为小工具
            },
            {
              title: 'ØMQ - The Guide - ØMQ - The Guide',
              icon: 'http://zguide.zeromq.org/local--favicon/favicon.gif',
              describe: '我也不知道说点啥,这里就放简单的描述吧',
              toolUrl: 'https://www.baidu.com',
              type: '0' // type 为 0 表示 此书签为 跳转链接, 为 1 表示 为小工具
            }
          ]
        },
        {
          title: '工具集',
          children: [
            {
              title: 'JSON在线解析及格式化验证',
              icon: 'https://www.json.cn/favicon.ico',
              describe: 'JSON在线解析及格式化验证 - JSON.cn',
              toolUrl: 'https://www.baidu.com',
              type: '1' // type 为 0 表示 此书签为 跳转链接, 为 1 表示 为小工具
            },
            {
              title: '文本对比工具',
              icon: '',
              describe: '文本对比工具',
              toolUrl: 'https://www.baidu.com',
              type: '1' // type 为 0 表示 此书签为 跳转链接, 为 1 表示 为小工具
            },
            {
              icon: 'http://www.kjson.com/favicon.png',
              title: 'UUID在线生成 - 在线JSON校验格式化工具(K JSON)',
              describe: 'UUID在线生成 - 在线JSON校验格式化工具(K JSON)',
              toolUrl: 'https://www.baidu.com',
              type: '1' // type 为 0 表示 此书签为 跳转链接, 为 1 表示 为小工具
            },
            {
              icon: 'https://tool.lu/favicon.ico',
              title: '时间戳(Unix timestamp)转换工具 - 在线工具',
              describe: '时间戳(Unix timestamp)转换工具 - 在线工具',
              toolUrl: 'https://www.baidu.com',
              type: '1' // type 为 0 表示 此书签为 跳转链接, 为 1 表示 为小工具
            },
            {
              icon: '',
              title: '正则表达式',
              describe: '正则表达式在线验证',
              type: '1', // type 为 0 表示 此书签为 跳转链接, 为 1 表示 为小工具
              toolUrl: 'https://www.baidu.com'
            }
          ]
        }
      ],
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
      if (item.type === '1') {
        Object.assign(this.modalData, {
          show: true,
          width: 1020,
          type: 'textContrast',
          title: item.title,
          onOk: this.onOk
        })
      } else {
        window.open(item.toolUrl, '_blank')
      }
    },
    onOk () {
      this.modalData.modalLoading = false
      this.modalData.show = false
    },
    addToolFn () {
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
