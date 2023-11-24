import { reactive } from 'vue'

export const inputData = reactive<{
  title: string
  text: string
  user: {
    id: number
    name: string
    avatar: string
  }
}>({
  title: '',
  text: '',
  user: {
    id: 1,
    name: '',
    avatar: ''
  }
})
