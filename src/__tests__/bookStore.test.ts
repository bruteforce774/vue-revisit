import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useBookStore } from '../stores/bookStore'

describe('bookStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('initializes with two default books', () => {
    const store = useBookStore()
    expect(store.books).toHaveLength(2)
    expect(store.books[0]!.title).toBe('Book A')
    expect(store.books[1]!.title).toBe('Book B')
  })

  it('computes bookCount', () => {
    const store = useBookStore()
    expect(store.bookCount).toBe(2)
  })

  it('adds a book', () => {
    const store = useBookStore()
    store.addBook('New Book', 'New Author')
    expect(store.books).toHaveLength(3)
    const added = store.books[2]!
    expect(added.title).toBe('New Book')
    expect(added.author).toBe('New Author')
    expect(added.id).toBeTypeOf('number')
  })

  it('removes a book by id', () => {
    const store = useBookStore()
    store.removeBook(1)
    expect(store.books).toHaveLength(1)
    expect(store.books[0]!.id).toBe(2)
  })

  it('does nothing when removing a non-existent id', () => {
    const store = useBookStore()
    store.removeBook(999)
    expect(store.books).toHaveLength(2)
  })

  it('finds a book by id', () => {
    const store = useBookStore()
    const book = store.getBookById(1)
    expect(book).toBeDefined()
    expect(book!.title).toBe('Book A')
  })

  it('returns undefined for a non-existent id', () => {
    const store = useBookStore()
    expect(store.getBookById(999)).toBeUndefined()
  })

  it('assigns unique ids to added books', () => {
    const store = useBookStore()
    store.addBook('X', 'Y')
    store.addBook('A', 'B')
    const ids = store.books.map((b) => b.id)
    expect(new Set(ids).size).toBe(ids.length)
  })
})
