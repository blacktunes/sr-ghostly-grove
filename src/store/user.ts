import { reactive } from 'vue'

const getAvatar = (name: string) => {
  return new URL(`../assets/avatar/${name}`, import.meta.url).href
}

export const user = reactive({
  game: [
    {
      id: 1,
      name: '小桂子Guinevere',
      avatar: getAvatar('1.webp')
    },
    {
      id: 2,
      name: '实名上网',
      avatar: getAvatar('2.webp')
    },
    {
      id: 3,
      name: '无敌剑士123',
      avatar: getAvatar('3.webp')
    },
    {
      id: 4,
      name: '裳裳唯一账号',
      avatar: getAvatar('4.webp')
    },
    {
      id: 5,
      name: '无情的卜算机器',
      avatar: getAvatar('5.webp')
    },
    {
      id: 6,
      name: '用牌玩命',
      avatar: getAvatar('6.webp')
    },
    {
      id: 7,
      name: '风雨彩虹7854',
      avatar: getAvatar('7.webp')
    },
    {
      id: 8,
      name: '持明上网',
      avatar: getAvatar('8.webp')
    },
    {
      id: 9,
      name: '下雪大衣',
      avatar: getAvatar('9.webp')
    },
    {
      id: 10,
      name: '寒冷乌鸦',
      avatar: getAvatar('10.webp')
    },
    {
      id: 11,
      name: '尾巴小跟班',
      avatar: getAvatar('11.webp')
    },
    {
      id: 12,
      name: '赵相机',
      avatar: getAvatar('12.webp')
    }
  ]
})