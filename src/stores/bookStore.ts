import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { type Book } from '../types.ts'

export const useBookStore = defineStore('book', () => {
  const books = ref<Book[]>([])
  const isLoading = ref(false)
  const errorMessage = ref<string | null>(null)

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

  async function fetchBooks() {
    isLoading.value = true
    errorMessage.value = null
    try {
      const response = await fetch('/books.json')
      if(!response.ok) throw new Error('Failed to load')
      books.value = await response.json()
    } catch (error) {
      errorMessage.value = error instanceof Error ? error.message : 'Unknown error'
    } finally {
      isLoading.value = false
    }
  }

  return { books, bookCount, addBook, removeBook, getBookById, isLoading, errorMessage }
})
