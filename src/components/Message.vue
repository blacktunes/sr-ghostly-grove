<template>
  <div
    class="message"
    v-if="setting.index"
    @click="setting.index = undefined"
  >
    <div
      class="message-box"
      @click.stop
    >
      <div class="left">
        <div class="like">
          <div class="icon">
            <Icon :name="message.list[messageIndex].is_like ? 'heart-fill' : 'heart'" />
          </div>
          <div class="like-text">
            {{ message.list[messageIndex].like }}
          </div>
        </div>
        <img
          src="@/assets/empty.webp"
          alt=""
        />
      </div>
      <div class="right">
        <div class="user">
          <img
            :src="message.list[messageIndex].avatar"
            alt=""
            class="avatar"
          />
          <div class="name">{{ message.list[messageIndex].name }}</div>
          <Close
            class="close"
            @click="setting.index = undefined"
          />
        </div>
        <div class="content">
          <div class="title">{{ message.list[messageIndex].title }}</div>
          <div
            class="text"
            :style="{ '-webkit-line-clamp': isExpand ? 'unset' : '' }"
            v-html="textFilter(message.list[messageIndex].text)"
          ></div>
          <div class="read-all">
            <div
              class="btn"
              @click="isExpand = !isExpand"
            >
              阅读全文
            </div>
          </div>
          <div class="line"></div>
          <div class="comment-num">共{{ commentNum }}条评论</div>
          <div class="comment-list">
            <div
              v-for="(comment, index_1) in message.list[messageIndex].comments"
              :key="`comment-${index_1}`"
              class="comment"
            >
              <div class="user">
                <img
                  :src="comment.avatar"
                  alt=""
                  class="avatar"
                />
                <div class="name">{{ comment.name }}</div>
              </div>
              <div
                class="comment-text"
                v-html="textFilter(comment.text)"
              ></div>
              <div class="reply-list">
                <div
                  v-for="(reply, index_2) in comment.comments"
                  :key="`reply-${index_2}`"
                  class="reply"
                >
                  <div class="user">
                    <img
                      :src="reply.avatar"
                      alt=""
                      class="avatar"
                    />
                    <div class="name">{{ reply.name }}</div>
                  </div>
                  <div
                    class="comment-text"
                    v-html="textFilter(reply.text)"
                  ></div>
                </div>
              </div>
              <div class="comment-line"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import Close from './Common/Close.vue'
import { messageIndex, setting } from '@/store/setting'
import { message } from '@/store/message'
import Icon from './Common/Icon.vue'

const isExpand = ref(false)

const textFilter = (text: string) => {
  return text
    .replace(/#(\S+)#/g, '<span class="text_highlight">#$1#</span>')
    .replace(/@(\S+)\s/g, '<span class="text_highlight">@$1</span>&#160;')
}

const commentNum = computed(() => {
  let num = 0
  message.list[messageIndex.value].comments.forEach((comment) => {
    ++num
    comment.comments.forEach(() => ++num)
  })
  return num
})
</script>

<style lang="stylus" scoped>
@import '../assets/style.styl'

.user
  display flex
  align-items center

  .avatar
    width 40px
    height 40px
    border-radius 50%
    background #666
    margin-right 10px

  .name
    font-size 18px
    color var(--name-color)
    margin-bottom 3px

.message
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

  .message-box
    position relative
    display flex
    width 1300px
    height 770px
    background rgba(11, 11, 11, 0.9)
    border-left 5px solid #42a8b9

    &:before
      content ''
      position absolute
      width 100%
      height 100%
      background-image url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='69.283' height='40' patternTransform='scale(2) rotate(30)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(0, 0%, 100%, 0)'/><path d='M46.189-20L57.736 0M46.189 20l11.547 20m-46.189 0l11.547 20M11.547 0l11.547 20m40.415 30H40.415M28.868 30H5.774m23.094-40H5.774m57.735 20H40.415m0 20L28.868 50m11.547-60L28.868 10m46.188 0L63.509 30M5.774 10L-5.773 30m75.056 10H46.189L34.64 20 46.19 0h23.094C73.13 6.667 76.98 13.333 80.83 20zM57.736 60H34.64L23.094 40l11.547-20h23.095c3.848 6.667 7.698 13.333 11.547 20L57.736 60zm0-40H34.64L23.094 0l11.547-20h23.095L69.283 0c-3.87 6.7-8.118 14.06-11.547 20zM34.64 60H11.547L0 40l11.547-20h23.094L46.19 40 34.64 60zm0-40H11.547L0 0l11.547-20h23.094L46.19 0 34.64 20zM23.094 40H0l-5.773-10-5.774-10L0 0h23.094l11.547 20-11.547 20z'  stroke-width='1' stroke='hsla(197, 40%, 14%, 1)' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>")

    .left
      position relative
      z-index 5
      width 770px
      height 770px

      .like
        display flex
        align-items center
        justify-content center
        position absolute
        top 35px
        left 45px

        .icon
          display flex
          align-items center
          justify-content center
          border-radius 50%
          background-color #3c4149
          color #61f0f3
          width 60px
          height 60px
          cursor pointer

        .like-text
          margin 0 0 5px 10px
          font-size 24px
          color #cecfd1

    .right
      overflow hidden
      display flex
      flex-direction column
      z-index 5
      position relative
      flex 1
      padding 30px 10px 20px 35px
      margin-right 15px

      &:before
        z-index -2
        content ''
        position absolute
        top 50%
        left 50%
        width 930px
        height 930px
        background radial-gradient(rgba(35, 37, 46, 0.9) 10%, rgba(35, 37, 46, 0.9) 50%, rgba(38, 58, 69, 0.7)), radial-gradient(rgba(35, 37, 46, 0.9), rgba(38, 58, 69, 0))
        background-size 130% 130%, 80%, 80%
        background-position -50% -50%, 50% 50%
        animation 10s rotate linear infinite

      &:after
        z-index -1
        content ''
        position absolute
        top 0
        left 0
        width 100%
        height 100%
        background url('@/assets/icon.webp')
        background-repeat no-repeat
        background-position center
        background-size 320px
        opacity 0.05

      .close
        width 40px
        height 40px
        margin 0 20px 0 auto

      .content
        flex 1
        overflow-y auto
        overflow-y overlay
        overflow-x hidden
        scrollbar-gutter stable
        margin-top 25px
        padding-right 20px

        .name
          name()

        .title
          title()

        .text
          margin-top 20px
          text()
          // 兼容存在问题
          display -webkit-box
          -webkit-box-orient vertical
          -webkit-line-clamp 2
          word-break break-all
          overflow hidden

        .read-all
          display flex
          justify-content flex-end

          .btn
            display inline
            color #42a8b9
            font-size 20px
            cursor pointer

        .line
          width 100%
          height 2px
          background #3e454d
          margin-top 20px

        .comment-num
          text()
          margin 20px 0

        .comment-list
          .comment
            .name
              color #59666e

            .comment-text
              text()
              margin-left 50px
              margin-top 0

            .reply-list
              margin 15px 0 0 50px

            .comment-line
              width calc(100% - 50px)
              height 2px
              background #3e454d
              margin 15px 0 15px 50px

@keyframes rotate
  from
    transform translate(-50%, -50%) rotate(0deg)

  to
    transform translate(-50%, -50%) rotate(360deg)
</style>
