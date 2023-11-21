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
      <div class="title">
        {{ title }}
      </div>
      <div class="content">
        <input
          v-if="canEditTitle"
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
          ref="textDom"
          :spellcheck="false"
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
import { ref, computed, watch, nextTick } from 'vue'

const textDom = ref<HTMLTextAreaElement | null>(null)

watch(
  () => setting.input.index,
  async () => {
    if (setting.input.index === undefined) {
      inputData.title = ''
      inputData.text = ''
      setting.input.edit = false
    } else {
      await nextTick()
      if (textDom.value) {
        textDom.value.style.height = ''
        textDom.value.style.height = textDom.value.scrollHeight + 10 + 'px'
      }
    }
  }
)

const title = computed(() => {
  if (!setting.input.index) return
  if (setting.input.edit) {
    if (setting.input.index.length > 1) {
      return '编辑评论'
    } else {
      return '编辑帖子'
    }
  } else {
    if (setting.input.index.length === 0) {
      return '发布帖子'
    } else {
      return '评论帖子'
    }
  }
})

const canEditTitle = computed(() => {
  if (!setting.input.index) return true
  if (setting.input.edit && setting.input.index?.length > 1) return false
  if (!setting.input.edit && setting.input.index?.length > 0) return false
  return true
})

const onInput = (e: Event) => {
  const el = e.target as HTMLInputElement
  el.style.height = ''
  el.style.height = el.scrollHeight + 10 + 'px'
}

const canSubmit = computed(() => {
  if (!setting.input.index) return false
  if (canEditTitle.value) {
    return inputData.title.length > 0 && inputData.text.length > 0
  } else {
    return inputData.text.length > 0
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
  } else if (setting.input.index?.length === 1) {
    if (setting.input.edit) {
      message.list[setting.input.index[0]].title = inputData.title
      message.list[setting.input.index[0]].text = inputData.text
      message.list[setting.input.index[0]].time = Date.now()
    } else {
      message.list[setting.input.index[0]].comments.push({
        user: {
          id: user.value.id,
          avatar: user.value.avatar,
          name: user.value.name
        },
        text: inputData.text,
        comments: []
      })
    }
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
