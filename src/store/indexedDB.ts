import { watch, nextTick, toRaw } from 'vue'
import { character } from './character'
import { message } from './message'

const setMessageWatch = () => {
  watch(message.list, () => {
    nextTick(() => {
      updateDB(0, toRaw(message.list))
    })
  })
}

const setCustomWatch = () => {
  watch(character.custom, () => {
    nextTick(() => {
      updateDB(1, toRaw(character.custom))
    })
  })
}

let hasDB = true
let db: IDBDatabase

interface updateDB {
  (id: 0, data: Message[]): void
  (id: 1, data: Character[]): void
}

export const updateDB: updateDB = (id, data) => {
  db.transaction('data', 'readwrite')
    .objectStore('data')
    .put({
      id,
      data: JSON.parse(JSON.stringify(data))
    })
}

export const getDB = () => {
  console.log('正在加载罗浮杂俎数据库...')
  const _db = window.indexedDB.open('sr-ghostly-grove')
  _db.onsuccess = (event) => {
    db = (event.target as IDBOpenDBRequest).result
    if (hasDB) {
      db.transaction('data', 'readonly').objectStore('data').get(0).onsuccess = (e) => {
        try {
          const data = (e.target as IDBRequest).result?.data
          message.list = data || []
        } finally {
          setMessageWatch()
        }
      }

      db.transaction('data', 'readonly').objectStore('data').get(1).onsuccess = (e) => {
        try {
          const data = (e.target as IDBRequest).result?.data
          character.custom = data || []
        } finally {
          setCustomWatch()
        }
      }
    } else {
      updateDB(0, toRaw(message.list))
      updateDB(1, toRaw(character.custom))
      setCustomWatch()
      setMessageWatch()
    }
  }

  _db.onupgradeneeded = (event) => {
    db = (event.target as IDBOpenDBRequest).result
    if (!db.objectStoreNames.contains('data')) {
      hasDB = false
      db.createObjectStore('data', { keyPath: 'id' })
    }
  }
}

try {
  getDB()
} catch (err) {
  console.error(err)
}
