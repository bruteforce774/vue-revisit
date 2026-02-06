<script setup lang="ts">
import type { Book } from '../types'

defineProps<{
  books: Book[]
}>()

defineEmits<{
  remove: [id: number]
  select: [id: number]
}>()
</script>

<template>
  <ul class="book-list">
    <li v-for="book in books" :key="book.id" class="book-item">
      <span class="book-info" @click="$emit('select', book.id)">
        <strong>{{ book.title }}</strong> by {{ book.author }}
      </span>
      <button class="remove-btn" @click="$emit('remove', book.id)">Remove</button>
    </li>
  </ul>
  <p v-if="books.length === 0" class="empty">No books on the shelf yet.</p>
</template>

<style scoped>
.book-list {
  list-style: none;
  padding: 0;
}

.book-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  border-bottom: 1px solid #eee;
}

.book-info {
  cursor: pointer;
}

.book-info:hover {
  text-decoration: underline;
}

.remove-btn {
  background: #e74c3c;
  color: white;
  border: none;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  cursor: pointer;
}

.remove-btn:hover {
  background: #c0392b;
}

.empty {
  color: #888;
  font-style: italic;
}
</style>
