<script setup lang="ts">
  import { useBookStore } from '../stores/bookStore'
  import { useRoute } from 'vue-router'
  import { useRouter } from 'vue-router'

  const bookStore = useBookStore();
  const router = useRouter();

  const newTitle = ref('')
  const newAuthor = ref('')

  function handleAdd() {

  }

  function handleRemove() {

  }

  function handleSelect() {
  
  }
</script>

<template></template>

<style></style>
