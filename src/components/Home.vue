<template>
  <div class="home">
    <div class="left">
      <div
        class="user"
        @click="setting.select = [true]"
      >
        <div class="avatar">
          <img
            :src="user.avatar"
            alt=""
            class="avatar-image"
          />
          <img
            src="@/assets/images/badge.webp"
            alt=""
            class="badge"
          />
        </div>
        <div class="name">{{ user.name }}</div>
      </div>
      <div class="label-list">
        <div
          class="label"
          :class="{ highlight: label === '' }"
          @click="label = ''"
        >
          <div class="icon"></div>
          <div class="text">全部</div>
        </div>
        <div
          v-for="item in labelList"
          :key="item[0]"
          class="label"
          :class="{ highlight: label === item[0] }"
          @click="label = item[0]"
        >
          <div class="icon"></div>
          <div class="text">{{ item[0] }}</div>
        </div>
      </div>
      <div
        class="menu"
        @click="onBtnClick"
      >
        <img
          src="@/assets/images/ghost.webp"
          alt=""
          class="icon"
        />
        <div class="text">点击发布新帖</div>
      </div>
    </div>
    <div class="right">
      <MessageItem
        v-for="(item, index) in messageList"
        :key="index"
        :message="item"
        @click="onItemClick(item.id)"
        @like="onLikeChange(item.id)"
        @delete="handelDelete(item.id)"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import MessageItem from '@/components/Home/MessageItem.vue'
import { user } from '@/store/character'
import { inputData } from '@/store/input'
import { message } from '@/store/message'
import { getMessageIndex, setting } from '@/store/setting'
import { computed, ref } from 'vue'

const onItemClick = (id: number) => {
  setting.messageID = id
}

const onLikeChange = (id: number) => {
  const index = getMessageIndex(id)
  if (index !== -1) {
    message.list[index].is_like = !message.list[index].is_like
  }
}

const handelDelete = (id: number) => {
  const index = getMessageIndex(id)
  if (index !== -1) {
    const flag = confirm('是否删除该贴？')
    if (flag) {
      message.list.splice(index, 1)
    }
  }
}

const label = ref('')
const labelList = computed(() => {
  const list = new Map<string, Message[]>()
  for (const i in message.list) {
    const res = message.list[i].text.match(/#\S+?#/g)
    res?.forEach((name) => {
      if (list.has(name)) {
        list.get(name)?.push(message.list[i])
      } else {
        list.set(name, [message.list[i]])
      }
    })
  }
  return list
})

const messageList = computed(() => {
  if (label.value && labelList.value.has(label.value)) {
    return [...(labelList.value.get(label.value) || [])].sort((a, b) => b.time - a.time)
  }
  return [...message.list].sort((a, b) => b.time - a.time)
})

const onBtnClick = () => {
  inputData.user = user.value
  setting.input.index = []
}
</script>

<style lang="stylus" scoped>
.home
  display flex
  position absolute
  top 125px
  right 210px
  bottom 95px
  left 240px

  .left
    display flex
    flex-direction column
    width 300px
    height 100%
    margin-right 30px

    .user
      position relative
      display flex
      flex-direction column
      justify-content center
      align-items center
      box-sizing border-box
      width 100%
      padding 20px
      border 3px solid rgba(172, 172, 172, 0.5)
      user-select none
      cursor pointer

      &:before
        // z-index -1
        content ''
        position absolute
        top 0
        left 0
        width 100%
        height 100%
        background url('@/assets/images/icon.webp')
        background-repeat no-repeat
        background-position center
        background-size 180px
        opacity 0.1

      &:hover
        border-color #5ce0e4

      &:active
        border-color #3fa3b6

      .avatar
        position relative
        margin-bottom 15px

        .avatar-image
          width 70px
          height 70px
          border-radius 50%
          background-color #ddd

        .badge
          position absolute
          right -8px
          bottom 2px
          width 30px
          height 30px

      .name
        color #bfe1e7
        font-size 23px
        font-weight bold

    .label-list
      flex 1
      display flex
      flex-direction column
      overflow-y auto
      overflow-y overlay
      scrollbar-gutter stable
      scrollbar-width none
      margin-top 30px

      &::-webkit-scrollbar
        width 0
        height 0

      .label
        display flex
        align-items center
        box-sizing border-box
        width 100%
        height 60px
        padding 10px 30px
        margin-top 30px
        border 3px solid rgba(172, 172, 172, 0.5)
        color #80979b
        font-size 20px
        font-weight bold
        user-select none
        cursor pointer

        &:first-child
          margin-top 0

        &:hover
          border-color #5ce0e4

        &:active
          border-color #3fa3b6

    .menu
      margin 30px 0 30px 20px
      display flex
      align-items center
      cursor pointer
      user-select none

      .icon
        height 45px

      .text
        margin 0 0 10px 10px
        font-size 24px
        color #cbfaff

  .right
    flex 1
    height 100%
    padding 0 17px
    overflow auto

.highlight
  border-color #3fa3b6 !important
  background-color #1a5272
  cursor default !important
</style>
