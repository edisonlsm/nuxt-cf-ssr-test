<template>
  useAsyncData
  <pre>{{ data }}</pre>
  <pre>{{ error }}</pre>
</template>

<script setup lang="ts">
  const { data, error } = useAsyncData(
    'async_data',
    () => $fetch('/api/hello')
  )
</script>