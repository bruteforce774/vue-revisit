<script setup lang="ts">
  import { computed } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import { useBookStore } from '../stores/bookStore.ts'

  const route = useRoute()
  const router = useRouter()
  const bookStore = useBookStore()

  const book = computed(() => {
    const id = Number(route.params.id)
    return bookStore.getBookById(id)
  })

  function goBack() {
    router.push({ name: 'shelf' })
  }
</script>

<template>
  <div>
    <template v-if="book">
      <h1>{{ book.title }}</h1>
      <p>by {{ book.author }}</p>
    </template>
    <p v-else>Book not found.</p>
    <button @click="goBack">Back to shelf</button>
  </div>
</template>
