import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useBookStore } from '../stores/bookStore'

describe('bookStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('does something', () => {
    const store = useBookStore()
    // test here
  })
})
