import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useBookStore } from '../stores/bookStore'

describe('bookStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('initialises with zero default books', () => {
    const store = useBookStore()
    expect(store.books).toHaveLength(0)
  })

  it('computes bookCount', () => {
    const store = useBookStore()
    expect(store.bookCount).toBe(0)
  })

  it('adds a book', () => {
    const store = useBookStore()
    store.addBook('New Book', 'New Author')
    expect(store.books).toHaveLength(1)
    expect(store.books[0]!.title).toBe('New Book')
    expect(store.books[0]!.author).toBe('New Author')
  })

  it('finds a book by id', () => {
    const store = useBookStore()
    store.addBook('Test Book', 'Test Author')
    const id = store.books[0]!.id
    const book = store.getBookById(id)
    expect(book).toBeDefined()
    expect(book!.title).toBe('Test Book')
  })


  it('returns undefined for a non-existent id', () => {
    const store = useBookStore()
    expect(store.getBookById(999)).toBeUndefined()
  })

  it('removes a book by id', () => {
    const store = useBookStore()
    store.addBook('Temporary Book', 'Temporary Author')
    const id = store.books[0]!.id
    store.removeBook(id)
    expect(store.books).toHaveLength(0)
  })
})