<template>
  <Layout>
    <Header style="background-color: transparent;margin-top: 20px;">
      <seekBox></seekBox>
    </Header>
    <Content>
      <contents></contents>
    </Content>
    <Footer>
      <Button @click="butClick" icon="md-add" type="primary" style="width: 50%;font-size: 24px;height: 1.5em;"></Button>
    </Footer>
    <layerModal :modalData="modalData">
      <footerLayer ref="add" slot="add" :show="modalData.show"></footerLayer>
    </layerModal>
  </Layout>
</template>

<script>
export default {
  name: 'home',
  components: {
    seekBox: require('./Home/seekBox').default,
    contents: require('./Home/content').default,
    layerModal: require('../components/layerModal').default,
    footerLayer: require('./footer/footerLayer').default
  },
  data () {
    return {
      modalData: {
        width: 600,
        show: false,
        type: 'add',
        modalLoading: true,
        title: '新增分类',
        onOk: () => {},
        onCancel: () => {}
      }
    }
  },
  methods: {
    butClick () {
      Object.assign(this.modalData, {
        show: true,
        onOk: this.onOk
      })
    },
    onOk () {
      this.$refs.add.handleSubmit().then(res => {
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
