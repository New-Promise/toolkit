<template>
  <Form :label-width="0" :model="formValidate" :rules="ruleValidate" ref="form" >
    <table class="infoTb">
      <thead>
      <th>文件类型</th>
      <th>文件份数</th>
      <th>文件编号</th>
      <th>机关名称</th>
      <th>摘要信息</th>
      </thead>
      <tr>
        <td>
          <FormItem>
            <Input clearable></Input>
          </FormItem>
        </td>
        <td>
          <FormItem>
            <Input clearable></Input>
          </FormItem>
        </td>
        <td>
          <FormItem>
            <Input clearable></Input>
          </FormItem>
        </td>
        <td>
          <FormItem>
            <Input clearable></Input>
          </FormItem>
        </td>
        <td>
          <FormItem>
            <Input clearable></Input>
          </FormItem>
        </td>
      </tr>
    </table>
  </Form>
</template>

<script>
export default {
  name: 'testTable',
  data () {
    return {
      formValidate: {},
      ruleValidate: {}
    }
  }
}
</script>

<style>
  .infoTb {
    border: 1px solid #666;
    border-collapse: collapse;
    width: 100%;
  }
  .infoTb th {
    padding: 5px;
    height: 36px;
    line-height: 36px;
    border: 1px solid #666;
  }
  .infoTb td {
    padding-left: 10px;
    height: 36px;
    line-height: 36px;
    border: 1px solid #666;
  }
</style>
