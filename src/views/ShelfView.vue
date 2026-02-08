<script setup lang="ts">
  import { useBookStore } from '../stores/bookStore'
  import { useRoute } from 'vue-router'
  import { useRouter } from 'vue-router'
  import { ref } from 'vue'
  import BookList from '../components/BookList.vue'
  import { onMounted } from 'vue'

  const bookStore = useBookStore();
  const router = useRouter();

  const newTitle = ref('')
  const newAuthor = ref('')

  function handleAdd() {
    const title = newTitle.value.trim()
    const author = newAuthor.value.trim()
    if(!title || !author) return
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

  onMounted(() => {
    bookStore.fetchBooks()
  })
</script>

<template>
  <div>
    <h1>My Bookshelf</h1>
    <p>{{ bookStore.bookCount }} book(s) on the shelf</p>

    <form @submit.prevent="handleAdd">
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

<style></style>
