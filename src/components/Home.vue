<template>
  <div class="home">
    <div class="left">
      <div class="user">
        <div class="avatar"></div>
        <div class="name">小桂子</div>
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
    </div>
    <div class="right">
      <MessageItem
        v-for="(item, index) in messageList"
        :key="index"
        :message="item"
        @click="onItemClick(item.id)"
        @like="onLikeChange(item.id)"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import MessageItem from '@/components/Home/MessageItem.vue'
import { message } from '@/store/message'
import { getMessageIndex, setting } from '@/store/setting'
import { computed, ref } from 'vue'

const onItemClick = (id: number) => {
  setting.id = id
}

const onLikeChange = (id: number) => {
  const index = getMessageIndex(id)
  if (index !== -1) {
    message.list[index].is_like = !message.list[index].is_like
  }
}

const label = ref('')
const labelList = computed(() => {
  const list = new Map<string, Message[]>()
  for (const i in message.list) {
    const res = message.list[i].text.match(/#\S+#/g)
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
      display flex
      flex-direction column
      justify-content center
      align-items center
      box-sizing border-box
      width 100%
      padding 20px
      border 3px solid rgba(172, 172, 172, 0.5)

      .avatar
        width 70px
        height 70px
        border-radius 50%
        margin-bottom 15px
        background-color #ddd

      .name
        color #bfe1e7
        font-size 23px
        font-weight bold

    .label-list
      flex 1
      display flex
      flex-direction column

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

        &:hover
          border-color #5ce0e4

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
