import { reactive } from 'vue'

export const message = reactive<{
  list: Message[]
}>({
  list: [
    {
      id: 1700816535616,
      user: 0,
      is_like: true,
      like: 9998,
      title: '这是简单的使用说明',
      text: '#使用说明#双井号括起来的会自动识别为话题\n@咸鱼 at符号加名字后面跟个空格会识别为at\n点击下面的修改按钮可以修改内容\n左边有个按钮可以增加/修改图片\n点赞数可以直接修改',
      time: 1700816865344,
      comments: [
        {
          user: 0,
          text: '点击上面的评论按钮可以发送评论\n点击评论会弹出菜单',
          comments: [
            {
              user: 0,
              text: '没了，其他功能随缘更新'
            }
          ]
        }
      ]
    }
  ]
})
