<script setup lang="ts">
  import { useBookStore } from '../stores/bookStore'
  import { useRoute } from 'vue-router'
  import { useRouter } from 'vue-router'

  const bookStore = useBookStore();
  const route = useRoute();
  const router = useRouter();
</script>

<template></template>

<style></style>
