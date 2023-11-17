import { computed, reactive } from 'vue'
import { message } from './message'

export const messageIndex = computed(() => {
  if (setting.index) {
    return message.list.findIndex((item) => {
      return item.id === setting.index
    })
  } else {
    return -1
  }
})

export const setting = reactive<{
  index?: number
}>({
  index: undefined
})
