import { computed, reactive, watch } from 'vue'
import { message } from './message'

export const messageIndex = computed(() => {
  return getMessageIndex(setting.messageID)
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
  userID: number
  messageID?: number
  select?: [boolean]
  input: {
    edit: boolean
    index?: [] | [number] | [number, number] | [number, number, number]
  }
}>({
  userID: 1,
  messageID: undefined,
  select: undefined,
  input: {
    edit: false,
    index: undefined
  }
})

setting.userID = Number(localStorage.getItem('sr-ghostly-grove-user-id')) || 1
watch(
  () => setting.userID,
  () => {
    localStorage.setItem('sr-ghostly-grove-user-id', String(setting.userID))
  }
)
