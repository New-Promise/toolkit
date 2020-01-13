<template>
  <div style="width: 100%;height:100%;position: relative;">
    <div style="width:45%;float: left;height: 100%;position:relative;">
      <JsonTool ref="JsonTool"></JsonTool>
    </div>
    <div style=" width: 10%; height:100%; background-color: #000;float: left">
      <Button type="info" ghost @click="onClick">格式化</Button>
      <br>
      <Button type="success" ghost @click="onDownload">保存</Button>
      <br>
      <Button type="primary" ghost @click="copy"
              v-clipboard:copy="copyJson"
              v-clipboard:success="onCopy"
              v-clipboard:error="onError">复制</Button>
      <br>
      <Button type="warning" ghost @click="onClickRm">清空</Button>
    </div>
    <div style="width:45%;float: left;height:100%;background-color: #292c33;position: relative">
      <pre width="40" id="result" class="error" v-if="errorText">{{errorText}}</pre>
      <div style="position: absolute;top: 0;left: 0; bottom: 0;right: 0;overflow-y: scroll;" v-if="!errorText">
        <json-view :data="json" :theme="'one-dark'" style="padding-left: 5px; text-align: left; "/>
      </div>
    </div>
  </div>
</template>

<script>
import jsonLint from 'jsonlint-mod'
import beautify from 'js-beautify/js/lib/beautify'
import jsonView from 'vue-json-views'
import FileSaver from 'file-saver'
export default {
  name: 'jsonVerify',
  components: {
    JsonTool: require('./jsonTool/jsonTool').default,
    jsonView
  },
  data () {
    return {
      errorLine: '',
      errorText: '',
      json: {},
      isVerlfy: false,
      copyJson: ''
    }
  },
  methods: {
    onClick () {
      let code = this.$refs.JsonTool.getValue()
      let lineMatches
      code = beautify.js_beautify(code, {
        indent_with_tabs: true
      })
      this.$refs.JsonTool.setValue(code)
      this.getJsonEditor()
      try {
        this.errorText = ''
        jsonLint.parse(code)
        this.json = JSON.parse(code)
        this.isVerlfy = true
      } catch (err) {
        lineMatches = err.message.match(/line ([0-9]*)/)
        if (lineMatches && lineMatches.length > 1) {
          this.highlightErrorLine(+lineMatches[1] - 1)
        }
        this.errorText = err
        this.isVerlfy = false
      }
    },
    highlightErrorLine (line) {
      let editor = this.$refs.JsonTool
      if (typeof line === 'number') {
        this.errorLine = editor.addLineClass(line, 'background', 'line-error')
        editor.setCursor(line)
      } else if (this.errorLine) {
        editor.removeLineClass(this.errorLine, 'background', 'line-error')
        this.errorLine = null
      }
    },
    onClickRm () {
      this.$refs.JsonTool.setValue('')
    },
    onDownload () {
      if (this.isVerlfy) {
        let content = JSON.stringify(this.json)
        let blob = new Blob([content ], {type: "text/plain;charset=utf-8"})
        FileSaver.saveAs(blob, `toolkit-${new Date().getTime()}.json`)
      } else {
        if (this.errorText !== '') {
          this.$Message.error('格式不正确,无法保存')
        } else {
          this.$Message.warning('请先点击格式化按钮验证格式是否正确')
        }
      }
    },
    getJsonEditor () {
      let then = this
      this.$refs.JsonTool.getJsonEditor().on('change', () => {
        then.isVerlfy = false
        then.errorText = ''
        then.copyJson = ''
      })
    },
    copy () {
      if (this.isVerlfy) {
        this.copyJson = JSON.stringify(this.json)
      } else {
        if (this.errorText !== '') {
          this.$Message.error('格式不正确,无法复制')
        } else {
          this.$Message.warning('请先点击格式化按钮验证格式是否正确')
        }
      }
    },
    onCopy () {
      this.$Message.success('复制成功')
    },
    onError () {
      this.$Message.error('复制失败')
    }
  }
}
</script>

<style scoped>
  #result {
    border: 1px solid transparent;
    margin: 1.6em 0;
    padding: 0.8em;
  }

  #result:empty {
    display: none;
  }

  #result.error {
    background: #FBE3E4;
    color: #D12F19;
    border-color: #FBC2C4;
    text-align:left;
    padding-left: 5px;
  }

  #result.success {
    background: #E6EFC2;
    color: #529214;
    border-color: #C6D880;
  }
  Button {
    margin-top: 10px;
  }
</style>
