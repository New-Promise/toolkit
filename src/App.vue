<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="less">
  .size{
    width: 100%;
    height: 100%;
  }
  html,body{
  .size;
    overflow: hidden;
    margin: 0;
    padding: 0;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width: 100%;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
  ::-webkit-scrollbar-thumb {
    border-radius: 2px;
    -webkit-box-shadow: inset 0 0 6px rgba(255,255,255,.4);
    background-color: #999;
  }
  ::-webkit-scrollbar {
    width: 4px;
    height: 4px;
    background-color: rgba(255,255,255,.4);
  }
</style>
