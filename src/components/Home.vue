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
      <MessageItem :message="testData" />
      <MessageItem :message="{...testData, image: ''}" />
      <MessageItem :message="testData" />
      <MessageItem :message="testData" />
      <MessageItem :message="testData" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import MessageItem from '@/components/Home/MessageItem.vue'

const testData: Message = {
  avatar: 'https://patchwiki.biligame.com/images/sr/thumb/9/93/n6bsmrgi3as9gttm6av8zxb3f90r5bb.png/180px-%E4%BD%A9%E4%BD%A9%EF%BC%88%E5%A4%B4%E5%83%8F%EF%BC%89.png',
  name: '里生外熟',
  like: 999,
  image: 'https://patchwiki.biligame.com/images/sr/thumb/1/14/d2v9gsa9uwv9y9l4co9vv3cbuv1icf7.png/1200px-%E6%9D%A5%E8%87%AA%E5%A4%A7%E4%BC%9F%E5%93%A5%E7%9A%84%E9%80%9A%E8%AE%AF%EF%BC%9A%E3%80%8C%E6%98%9F%E6%B5%B7%E4%B9%8B%E6%97%85%EF%BC%8C%E6%84%9F%E8%B0%A2%E5%90%8C%E8%A1%8C%E3%80%8D.png.jpeg',
  title: '有没有人在长乐天遇到一个说要比棋的怪人？',
  text: '<span class="text_highlight">#见鬼实录#</span>最近在长乐天冒出了一个怪人，吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦',
  comments: []
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
