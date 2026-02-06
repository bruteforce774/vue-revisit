import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { type Book } from '../types.ts'

export const useBookStore = defineStore('book', () => {
  const books = ref<Book[]>([
    { id: 1, title: 'Book A', author: 'Author A' },
    { id: 2, title: 'Book B', author: 'Author B' }
  ])

  return { books }
})
