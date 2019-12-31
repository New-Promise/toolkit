<template>
  <Modal
    v-model="modalData.show"
    :title="modalData.title"
    @on-ok="modalData.onOk"
    :loading="modalData.modalLoading"
    :width="modalData.width"
    @on-cancel="modalData.onCancel">
    <div slot="header" v-if="header"><slot :name="header"></slot></div>
    <slot :name="modalData.type" :flag="modalData.show" :type="'black'"></slot>
    <div slot="footer" v-if="footer"><slot :name="footer"></slot></div>
  </Modal>
</template>

<script>
export default {
  name: 'layerModal',
  props: {
    header: {
      type: String
    },
    footer: {
      type: String
    },
    modalData: {
      type: Object,
      default: () => {
        return {
          width: 600,
          show: false,
          type: 'add',
          modalLoading: true,
          title: '新增',
          onOk: () => {},
          onCancel: () => {}
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
