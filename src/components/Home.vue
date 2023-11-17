<template>
  <div class="home">
    <div class="left">
      <div class="user">
        <div class="avatar"></div>
        <div class="name">小桂子</div>
      </div>
      <div class="subject-list">
        <div class="subject">
          <div class="icon"></div>
          <div class="text">全部</div>
        </div>
      </div>
    </div>
    <div class="right">
      <MessageItem
        v-for="(item, index) in message.list"
        :key="index"
        :message="item"
        @click="onItemClick(item.id)"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import MessageItem from '@/components/Home/MessageItem.vue'
import { message } from '@/store/message'
import { setting } from '@/store/setting'

const onItemClick = (id: number) => {
  setting.index = id
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

    .subject-list
      flex 1
      display flex
      flex-direction column

      .subject
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

  .right
    flex 1
    height 100%
    padding 0 17px
    overflow auto
</style>
