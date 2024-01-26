<template>
  <div
    class="character-select"
    v-show="setting.select"
    @click="setting.select = undefined"
  >
    <div
      class="character-select-box"
      @click.stop
    >
      <div class="title-bar">
        <div class="title">选择角色</div>
        <Close
          class="close"
          @click="setting.select = undefined"
        />
      </div>
      <div class="scroll-view">
        <div
          v-for="item in character.game"
          :key="item.id"
          class="character"
          :class="{ highlight: item.id === highlightID }"
          :title="item.name"
          @click="onCharacterClick(item)"
        >
          <img
            :src="item.avatar"
            alt=""
            class="avatar"
          />
          <div class="name">{{ item.name }}</div>
        </div>
        <div
          v-for="(item, index) in character.custom"
          :key="item.id"
          class="character"
          :class="{ highlight: item.id === highlightID }"
          :title="item.name"
          @click="onCharacterClick(item)"
          @contextmenu.prevent="handelDelete(index)"
        >
          <img
            :src="item.avatar"
            alt=""
            class="avatar"
          />
          <div class="name">{{ item.name }}</div>
        </div>
        <div class="character">
          <div
            class="avatar icon"
            @click="onAddClick"
          >
            <Icon
              name="add"
              width="80"
              height="80"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Close from './Common/Close.vue'
import Icon from './Common/Icon.vue'
import { inputData } from '@/store/input'
import { character } from '@/store/character'
import { setting } from '@/store/setting'
import { computed } from 'vue'
import { imageCompress } from '@/assets/scripts/images'

const highlightID = computed(() => {
  if (setting.select === undefined) return 0
  if (setting.select[0]) {
    return setting.userID
  } else {
    return inputData.user?.id
  }
})

const onCharacterClick = (item: { id: number; name: string; avatar: string }) => {
  if (setting.select) {
    if (setting.select[0]) {
      setting.userID = item.id
    } else {
      inputData.user = item
    }
  }
  setting.select = undefined
}

const onAddClick = () => {
  const name = prompt('角色名')
  if (name !== null && name.length > 0) {
    setTimeout(() => {
      const input = document.createElement('input')
      input.type = 'file'
      input.accept = 'image/*'
      input.onchange = async () => {
        if (input.files?.[0]) {
          const avatar = await imageCompress(input.files[0])
          character.custom.push({
            id: Date.now(),
            name,
            avatar
          })
        }
      }
      input.click()
    }, 0)
  }
}

const handelDelete = (index: number) => {
  const flag = confirm('是否删除该用户？')
  if (flag) {
    character.custom.splice(index, 1)
  }
}
</script>

<style lang="stylus" scoped>
@import '../assets/style.styl'

.character-select
  z-index 10
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

  .character-select-box
    overflow hidden
    position relative
    display flex
    flex-direction column
    width 1300px
    height 770px
    background rgba(11, 11, 11, 0.9)
    border-left 5px solid #42a8b9

    &:before
      z-index -2
      content ''
      position absolute
      width 100%
      height 100%
      background-image url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='69.283' height='40' patternTransform='scale(2) rotate(30)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(0, 0%, 100%, 0)'/><path d='M46.189-20L57.736 0M46.189 20l11.547 20m-46.189 0l11.547 20M11.547 0l11.547 20m40.415 30H40.415M28.868 30H5.774m23.094-40H5.774m57.735 20H40.415m0 20L28.868 50m11.547-60L28.868 10m46.188 0L63.509 30M5.774 10L-5.773 30m75.056 10H46.189L34.64 20 46.19 0h23.094C73.13 6.667 76.98 13.333 80.83 20zM57.736 60H34.64L23.094 40l11.547-20h23.095c3.848 6.667 7.698 13.333 11.547 20L57.736 60zm0-40H34.64L23.094 0l11.547-20h23.095L69.283 0c-3.87 6.7-8.118 14.06-11.547 20zM34.64 60H11.547L0 40l11.547-20h23.094L46.19 40 34.64 60zm0-40H11.547L0 0l11.547-20h23.094L46.19 0 34.64 20zM23.094 40H0l-5.773-10-5.774-10L0 0h23.094l11.547 20-11.547 20z'  stroke-width='1' stroke='hsla(197, 40%, 14%, 1)' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>")

    &:after
      z-index -1
      content ''
      position absolute
      top 50%
      left 50%
      width 1550px
      height 1550px
      background radial-gradient(rgba(35, 37, 46, 0.9) 10%, rgba(35, 37, 46, 0.9) 50%, rgba(38, 58, 69, 0.7)), radial-gradient(rgba(35, 37, 46, 0.9), rgba(38, 58, 69, 0))
      background-size 130% 130%, 80%, 80%
      background-position -50% -50%, 50% 50%
      animation 10s rotate linear infinite

    .title-bar
      box-sizing border-box
      display flex
      align-items center
      height 100px
      padding 20px 10px 20px 50px

      .title
        font-size 30px
        font-weight bold
        color #b3d8e0

      .close
        width 40px
        height 40px
        margin 0 20px 0 auto

    .scroll-view
      box-sizing border-box
      overflow-y auto
      overflow-y overlay
      overflow-x hidden
      scrollbar-gutter stable
      width calc(100% - 20px - 30px)
      margin 10px 20px 20px 30px
      padding-right 20px
      display flex
      flex-wrap wrap
      align-content flex-start

      .character
        box-sizing border-box
        display flex
        justify-content center
        align-items center
        flex-direction column
        width 150px
        height 200px
        margin 5px 10px
        user-select none
        cursor pointer

        .avatar
          width 130px
          height 130px
          border-radius 50%

        .name
          height 30px
          margin-top 10px
          font-size 20px
          text-align center
          color #b3d8e0
          overflow hidden
          text-overflow ellipsis
          white-space nowrap
          width 100%

.icon
  display flex
  justify-content center
  align-items center
  color #888
  border-radius 50%
  border 2px solid #888
  margin-bottom 40px

.highlight
  position relative

  &:after
    content ''
    position absolute
    bottom -5px
    width 100%
    height 5px
    background-color #42a8b9

@keyframes rotate
  from
    transform translate(-50%, -50%) rotate(0deg)

  to
    transform translate(-50%, -50%) rotate(360deg)
</style>
@/store/character
@/assets/images/image