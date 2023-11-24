<template>
  <div
    id="main"
    :style="{
      width: `${width * scale}px`,
      height: `${height * scale}px`
    }"
  >
    <div
      id="home"
      :style="{
        transform: `scale(${scale})`,
        width: `${width}px`,
        height: `${height}px`
      }"
    >
      <Component
        v-for="(item, index) in components"
        :key="index"
        :is="item"
      />
      <div class="link">
        <a
          href="https://github.com/blacktunes/sr-ghostly-grove"
          target="_blank"
        >
          Github
        </a>
        <span>·</span>
        <a
          href="https://space.bilibili.com/1384118"
          target="_blank"
        >
          BiliBili
        </a>
      </div>
    </div>
  </div>
  <Tip :show="shouldHorizontal" />
</template>

<script lang="ts" setup>
import { defineComponent, ref } from 'vue'
import type { Component } from 'vue'
import Tip from './components/Tip.vue'

// 动态加载所有组件
const components: Component[] = []
const modules = {
  ...import.meta.glob<{ default: Component }>(
    [
      // 组件位置
      './components/*.vue',
      '!./components/Tip.vue',
      './components/Popup/*.vue'
    ],
    {
      eager: true,
      import: 'default'
    }
  )
}
for (const i in modules) {
  components.push(defineComponent(modules[i]))
}

// 计算窗口尺寸
const width = 1920
const height = 1080
const scale = ref(1)

const shouldHorizontal = ref(false)

const setSize = () => {
  shouldHorizontal.value = window.innerWidth <= 550 && window.innerWidth < window.innerHeight
  scale.value = Math.min(window.innerWidth / width, window.innerHeight / height)
}
setSize()

window.onresize = () => {
  setSize()
}
</script>

<style lang="stylus" scoped>
#main
  #home
    position relative
    height 100%
    width 100%
    transform-origin left top
    display flex
    justify-content center
    align-items center

    &:after
      content ''
      z-index -1
      position absolute
      width 100%
      height 100%
      background url('@/assets/bg.webp')
      background-size 100%
      background-repeat no-repeat
      box-shadow 0 0 20px 20px rgba(0, 0, 0, 0.7) inset

.link
  position absolute
  bottom 24px
  display flex
  width 100%
  justify-content center
  opacity 0.1

  &:hover
    opacity 1

  a, span
    color #cbfaff
    font-size 22px
    user-select none

  a
    text-decoration none

  span
    margin 0 10px
</style>
