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
      <div class="item">
        <div class="user-info">
          <div class="avatar"></div>
          <div class="name">里生外熟</div>
        </div>
        <div class="content">
          <div class="content_left">
            <div class="title">有没有人在长乐天遇到一个说要比棋的怪人？</div>
            <div class="text">
              <span class="text_highlight">#见鬼实录#</span
              >最近在长乐天冒出了一个怪人，吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦
            </div>
            <div class="info">
              <div class="icon">
                <svg
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                >
                  <path
                    d="M807.68 244.8c-72-84-200.512-69.024-271.104 15.68L512 289.984l-24.576-29.504c-70.592-84.704-199.104-99.68-271.136-15.68-42.624 49.76-56.704 100.384-52.64 150.88 4.16 51.712 27.52 105.856 64.768 160.256 70.272 102.72 184.448 198.56 283.584 268.992 99.168-70.4 213.312-166.272 283.584-268.992 37.216-54.4 60.64-108.544 64.768-160.256 4.064-50.496-10.016-101.12-52.64-150.848zM512 193.888c94.144-85.728 249.12-101.728 344.32 9.312 53.344 62.272 73.28 129.632 67.84 197.632-5.376 66.816-34.976 131.68-75.744 191.264-81.376 118.912-213.28 225.6-318.208 298.24l-18.208 12.608-18.24-12.608c-104.896-72.64-236.8-179.328-318.176-298.24-40.768-59.584-70.4-124.448-75.744-191.264-5.44-68 14.496-135.36 67.84-197.632C262.912 92.16 417.888 108.16 512 193.856z"
                    fill="#5f6e73"
                  ></path>
                </svg>
                <span>123</span>
              </div>
              <div class="icon">
                <svg
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                >
                  <path
                    d="M369.6 915.1c-13.1 0-26.2-3.8-37.7-11.3-22.4-14.6-34.5-40.3-31.6-67.1l6.1-56.1c0.3-2.9-0.9-4.7-1.7-5.6-1.1-1.2-2.4-1.8-3.9-1.8H135.7c-38.4 0-69.7-31.7-69.7-70.6V181.2c0-38.9 31.3-70.6 69.7-70.6h753.4c38.4 0 69.7 31.7 69.7 70.6v521.4c0 38.9-31.3 70.6-69.7 70.6H635.3c-0.9 0-1.7 0.2-2.5 0.7L404 905.8c-10.7 6.2-22.6 9.3-34.4 9.3z m0.4-127.5l-6.1 56.1c-0.4 3.6 1.4 5.6 2.9 6.6 2.6 1.7 4.4 0.6 5.2 0.1l228.7-131.9c10.5-6 22.4-9.2 34.5-9.2H889c3.1 0 5.7-3 5.7-6.6V181.2c0-3.7-2.5-6.6-5.7-6.6H135.7c-3.1 0-5.7 3-5.7 6.6v521.4c0 3.7 2.5 6.6 5.7 6.6h165.1c19.6 0 38.4 8.4 51.5 23.1 13.5 15 19.9 35.1 17.7 55.3z"
                    fill="#5f6e73"
                  ></path>
                </svg>
                <span>123</span>
              </div>
            </div>
          </div>
          <div class="content_right"></div>
        </div>
      </div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

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

    .item
      box-sizing border-box
      width 100%
      height 270px
      padding 15px 20px
      margin-top 17px
      border 3px solid rgba(172, 172, 172, 0.5)

      &:first-child
        margin-top 0

      .user-info
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

        .name
          flex 1
          color #b3d8e0
          font-size 20px
          margin-bottom 2px

      .content
        display flex

        .content_left
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

        .content_right
          flex-shrink 0
          width 300px
          height 170px
          margin-left 30px
          background-color #ddd
</style>
