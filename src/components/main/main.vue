<template>
  <Layout style="height: 100%;width:100%;overflow: hidden;" class="main" :class="isIe9 ? 'mainIe' : ''">
    <Sider hide-trigger :style="{background: '#fff', width: '240px', maxWidth: '240px', flex: '0 0 240px'}">
      <siderMenu></siderMenu>
    </Sider>
    <Layout>
      <Header style="background-color: #ffffff">Header</Header>
      <Content style="padding: 10px;">
        <div style="width:100%;height: 100%;position: relative;">
          <router-view/>
        </div>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  </Layout>
</template>

<script>
import siderMenu from './siderMenu/siderMenu'
export default {
  name: 'main.vue',
  data () {
    return {
      isIe9: (this.$isIe === 'ie 9')
    }
  },
  components: {
    siderMenu
  }
}
</script>

<style lang="less">
  .main {
    .logo-con {
      cursor: pointer;
      img{
        margin: 0;
      }
    }
  }
  .mainIe{
    position: relative;
    height: 100%;
    .left-siderIe{
      height: 100%;
      background: #001529;
    }
    .right-contentIe{
      position: absolute;
      left: 265px;
      right: 0;
      top: 0;
      height: 100%;
    }
    .right-contentIe-close{
      left: 65px;
    }
  }
</style>
