<template>
  <Layout>
    <Header style="background-color: transparent;margin-top: 20px;">
      <seekBox></seekBox>
    </Header>
    <Content>
      <contents></contents>
    </Content>
    <Footer>Footer</Footer>
  </Layout>
</template>

<script>
export default {
  name: 'home',
  components: {
    seekBox: require('./Home/seekBox').default,
    contents: require('./Home/content').default
  }
}
</script>
