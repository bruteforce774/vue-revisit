<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useBookStore } from '../stores/bookStore'

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
  <div class="detail">
    <template v-if="book">
      <h1>{{ book.title }}</h1>
      <p class="author">by {{ book.author }}</p>
      <p class="meta">Book ID: {{ book.id }}</p>
    </template>
    <p v-else class="not-found">Book not found.</p>
    <button class="back-btn" @click="goBack">Back to shelf</button>
  </div>
</template>

<style scoped>
.detail {
  max-width: 600px;
  margin: 2rem auto;
  padding: 0 1rem;
  font-family: sans-serif;
}

.author {
  color: #555;
  font-size: 1.1rem;
}

.meta {
  color: #999;
  font-size: 0.85rem;
}

.not-found {
  color: #e74c3c;
}

.back-btn {
  margin-top: 1.5rem;
  padding: 0.5rem 1rem;
  background: #2c3e50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.back-btn:hover {
  background: #1a252f;
}
</style>
