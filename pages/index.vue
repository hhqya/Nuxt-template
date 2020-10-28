<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        Nuxt_app
      </h1>
      <h2 class="subtitle">
        My premium Nuxt.js project
      </h2>
      <div class="links">
        <a
          href="http://baidu.com"
          target="_blank"
          class="button--green"
        >
          System
        </a>
        <nuxt-link
          :to="{name: 'route'}"
          class="button--green"
          target="_blank">
          权限页
        </nuxt-link>
        <!--
        nuxt.js中的nuxt-link有两种路由跳转写法
          1.
            <nuxt-link :to="{name: 'route'}">跳转</nuxt-link>
          2.
            <nuxt-link to="/route}">跳转</nuxt-link>
        -->
        <nuxt-link
          :to="{name: 'auth'}"
          class="button--green"
          target="_blank">
          路由鉴权
        </nuxt-link>
        <a
          class="button--green"
          @click="ButtonClick"
        >
          Button
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  data(){
    return{
      msg: 'data数据源',
    }
  },
  methods:{
    ButtonClick(){
        console.log('当前获取的是'+ this.msg)
    },
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
