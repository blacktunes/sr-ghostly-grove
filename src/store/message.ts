import { reactive } from 'vue'

export const message = reactive<{
  list: Message[]
}>({
  list: [
    {
      id: 1,
      avatar:
        'https://patchwiki.biligame.com/images/sr/thumb/9/93/n6bsmrgi3as9gttm6av8zxb3f90r5bb.png/180px-%E4%BD%A9%E4%BD%A9%EF%BC%88%E5%A4%B4%E5%83%8F%EF%BC%89.png',
      name: '里生外熟',
      is_like: true,
      like: 99999,
      image:
        'https://patchwiki.biligame.com/images/sr/thumb/1/14/d2v9gsa9uwv9y9l4co9vv3cbuv1icf7.png/1200px-%E6%9D%A5%E8%87%AA%E5%A4%A7%E4%BC%9F%E5%93%A5%E7%9A%84%E9%80%9A%E8%AE%AF%EF%BC%9A%E3%80%8C%E6%98%9F%E6%B5%B7%E4%B9%8B%E6%97%85%EF%BC%8C%E6%84%9F%E8%B0%A2%E5%90%8C%E8%A1%8C%E3%80%8D.png.jpeg',
      title: '有没有人在长乐天遇到一个说要比棋的怪人？',
      text: '@123 #见鬼实录#最近在长乐天冒出了一个怪人，吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧  啦吧啦吧啦吧啦吧啦\n吧啦吧啦<span class="text_highlight">123</span>吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦',
      comments: [
        {
          avatar:
            'https://patchwiki.biligame.com/images/sr/thumb/9/93/n6bsmrgi3as9gttm6av8zxb3f90r5bb.png/180px-%E4%BD%A9%E4%BD%A9%EF%BC%88%E5%A4%B4%E5%83%8F%EF%BC%89.png',
          name: '里生外熟',
          text: '吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦',
          comments: [
            {
              avatar:
                'https://patchwiki.biligame.com/images/sr/thumb/9/93/n6bsmrgi3as9gttm6av8zxb3f90r5bb.png/180px-%E4%BD%A9%E4%BD%A9%EF%BC%88%E5%A4%B4%E5%83%8F%EF%BC%89.png',
              name: '里生外熟',
              text: '吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦'
            }
          ]
        },
        {
          avatar:
            'https://patchwiki.biligame.com/images/sr/thumb/9/93/n6bsmrgi3as9gttm6av8zxb3f90r5bb.png/180px-%E4%BD%A9%E4%BD%A9%EF%BC%88%E5%A4%B4%E5%83%8F%EF%BC%89.png',
          name: '里生外熟',
          text: '吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦',
          comments: []
        }
      ]
    }
  ]
})
