<template>
  <div
    class="input"
    v-if="setting.input.index"
    @click="setting.input.index = undefined"
  >
    <div
      class="input-box"
      @click.stop
    >
      <div class="title">发布帖子</div>
      <div class="content">
        <input
          v-model="inputData.title"
          type="text"
          class="title-input"
          placeholder="标题"
        />
        <textarea
          v-model="inputData.text"
          class="text-input"
          @input="onInput"
          placeholder="正在编辑内容"
        ></textarea>
      </div>
      <div
        class="btn"
        :class="{ disabled: !canSubmit }"
        @click="onBtnClick"
      >
        发布
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { setting } from '@/store/setting'
import { message } from '@/store/message'
import { inputData } from '@/store/input'
import { user } from '@/store/character'
import { computed, watch } from 'vue'

watch(() => setting.input.index, () => {
  if (setting.input.index === undefined) {
    inputData.title = ''
    inputData.text = ''
    setting.input.edit = false
  }
})

const onInput = (e: Event) => {
  const el = e.target as HTMLInputElement
  el.style.height = ''
  el.style.height = el.scrollHeight + 10 + 'px'
}

const canSubmit = computed(() => {
  if (!setting.input.index) return false
  if (setting.input.index?.length > 1) {
    return inputData.text.length > 0
  } else {
    return inputData.title.length > 0 && inputData.text.length > 0
  }
})

const onBtnClick = () => {
  if (!canSubmit.value) return
  if (setting.input.index?.length === 0) {
    message.list.push({
      id: Date.now(),
      user: {
        id: user.value.id,
        avatar: user.value.avatar,
        name: user.value.name
      },
      is_like: false,
      like: 0,
      title: inputData.title,
      text: inputData.text,
      time: Date.now(),
      comments: []
    })
  }
  setting.input.index = undefined
}
</script>

<style lang="stylus" scoped>
.input
  z-index 5
  position absolute
  top 0
  right 0
  bottom 0
  left 0
  display flex
  justify-content center
  align-items center
  backdrop-filter blur(10px)
  -webkit-backdrop-filter blur(10px)
  background rgba(0, 0, 0, 0.2)

  .input-box
    overflow hidden
    position relative
    display flex
    flex-direction column
    align-items center
    width 600px
    height 1000px
    background rgba(11, 11, 11, 0.9)
    margin-top 90px
    padding-bottom 90px
    border-radius 30px 30px 0 0
    border 2px solid #42a8b9
    border-bottom none

    .title
      width 80%
      margin 50px 0
      padding-bottom 20px
      text-align center
      font-size 30px
      font-weight bold
      color #d7e8f2
      border-bottom 2px solid #3f5c6e

    .content
      width 80%
      flex 1
      display flex
      flex-direction column
      align-items center

      .title-input
        box-sizing border-box
        width 100%
        height 60px
        padding 5px 20px
        font-size 30px
        color #d7e8f2
        background transparent
        border 2px solid #547086

      .text-input
        resize none
        box-sizing border-box
        width 100%
        height 60px
        padding 5px 20px
        font-size 30px
        color #d7e8f2
        background transparent
        border 2px solid #547086
        margin-top 20px
        max-height 650px

    .btn
      display flex
      align-items center
      justify-content center
      box-sizing border-box
      width 80%
      height 60px
      color #d7e8f2
      font-size 26px
      border 2px solid #547086
      border-radius 40px
      background-color #42a8b9
      user-select none
      cursor pointer

.disabled
  color #838383 !important
  background-color transparent !important
  cursor default !important
</style>
