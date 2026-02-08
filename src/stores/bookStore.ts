import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { type Book } from '../types.ts'

export const useBookStore = defineStore('book', () => {
  const books = ref<Book[]>([
  ])

  let nextId = 1
  const bookCount = computed(() => books.value.length)

  function addBook(title: string, author: string) {
    books.value.push({ id: nextId++, title, author })
  }

  function removeBook(id: number) {
    books.value = books.value.filter((b) => b.id !== id)
  }

  function getBookById(id: number): Book | undefined {
    return books.value.find((b) => b.id === id)
  }

  return { books, bookCount, addBook, removeBook, getBookById }
})
