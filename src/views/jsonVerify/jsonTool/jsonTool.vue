<template>
  <div class="json-editor">
    <textarea ref="textarea"/>
  </div>
</template>


<script>
import CodeMirror from 'codemirror'
import 'codemirror/addon/lint/lint.css'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/ayu-mirage.css'
// require('script-loader!jsonlint')
import 'codemirror/mode/javascript/javascript'
// import 'codemirror/addon/lint/lint'
import 'codemirror/addon/lint/json-lint'
export default {
  name: 'jsonTool',
  data () {
    return {
      jsonEditor: false,
      value: []
    }
  },
  // watch: {
  //   value (value) {
  //     const editor_value = this.jsonEditor.getValue()
  //     if (value !== editor_value) {
  //       this.jsonEditor.setValue(JSON.stringify(this.value, null, 2))
  //     }
  //   }
  // },
  mounted () {
    this.jsonEditor = CodeMirror.fromTextArea(this.$refs.textarea, {
      lineNumbers: true,
      styleActiveLine: true,
      matchBrackets: true,
      indentWithTabs: true,
      autofocus: true,
      mode: 'javascript',
      foldGutter: true,
      gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
      theme: 'ayu-mirage',
      lint: true
    })
    this.jsonEditor.setValue('在此输入json字符串...')
  },
  methods: {
    getValue () {
      return this.jsonEditor.getValue() // 获取编辑器内容
    },
    setValue (code) {
      this.jsonEditor.setValue(code) // 设置编辑器内容
    },
    lineCount () {
      return this.jsonEditor.lineCount() // 获取当前行数
    },
    getLine (num) {
      return this.jsonEditor.getLine(num) // 获取第N行的内容
    },
    addLineClass (lineNum, text, style) {
      this.jsonEditor.addLineClass(lineNum, text, style) // 为某一行添加样式
    },
    removeLineClass (lineNum, text, style) {
      this.jsonEditor.removeLineClass(lineNum, text, style) // 删除某行的样式
    },
    setCursor (num) {
      this.jsonEditor.setCursor(num) // 为某行设置光标
    },
    getJsonEditor () {
      return this.jsonEditor
    }
  }
}
</script>


<style >
  .json-editor {
    height: 100%;
    width: 100%;
    text-align: left;
    position: absolute;
    top: 0;
    bottom: 0;
    overflow: auto;
  }
  .json-editor  .CodeMirror {
    height: 100%;
    min-height: 180px;
  }
  .json-editor .CodeMirror-scroll {
    min-height: 180px;
  }
  .json-editor .cm-s-rubyblue span.cm-string {
    color: #f08047;
  }
  .line-error {
    background-color: #D84315;
  }
</style>
