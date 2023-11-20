<template>
  <div class="message-box">
    <div class="user">
      <img
        class="avatar"
        :src="message.user.avatar"
        alt=""
      />
      <div class="name">{{ message.user.name || '匿名' }}</div>
      <img
        v-if="message.user.id === setting.userID"
        src="@/assets/badge.webp"
        alt=""
        class="badge"
      />
    </div>
    <div class="content-box">
      <div class="content">
        <div class="title">{{ message.title }}</div>
        <div
          class="text"
          v-html="textReplace(message.text)"
        ></div>
        <div class="info">
          <div
            class="icon"
            :class="{ highlight: message.is_like }"
          >
            <Icon
              width="25"
              height="25"
              :name="message.is_like ? 'heart-fill' : 'heart'"
              @click.stop="$emit('like')"
            />
            <span>{{ message.is_like ? message.like + 1 : message.like }}</span>
          </div>
          <div class="icon">
            <Icon name="comment" />
            <span>{{ commentNum }}</span>
          </div>
        </div>
      </div>
      <img
        class="image"
        v-if="message.image"
        :src="message.image"
        alt=""
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Icon from '@/components/Common/Icon.vue'
import { setting } from '@/store/setting'
import { textReplace } from '@/assets/text'
import { computed } from 'vue'

const props = defineProps<{
  message: Message
}>()

defineEmits<{
  (event: 'like'): void
}>()

const commentNum = computed(() => {
  let num = 0
  props.message.comments.forEach((comment) => {
    ++num
    comment.comments.forEach(() => ++num)
  })
  return num
})
</script>

<style lang="stylus" scoped>
.message-box
  box-sizing border-box
  width 100%
  height 270px
  padding 15px 20px
  margin-top 17px
  border 3px solid rgba(172, 172, 172, 0.5)
  background-color rgba(0, 0, 0, 0.1)
  user-select none
  cursor pointer

  &:hover
    border-color #8eb2bd

  &:active
    border-color #748e97

  &:first-child
    margin-top 0

  .user
    display flex
    align-items center
    box-sizing border-box
    width 100%
    height 40px
    margin-bottom 10px

    .avatar
      width 40px
      height 40px
      border-radius 50%
      margin-right 10px
      background-color #ddd
      object-fit contain

    .name
      color #b3d8e0
      font-size 20px
      margin-bottom 2px

    .badge
      margin-left 8px
      width 26px
      height 26px

  .content-box
    display flex

    .content
      .title
        color #62f3f6
        font-size 30px
        margin-bottom 15px

      .text
        height 60px
        color #5f6e73
        font-size 20px
        line-height 30px
        margin-bottom 30px
        // 存在兼容性问题
        display -webkit-box
        -webkit-box-orient vertical
        -webkit-line-clamp 2
        overflow hidden

      .info
        display flex
        align-items center

        .icon
          display flex
          align-items center
          color #5f6e73
          font-size 20px

          &:first-child
            margin-right 45px

          svg
            margin 5px 10px 0 0

    .image
      flex-shrink 0
      width 300px
      height 170px
      margin-left 30px
      object-fit cover

.highlight
  color var(--highlight-color) !important
</style>
