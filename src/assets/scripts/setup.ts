import { IndexedDB } from './indexedDB'
import { message } from '@/store/message'
import { character } from '@/store/character'

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
