import { computed, reactive } from 'vue'
import { message } from './message'

export const messageIndex = computed(() => {
  return getMessageIndex(setting.id)
})

export const getMessageIndex = (id?: number) => {
  if (id) {
    return message.list.findIndex((item) => {
      return item.id === id
    })
  } else {
    return -1
  }
}

export const setting = reactive<{
  id?: number
}>({
  id: undefined
})
