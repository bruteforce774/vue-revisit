<script setup lang="ts">
import { ref } from 'vue'
import { useBookStore } from '../stores/bookStore'
import { useRouter } from 'vue-router'
import BookList from '../components/BookList.vue'

const bookStore = useBookStore()
const router = useRouter()

const newTitle = ref('')
const newAuthor = ref('')

function handleAdd() {
  const title = newTitle.value.trim()
  const author = newAuthor.value.trim()
  if (!title || !author) return
  bookStore.addBook(title, author)
  newTitle.value = ''
  newAuthor.value = ''
}

function handleRemove(id: number) {
  bookStore.removeBook(id)
}

function handleSelect(id: number) {
  router.push({ name: 'book-detail', params: { id } })
}
</script>

<template>
  <div class="shelf">
    <h1>My Bookshelf</h1>
    <p class="count">{{ bookStore.bookCount }} book(s) on the shelf</p>

    <form class="add-form" @submit.prevent="handleAdd">
      <input v-model="newTitle" placeholder="Title" required />
      <input v-model="newAuthor" placeholder="Author" required />
      <button type="submit">Add Book</button>
    </form>

    <BookList
      :books="bookStore.books"
      @remove="handleRemove"
      @select="handleSelect"
    />
  </div>
</template>

<style scoped>
.shelf {
  max-width: 600px;
  margin: 2rem auto;
  padding: 0 1rem;
  font-family: sans-serif;
}

.count {
  color: #666;
}

.add-form {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.add-form input {
  flex: 1;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.add-form button {
  padding: 0.5rem 1rem;
  background: #2c3e50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.add-form button:hover {
  background: #1a252f;
}
</style>
