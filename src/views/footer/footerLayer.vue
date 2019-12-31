<template>
  <div>
    <Form ref="formInline" :model="formData" :rules="ruleForm" :label-width="100">
      <FormItem prop="title" label="分类名称">
        <Input v-model="formData.title" placeholder="Enter something..."/>
      </FormItem>
      <FormItem prop="describe" label="描述">
        <Input :rows="3" type="textarea" v-model="formData.formDescribe" placeholder="Enter something..." />
      </FormItem>
    </Form>
  </div>
</template>

<script>
export default {
  name: 'footerLayer',
  props: {
    show: {
      type: Boolean
    }
  },
  data () {
    return {
      formData: {
        title: '',
        formDescribe: ''
      },
      ruleForm: {
        'title': [
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
