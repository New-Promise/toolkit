<template>
  <div id="view" style="height:100%;width: 100%;text-align: left;"></div>
</template>

<script>
export default {
  mounted () {
    setTimeout(() => {
      this.textcontrast()
    })
  },
  methods: {
    textcontrast () {
      window.jQuery('#view').mergely({
        width: window.jQuery('#view').width(),
        height: window.jQuery('#view').height(),
        license: 'lgpl-separate-notice',
        cmsettings: {
          readOnly: false,
          lineWrapping: true
        },
        lhs: function (setValue) {
          setValue(`/*以下为演示内容，请添加您自己的内容 ~_~ */

html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
  font-family: 'Fira Mono', helvetica, arial, sans-serif;
  font-weight: 400;
  font-size: 62.5%;
}

#webgl-container {
  width: 100%;
  height: 100%;
  cursor: pointer;
}

.loading {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #000000;
  opacity: 1;
  -webkit-transition: opacity 1.2s ease-out;
  -o-transition: opacity 1.2s ease-out;
  transition: opacity 1.2s ease-out;
  pointer-events: none;
  z-index: 5;
}

.loading__progress {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  -webkit-transition: opacity 0.25s ease-out;
  -o-transition: opacity 0.25s ease-out;
  transition: opacity 0.25s ease-out;
  opacity: 0;
}`)
        },
        rhs: function (setValue) {
          setValue(`/*以下为演示内容，请添加您自己的内容 ^_^ */

html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 1;
  overflow: hiddean;
  font-family: 'Fira Mono', helvetica, arial, sans-serif;
  font-weight: 400;
  font-size: 62.0%;
}

#webgl-container {
  width: 100%;
  height: 100%;
  cursor: pointer;
}

.loading {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #0000fff;
  opacity: 1;
  -webkit-transition: opacity 1.2s ease-out;
  -o-transition: opacity 1.2s ease-out;
  transition: opacity 1.2s ease-out;
  pointer-events: none;
  z-index: 5;
}

.loading__progress {
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  -webkit-transition: opacity 0.25s ease-out;
  -o-transition: opacity 0.25s ease-out;
  transition: opacity 0.25s ease-out;
  opacity: 0;
}`)
        }
      })
    }
  }
}
</script>

<style >

</style>
