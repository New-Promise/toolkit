<template>
  <div style="background-color: #ffffff;height: 100%;position:relative;">
    <div style="margin-top: 10px;">
      <img :src="logo" key="max-logo" style="width: 200px;height: 30px;" />
    </div>
    <seek></seek>
    <Menu
      :active-name="activeName"
      :theme="'light'"
      :open-names="openedNames"
      accordion
      @on-select="handleSelect"
      style="text-align: left;position: absolute;bottom: 0;top:90px;overflow: auto;user-select:none;">
      <template v-for="(item, index) in menuData" v-if="!item.meta.hideInMenu">
        <Submenu :name="item.name" v-if="item.children && item.children.length">
          <template slot="title">
            <Icon :type="item.meta.icon" />
            {{item.meta.title}}
          </template>
          <MenuItem :name="item.name" v-for="(item, index) in item.children" :key="index"  v-if="!item.meta.hideInMenu">
            <Icon :type="item.meta.icon" />
            {{item.meta.title}}
          </MenuItem>
        </Submenu>
        <MenuItem :name="item.name" v-else>
          <Icon :type="item.meta.icon" />
          {{item.meta.title}}
        </MenuItem>
      </template>
    </Menu>
  </div>
</template>

<script>
import logo from '$a/logo.png'
export default {
  name: 'siderMenu',
  components: {
    seek: require('./seekBox/seek').default
  },
  props: {
    activeName: {
      type: String,
      default: 'fileCompare'
    },
    openNames: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      logo,
      openedNames: ['main'],
      menuData: []
    }
  },
  methods: {
    handleSelect (route) {
      let { name, params, query } = {}
      if (typeof route === 'string') name = route
      else {
        name = route.name
        params = route.params
        query = route.query
      }
      if (name.indexOf('isTurnByHref_') > -1) {
        window.open(name.split('_')[1])
        return
      }
      this.$router.push({
        name,
        params,
        query
      })
    }
  },
  created () {
    console.log(this.menuData)
    Object.assign(this.menuData, this.$router.options.routes)
  }
}
</script>

<style>
  .ivu-select-dropdown{
    z-index: 99999 !important;
  }
</style>
