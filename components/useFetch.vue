<template>
  useFetch
  <pre>{{ data }}</pre>
  <pre>{{ error }}</pre>
</template>

<script setup lang="ts">
  const { data, error } = useFetch('/api/hello')
</script>