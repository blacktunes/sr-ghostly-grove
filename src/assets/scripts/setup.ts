import { character } from '@/store/character'
import { message } from '@/store/message'
import { urlToBase64 } from './images'
import { IndexedDB } from './indexedDB'

new IndexedDB('sr-ghostly-grove-v2', '罗浮杂俎')
  .add({
    data: message,
    key: 'list',
    name: 'mseeage'
  })
  .add({
    data: character,
    key: 'custom',
    name: 'character'
  })
  .next()
  .catch((err) => {
    console.error(err)
  })

  // Preload
for (const i in character.game) {
  urlToBase64(character.game[i].avatar).then((res) => {
    character.game[i].avatar = res
  })
}
