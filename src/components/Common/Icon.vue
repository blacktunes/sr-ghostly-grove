<template>
  <Icon />
</template>

<script lang="tsx" setup>
import { computed } from 'vue'

const props = defineProps<{
  name: string
}>()

const Icon = computed<JSX.Element>(() => {
  switch (props.name) {
    case 'comment':
      return (
        <svg
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
        >
          <path
            d="M369.6 915.1c-13.1 0-26.2-3.8-37.7-11.3-22.4-14.6-34.5-40.3-31.6-67.1l6.1-56.1c0.3-2.9-0.9-4.7-1.7-5.6-1.1-1.2-2.4-1.8-3.9-1.8H135.7c-38.4 0-69.7-31.7-69.7-70.6V181.2c0-38.9 31.3-70.6 69.7-70.6h753.4c38.4 0 69.7 31.7 69.7 70.6v521.4c0 38.9-31.3 70.6-69.7 70.6H635.3c-0.9 0-1.7 0.2-2.5 0.7L404 905.8c-10.7 6.2-22.6 9.3-34.4 9.3z m0.4-127.5l-6.1 56.1c-0.4 3.6 1.4 5.6 2.9 6.6 2.6 1.7 4.4 0.6 5.2 0.1l228.7-131.9c10.5-6 22.4-9.2 34.5-9.2H889c3.1 0 5.7-3 5.7-6.6V181.2c0-3.7-2.5-6.6-5.7-6.6H135.7c-3.1 0-5.7 3-5.7 6.6v521.4c0 3.7 2.5 6.6 5.7 6.6h165.1c19.6 0 38.4 8.4 51.5 23.1 13.5 15 19.9 35.1 17.7 55.3z"
            fill="currentColor"
          ></path>
        </svg>
      )
    case 'heart':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          class="bi bi-heart"
          viewBox="0 0 16 16"
        >
          <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
        </svg>
      )
    case 'heart-fill':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          class="bi bi-heart-fill"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
          />
        </svg>
      )
    default:
      return <div></div>
  }
})
</script>
