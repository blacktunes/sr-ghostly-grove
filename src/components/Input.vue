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
        <div
          class="character"
          @click.stop="setting.select = [false]"
        >
          <img
            :src="inputData.user.avatar"
            alt=""
            class="avatar"
          />
          <div class="name">{{ inputData.user.name }}</div>
          <img
            v-if="inputData.user.id === setting.userID"
            src="@/assets/badge.webp"
            alt=""
            class="badge"
          />
        </div>
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
        {{ btnText }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { setting } from '@/store/setting'
import { message } from '@/store/message'
import { inputData } from '@/store/input'
import { ref, computed, watch, nextTick } from 'vue'

const textDom = ref<HTMLTextAreaElement | null>(null)

watch(
  () => setting.input.index,
  async () => {
    if (setting.input.index === undefined) {
      inputData.title = ''
      inputData.text = ''
      inputData.user = {
        id: 1,
        name: '',
        avatar: ''
      }
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

const btnText = computed(() => {
  if (!setting.input.index) return
  if (setting.input.edit) {
    return '修改'
  } else {
    if (setting.input.index.length === 0) {
      return '发布'
    } else {
      return '评论'
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
    // 发布新帖
    message.list.push({
      id: Date.now(),
      user: inputData.user,
      is_like: false,
      like: 0,
      title: inputData.title,
      text: inputData.text,
      time: Date.now(),
      comments: []
    })
  } else if (setting.input.index?.length === 1) {
    if (setting.input.edit) {
      // 编辑帖子
      message.list[setting.input.index[0]].title = inputData.title
      message.list[setting.input.index[0]].text = inputData.text
      message.list[setting.input.index[0]].user = inputData.user
      message.list[setting.input.index[0]].time = Date.now()
    } else {
      // 评论
      message.list[setting.input.index[0]].comments.push({
        user: inputData.user,
        text: inputData.text,
        comments: []
      })
    }
  } else if (setting.input.index?.length === 2) {
    if (setting.input.edit) {
      // 编辑评论
      message.list[setting.input.index[0]].comments[setting.input.index[1]].text = inputData.text
      message.list[setting.input.index[0]].comments[setting.input.index[1]].user = inputData.user
      message.list[setting.input.index[0]].time = Date.now()
    } else {
      // 评论回复
      message.list[setting.input.index[0]].comments[setting.input.index[1]].comments.push({
        user: inputData.user,
        text: inputData.text
      })
    }
  } else if (setting.input.index?.length === 3) {
    if (setting.input.edit) {
      // 编辑评论回复
      message.list[setting.input.index[0]].comments[setting.input.index[1]].comments[
        setting.input.index[2]
      ].text = inputData.text
      message.list[setting.input.index[0]].comments[setting.input.index[1]].comments[
        setting.input.index[2]
      ].user = inputData.user
      message.list[setting.input.index[0]].time = Date.now()
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
    height 1050px
    padding-bottom 40px
    background rgba(11, 11, 11, 0.9)
    border-radius 30px 30px 0 0
    border 2px solid #42a8b9
    border-bottom none

    .title
      width 80%
      margin 50px 0 20px 0
      padding-bottom 20px
      text-align center
      font-size 30px
      font-weight bold
      color #d7e8f2
      border-bottom 2px solid #3f5c6e

    .content
      flex 1
      display flex
      flex-direction column
      align-items center
      width 80%
      margin-bottom 20px

      .character
        display flex
        align-items center
        width 100%
        height 100px
        margin-bottom 10px
        user-select none
        cursor pointer
        user-select none

        .avatar
          width 80px
          height 80px
          border-radius 50%
          background #666
          margin-right 10px

        .name
          color #b3d8e0
          font-size 30px

        .badge
          margin-left 8px
          width 35px
          height 35px

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
        max-height 650px
        padding 5px 20px
        font-size 30px
        color #d7e8f2
        background transparent
        border 2px solid #547086
        margin-top 20px

    .btn
      flex-shrink 0
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
