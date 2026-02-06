<script setup lang="ts">
  import type { Book } from '../types.ts'

  defineProps<{
    books: Book[]
  }>()

  defineEmits<{
    remove: [id: number]
    select: [id: number]
  }>()
</script>

<template>
  <ul>
    <li v-for="book in books" :key="book.id">
      <span @click="$emit('select', book.id)">
        <strong>{{ book.title }}</strong> by {{ book.author }}
      </span>
      <button @click="$emit('remove', book.id)">Remove</button>
    </li>
  </ul>
  <p v-if="books.length === 0">No books on the shelf yet.</p>
</template>
