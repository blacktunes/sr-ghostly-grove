<template>
  <div class="message">
    <div class="message-box">
      <div class="image">
        <img
          src="@/assets/empty.webp"
          alt=""
        />
      </div>
      <div class="content"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
console.log(1)
</script>

<style lang="stylus" scoped>
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

    .image
      z-index 5
      width 770px
      height 770px

    .content
      z-index 5
      position relative
      flex 1
      margin-right 15px
      background radial-gradient(farthest-corner at 40% 45%, #23252e 0%, rgba(35, 37, 46, 0.9) 75%, rgba(38, 58, 69, 0.7) 100%)

      &:after
        content ''
        position absolute
        width 100%
        height 100%
        background url('@/assets/icon.webp')
        background-repeat no-repeat
        background-position center
        background-size 320px
        opacity 0.1
</style>
