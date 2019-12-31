<template>
  <Form ref="formInline" :model="formData" :rules="ruleForm" :label-width="100">
    <FormItem prop="title" label="名称">
      <Input v-model="formData.title" placeholder="Enter something..."/>
    </FormItem>
    <FormItem prop="toolUrl" label="链接">
      <Input v-model="formData.toolUrl" placeholder="Enter something..."/>
    </FormItem>
    <FormItem prop="formDescribe" label="描述">
      <Input :rows="3" type="textarea" v-model="formData.formDescribe" placeholder="Enter something..." />
    </FormItem>
  </Form>
</template>

<script>
export default {
  name: 'addTool',
  props: {
    show: {
      type: Boolean
    }
  },
  data () {
    return {
      formData: {
        title: '',
        formDescribe: '',
        toolUrl: ''
      },
      ruleForm: {
        'title': [
          { required: true, message: '请输入宣传名称', trigger: 'blur' }
        ],
        'toolUrl': [
          { required: true, message: '请输入宣传名称', trigger: 'blur' }
        ]
      }
    }
  },
  watch: {
    show () {
      if (!this.show) this.$refs.formInline.resetFields()
    }
  },
  methods: {
    handleSubmit () {
      return new Promise((resolve, reject) => {
        this.$refs.formInline.validate((valid) => {
          console.log(valid)
          if (valid) {
            resolve(this.formData)
          } else {
            reject('数据格式错误')
          }
        })
      })
    }
  }
}
</script>

<style scoped>

</style>
